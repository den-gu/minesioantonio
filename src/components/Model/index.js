import React, { useEffect, useState, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { motion } from "framer-motion-3d";
import { animate, useMotionValue, useTransform } from 'framer-motion';
import { vertex, fragment } from '../Shader';
import { useTexture, useAspect } from '@react-three/drei';
import useMouse from '../useMouse/useMouse';
import useDimension from '../useDimension';
import { projects } from '../../data/services'; // Certifique-se de que 'projects' é um array de objetos com 'src'

export default function Model({ activeMenu }) {
    // 1. Chame todos os Hooks no nível superior, incondicionalmente.

    // Carrega todas as texturas de uma vez no nível superior
    // Criamos um array de URIs para useTexture
    const textureURIs = projects.map(project => project.src);
    const textures = useTexture(textureURIs); // useTexture pode aceitar um array de URIs

    const plane = useRef();
    const { viewport } = useThree();
    const dimension = useDimension(); // Certifique-se que useDimension é um Hook válido
    const mouse = useMouse();         // Certifique-se que useMouse é um Hook válido
    const opacity = useMotionValue(0);

    // Garanta que as texturas estejam carregadas antes de tentar acessá-las
    // O useTexture retorna um array de texturas na mesma ordem que os URIs foram passados.
    // Se ainda não carregou, pode ser um array vazio ou contendo null/undefined, dependendo da implementação
    // do useTexture quando não pronto. Vamos assumir que ele retorna os objetos de textura.
    // O ponto de verificação de `textures.length === 0` é importante se `useTexture` é assíncrono.
    // Se `useTexture` é síncrono ou retorna placeholders, essa verificação pode ser ajustada.
    // Para `useTexture` do `@react-three/drei`, ele geralmente retorna os objetos de textura
    // assim que o carregamento é iniciado e atualiza quando completo.
    // No entanto, para evitar problemas na renderização inicial antes das texturas estarem prontas,
    // podemos adicionar uma verificação mais robusta ou garantir que `useTexture` seja síncrono.

    // Se `textures` ainda não está pronto, você pode retornar null ou um loading state.
    // Mas, como `useTexture` do drei é um hook, ele já gerencia o estado de carregamento internamente.
    // Se houver um problema com o carregamento, ele pode retornar `undefined` para texturas individuais.
    // Para simplificar, vou prosseguir assumindo que `textures` conterá as texturas ou `null` se não carregado.
    // Uma forma mais segura seria:
    // if (!textures || textures.length !== projects.length) {
    //     // Você pode renderizar um placeholder ou retornar null enquanto as texturas carregam
    //     return null;
    // }

    // Acessa a primeira textura do array carregado para obter as dimensões
    const firstTexture = textures[0];
    const { width, height } = firstTexture.image;

    const lerp = (x, y, a) => x * (1 - a) + y * a;

    // Chame useAspect no nível superior
    const scale = useAspect(width, height, 0.225);

    // Chame useMotionValue no nível superior
    const smoothMouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    };

    // `useEffect` é um Hook, então deve estar no nível superior
    useEffect(() => {
        // Verifique se `plane.current` existe antes de tentar acessar `material`
        if (plane.current && plane.current.material) {
            if (activeMenu !== null && activeMenu < textures.length) { // Adicione verificação para activeMenu
                plane.current.material.uniforms.uTexture.value = textures[activeMenu];
                animate(opacity, 1, { duration: 0.2, onUpdate: latest => plane.current.material.uniforms.uAlpha.value = latest });
            } else {
                animate(opacity, 0, { duration: 0.2, onUpdate: latest => plane.current.material.uniforms.uAlpha.value = latest });
            }
        }
    }, [activeMenu, textures, opacity]); // Adicione opacity às dependências do useEffect

    // `useRef` para `uniforms` também deve estar no nível superior
    // Inicialize com a primeira textura carregada
    const uniforms = useRef({
        uDelta: { value: { x: 0, y: 0 } },
        uAmplitude: { value: 0.0005 },
        uTexture: { value: firstTexture }, // Usa a primeira textura carregada
        uAlpha: { value: 0 }
    });

    // `useFrame` é um Hook, então deve estar no nível superior
    useFrame(() => {
        if (!plane.current || !plane.current.material) return; // Verifique a existência do plane e material

        const { x, y } = mouse; // mouse é um Hook, então seus valores mudam a cada frame
        const smoothX = smoothMouse.x.get();
        const smoothY = smoothMouse.y.get();

        if (Math.abs(x - smoothX) > 1) {
            smoothMouse.x.set(lerp(smoothX, x, 0.1));
            smoothMouse.y.set(lerp(smoothY, y, 0.1));
            plane.current.material.uniforms.uDelta.value = {
                x: x - smoothX,
                y: -1 * (y - smoothY)
            };
        }
    });

    // `useTransform` também no nível superior
    const x = useTransform(smoothMouse.x, [0, dimension.width], [-1 * viewport.width / 2, viewport.width / 2]);
    const y = useTransform(smoothMouse.y, [0, dimension.height], [viewport.height / 2, -1 * viewport.height / 2]);

    return (
        <motion.mesh position-x={x} position-y={y} ref={plane} scale={scale}>
            <planeGeometry args={[1, 1, 15, 15]} />
            <shaderMaterial
                vertexShader={vertex}
                fragmentShader={fragment}
                uniforms={uniforms.current}
                transparent={true}
            />
        </motion.mesh>
    );
}