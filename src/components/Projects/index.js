import React from 'react'
import ScrambleText from "../ScrambleText";
import { projects } from '../../data/services';
import Container from "../Container";

// Styles
import "../../styles/global.scss";
import "../../styles/actions.scss";

export default function Projects(
    // { setActiveMenu }
) {
    return (
        <div className='w-full'>
            <div className='actions'>
                <main>
                    <Container>
                        <ul className="actions-list md:pl-5">
                            {projects.map((project, i) => {
                                return (
                                    <li key={project.title}>
                                        <a
                                            // href="https://www.instagram.com/minesio.antonio/"
                                            // target="_blank"
                                            className="hover:text-[var(--tw-text-gray-primary)]"
                                        >
                                            <ScrambleText
                                                text={project.title}
                                                className="scramble-text"
                                                duration={project.duration}
                                                placeholder=".:"
                                            />
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </Container>
                </main>
            </div>
        </div>
    )
}