import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs";
export const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>
      <div className='container.contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>cattyonlinestudymail@gmail.com</h5>
            <a href='mailto:cattyonlinestudymail@gmail.com' target="_blank">Send a mail</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>cattyonlinestudymail@gmail.com</h5>
            <a href='https://www.facebook.com/'target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>7558125620</h5>
            <a href='https://api.whatsapp.com/send?+7558125620'target="_blank">Send a text</a>
          </article>         
        </div>
        <form action=''>
          <input type="text" name='name' placeholder='Your Fullname' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows='7'  placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
export default Contact;