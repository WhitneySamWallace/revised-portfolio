import React from 'react';
import Nav from '../Nav/Nav';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header role="banner" className="img1">
        <Nav/>
        <div className="intro-text">
          <h1>I'm Whitney.</h1>
          <span className="headline">A teacher turned</span>
          <span className="headline">full stack developer</span>
        </div>
      </header>
    );
  }
}

export default Header;