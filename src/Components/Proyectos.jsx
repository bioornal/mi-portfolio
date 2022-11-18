import React from 'react'
import uniqid from 'uniqid'
import { projects } from '../portfolio'
import ProjectContainer from './ProjectContainer/ProjectContainer'
import './Projects/Projects.css'

function Proyectos() {
    if (!projects.length) return null

    return (
      <section id='projects' className='section projects'>
        <h2 className='section__title' style={{fontFamily:"Jaldi"}}>Proyectos</h2>
  
        <div className='projects__grid'>
          {projects.map((project) => (
            <ProjectContainer key={uniqid()} project={project} />
          ))}
        </div>
      </section>
    )
  }

export default Proyectos