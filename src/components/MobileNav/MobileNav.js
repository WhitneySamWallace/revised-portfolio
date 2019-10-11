import React from 'react';
import '../Nav/Nav.css'

class MobileNav extends React.Component {
  render() {
    return (
      <nav role="navigation" className="mobile-nav">
    <ul>
      <li>
        <a className="about mobile" href="#about">About</a>
      </li>
      <li>
        <a className="projects mobile" href="#projects">Projects</a>
      </li>
      <li>
        <a className="abilities mobile" href="#abilities">Abilities</a>
      </li>
      <li>
        <a className="contact mobile" href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
    )
  }
}

export default MobileNav;