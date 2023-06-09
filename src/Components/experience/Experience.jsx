import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from "react-icons/bs";
export const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2> MY EXPERIENCE</h2>
      <div className="container experience__container">
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>          
        
        <div className='experience__backend'>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
                <h4>HTML</h4>
              <small classname='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
                <h4>CSS</h4>
              <small classname='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
                <h4>JavaScript</h4>
              <small classname='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
                <h4>React</h4>
              <small classname='text-light'>Beginner</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
                <h4>Java</h4>
              <small classname='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
                <h4>BootStrap</h4>
              <small classname='text-light'>Beginner</small>
            </article>
          </div>
        </div>
      </div>
        

        <div className='experience__frontend'>
          <h3>Backend Development</h3>          
        
        <div className='experience__backend'>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
                <h4>Python</h4>
              <small classname='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
                <h4>MySQL</h4>
              <small classname='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
                <h4>Node.js</h4>
              <small classname='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
                <h4>MongoDB</h4>
              <small classname='text-light'>Beginner</small>
            </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Experience;