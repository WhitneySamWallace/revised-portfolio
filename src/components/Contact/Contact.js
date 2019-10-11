import React from 'react';
import location from '../../Images/location.svg';
import email from '../../Images/email.svg';
import linkedin from '../../Images/linkedin.svg';
import github from '../../Images/github.svg';
import './Contact.css';

class Contact extends React.Component {
  render() {
    return (
      <section >
        <div className="contact-flex-container">
          <a href="https://www.google.com/maps/place/Vancouver,+WA/@45.6380464,-122.7590284,11z/data=!3m1!4b1!4m5!3m4!1s0x5495af63c85914f9:0x8456d5112c91e3f3!8m2!3d45.6272259!4d-122.6727305"
            target="_blank" rel="noopener noreferrer">
            <img className="contact-icon" src={location} alt="location icon" />
            <span>Vancouver, WA</span>
          </a>
          <a href="mailto:whitneysamwallace@gmail.com" target="_blank" rel="noopener noreferrer">
            <img className="contact-icon" src={email} alt="email icon" />
            <span>E-mail</span>
          </a>
          <a href="https://www.linkedin.com/in/whitneysamwallace/" target="_blank" rel="noopener noreferrer">
            <img className="contact-icon" src={linkedin} alt="linkedin icon" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/WhitneySamWallace" target="_blank" rel="noopener noreferrer">
            <img className="contact-icon" src={github} alt="github icon" />
            <span>GitHub</span>
          </a>
        </div>
      </section>
    );
  }
}

export default Contact;