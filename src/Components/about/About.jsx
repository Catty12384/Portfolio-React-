import React from 'react'
import './About.css'
import ME from '../../asset/ME-A.png'
import {FaAward} from 'react-icons/fa'
import {FaUniversity} from 'react-icons/fa'
import {TbMessageLanguage} from 'react-icons/tb'
export const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know </h5>
      <h2> About Me </h2>

      <div className="container about__container">
          <div className="about__me">
            <div classNamee="about__me-image">
              <img src={ME} alt="Myself"/>
            </div>
          </div>

          <div className="about__content">
              <div className='about__cards'>
                <article className='about__card'>
                  <FaAward className='about__icon' />
                  <h5>HIGH SCHOOL</h5>
                  <small> GRADE: 94%</small>
                </article>

                <article className='about__card'>
                  <FaUniversity className='about__icon' />
                  <h5>COLLEGE</h5>
                  <small> CGPA: 8.96</small>
                </article>

                <article className='about__card'>
                  <TbMessageLanguage className='about__icon' />
                  <h5>LANGUAGES</h5>
                  <small> Tamil & English</small>
                </article>
              </div>
              <p>
              I am an energetic young mind with an accomplished background in sports and other
              extra-curricular activities. I am a flexible person seeking employment which will allow 
              development, growth and make use of my existing skills.I am a good listener and learner, and 
              I am able to communicate well with people from all walks of life.I am a competent, loyal, hard 
              working employee with the ability to achieve tasks when working alone or as part of a team.I 
              am well organized with a clear and positive approach to problem solving.I am keen to obtain 
              new skills and training and have a flexible approach to all work situations, and find it easy to 
              adapt.I am capable of relating to people at all levels and am prepared to help them overcome 
              problems in a work situation
              </p>
              <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>

    </section>
  )
}
export default About;