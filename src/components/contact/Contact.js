import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <section className='contact container section' id='contact'>
        <h2 className='section__title' >Get In Touch</h2>

        <div className='contact__container grid' >
          <div className='contact__info' >
            <h3 className='contact__title' >Let's talk about everything</h3>
            <p className='contact__details' >Don't like forms? Send me an email. 👋 </p>
          </div>

          <form action='' className='contact__form' >
            <div className='contact__form-group' >
              <div className='contact__form-div' >
                <input type='text' className='contact__form-input' placeholder='Enter your Name' />
              </div>

              <div className='contact__form-div' >
                <input type='email' className='contact__form-input' placeholder='Enter your Email' />
              </div>  
            </div>

            <div className='contact__form-div' >
                <input type='text' className='contact__form-input' placeholder='Enter your Subject' />
              </div>

              <div className='contact__form-div contact__form-area' >
                <textarea type='text' name='' id='' cols='60' rows='10' className='contact__form-input' placeholder='Write your Message'></textarea>
              </div>

              <button className='btn' >Send Message</button>
          </form>
        </div>
      </section>
      <div className='footer' >
        <p>Made with ❤️ by Vivek Chaudhary</p>
      </div>
    </div>
  )
}

export default Contact