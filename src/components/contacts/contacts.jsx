import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contacts.css';
import { MdOutlineMail } from 'react-icons/md';
import { GrLinkedin } from 'react-icons/gr';
import { BsFillPhoneFill } from 'react-icons/bs';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b700hii', 'template_lsgpzf2', form.current, 'z3gnvYHcu4B2lS_60').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact-container'>
        <div className='contact-options'>
          <div className='contact-option'>
            <MdOutlineMail className='option-icon' />
            <h4>Email</h4>
            <h5>aseelalnassiry@gmail.com</h5>
            <a href='mailto:aseelalassiry@gmail.com' target='_blank' rel='noreferrer noopener'>
              Send a message
            </a>
          </div>
          <div className='contact-option'>
            <GrLinkedin className='option-icon' />
            <h4>LinkedIn</h4>
            <h5>aseel-alnassiry-5b82991aa</h5>
            <a href='https://www.linkedin.com/in/aseel-alnassiry-5b82991aa/' target={'_blank'} rel='noreferrer'>
              View profile
            </a>
          </div>
          <div className='contact-option'>
            <BsFillPhoneFill className='option-icon' />
            <h4>Phone Number</h4>
            <h5>(315) 560-2996</h5>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' id='' required placeholder='Your Full Name' />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' id='' cols='30' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
