import React from 'react';
import './Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <nav role="navigation" className="desktop-nav">
          <ul>
            <li>
              <a className="about desktop" href="#about">About Me</a>
            </li>
            <li>
              <a className="projects desktop" href="#projects">Projects</a>
            </li>
            <li>
              <a className="abilities desktop" href="#abilities">Abilities</a>
            </li>
            <li>
              <a className="contact desktop" href="#contact">Contact Me</a>
            </li>
          </ul>
        </nav>
    );
  }
}

export default Nav;