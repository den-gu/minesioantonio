import React from 'react'
import { projects } from '../../data/services';

export default function Projects({ setActiveMenu }) {
    return (
        <div className='relative mix-blend-difference z-10 text-white h-screen w-full'>
            <ul onMouseLeave={() => { setActiveMenu(null) }} className='border-b border-zinc-400'>
                {
                    projects.map((project, i) => {
                        return (
                            <li onMouseOver={() => { setActiveMenu(i) }} key={project.title} className='text-[2vw] p-5 border-t border-zinc-400'>
                                <p>{project.title}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}