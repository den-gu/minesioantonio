import React, { useEffect, useState } from 'react'

const useDimension = () => {
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    const resize = () => {
        const { innerWidth, innerHeight } = window;
        setDimension({
            width: innerWidth,
            height: innerHeight
        })
    }

    useEffect(() => {
        resize();
        window.addEventListener("resize", resize)
        return () => window.removeEventListener("resize", resize)
    }, [])

    return dimension;
}


export default useDimension