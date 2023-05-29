import React from 'react'
import './Achievements.css'
import { BiCheck } from "react-icons/bi";
export const Achievements = () => {
  return (
    <section id='achievements'>
      <h5>MY ACHIEVENMENTS</h5>
      <h2>My Hardwork</h2>
      <div className="container achievement__container">
        <article className='achievement'>
          <div className='achievement__head'>
            <h3>SPORTS</h3>
          </div>
          <ul className='achievement__list'>
            <li>
              <BiCheck className="achievement__list-icon"/>
              <p>Super Senior Divisional Volleyball Winners 2019</p>
              </li>
            <li>
              <BiCheck className="achievement__list-icon"/>
              <p>Senior State Beach Volleyball Runners 2019</p>
            </li>
            <li>
              <BiCheck className="achievement__list-icon"/>
              <p>Senior Divisional Volleyball Winners 2018</p>
            </li>
            <li>
              <BiCheck className="achievement__list-icon"/>
              <p>Senior Divisional Volleyball Winners 2017</p>
            </li>
          </ul>
        </article>


        <article className='achievement'>
          <div className='achievement__head'>
            <h3>ACADEMIC</h3>
          </div>
          <ul className='achievement__list'>
            <li>
              <BiCheck className="achievement__list-icon"/>
              <p>Idea pitching winner at Sri SaiRam University</p>
              </li>
            <li>
              <BiCheck className="achievement__list-icon"/>
              <p>Ideathon winners at Saveetha University</p>
            </li>
            <li>
              <BiCheck className="achievement__list-icon"/>
              <p>Participated at Ideathon at Chennai Institute of Technology</p>
            </li>
            <li>
              <BiCheck className="achievement__list-icon"/>
              <p>Participated at Idea pitching at Saveetha University</p>
            </li>
          </ul>
        </article>
    
        <article className='achievement'>
          <div className='achievement__head'>
            <h3>EXTRA CIRICULAR</h3>
          </div>
          <ul className='achievement__list'>
            <li>
              <BiCheck className="achievement__list-icon"/>
              <p>Intra-College level Mehandi Competition winner</p>
              </li>
            <li>
              <BiCheck className="achievement__list-icon"/>
              <p>District Portrait Sketcing Runner</p>
            </li>
            <li>
              <BiCheck className="achievement__list-icon"/>
              <p>Winner at Doodling contest held by Zivame</p>
            </li>
            <li>
              <BiCheck className="achievement__list-icon"/>
              <p> Attended workshops on Cybersecurity </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
export default Achievements;