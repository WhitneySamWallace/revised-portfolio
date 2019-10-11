import React from 'react';
import './Abilities.css';

class Abilities extends React.Component {
  render() {
    return (
      <section>
        <div className="abilities-flex-container">
          <div className="skills-container">
            <h3>Skills</h3>
            <div className="skills-icon-container">
              <i className="devicon-git-plain-wordmark colored" aria-label="git icon"></i>
              <i className="devicon-visualstudio-plain-wordmark colored" aria-label="visualstudiocode icon"></i>
              <i className="devicon-html5-plain-wordmark colored" aria-label="html5 icon"></i>
              <i className="devicon-css3-plain-wordmark colored" aria-label="css3 icon"></i>
              <i className="devicon-javascript-plain colored" aria-label="javascript icon"></i>
              <i className="devicon-jquery-plain-wordmark colored" aria-label="jquery icon"></i>
              <i className="devicon-nodejs-plain-wordmark colored" aria-label="nodejs icon"></i>
              <i className="devicon-github-plain-wordmark colored" aria-label="github icon"></i>
              <i className="devicon-postgresql-plain-wordmark colored" aria-label="postgreql"></i>
              <i className="devicon-express-original-wordmark colored" aria-label="express"></i>
              <i className="devicon-mocha-plain colored" aria-label="mocha"></i>
              <i className="devicon-heroku-plain-wordmark colored" aria-label="heroku"></i>
              <i className="devicon-slack-plain-wordmark colored" aria-label="slack"></i>
              <i className="devicon-trello-plain-wordmark colored" aria-label="trello"></i>
            </div>
          </div>
          <div className="education">
            <h3>Education</h3>
            <ul>
              <li>Thinkful Engineering Apprenticeship - 2019</li>
              <li>Masters in Teaching - 2016</li>
              <li>BS in Criminal Justice - 2013</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Abilities;