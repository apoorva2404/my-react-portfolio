import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uoi713k', 'template_vru5ffh', form.current, '2tePDGOUX3wmRAP2_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5> 
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>apoorvagaur0010@gmail.com</h5>
            <a href="mailto:apoorvagaur0010@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>apoorvasharma</h5>
            <a href="https://m.me/apoorva.sharma.77312" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+1 (514) 961-1275</h5>
            <a href="https://web.whatsapp.com/send?phone+15149611275" target="_blank">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message"rows="7" placeholder="Your Message" required />
          <button type="submit" className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
