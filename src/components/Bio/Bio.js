import React from 'react';
import headshot from '../../Images/headshot-min.jpg';
import Resume from '../../Images/WhitneyWallaceResume.pdf';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import './Bio.css';

class Bio extends React.Component {
  render() {
    configureAnchors({scrollDuration: 1000})
    return (
      <section>
        <div className="intro-flex-container">
          <div className="headshot-container">
            <img className="headshot" src={headshot} alt="Whitney headshot" />
            <ScrollableAnchor id={'about'}>
              <p className="bio-opener">"I never thought planning math lessons for third graders would lead me to a career switch, but here we are!"</p>
            </ScrollableAnchor>
          </div>
          <h3>About Me</h3>
          <div className="bio-paragraphs">
            <div className="bio1">
              <p className="extra-bio"> As a teacher, planning math lessons was a bit like trying to figure out how to teach a butterfly why the sky
                is blue. These little eight year olds didn't care about the abstract algebraic concepts that Common Core
                wanted to teach them. They just wanted to flutter their wings in the concrete world!
              </p>
              <p className="extra-bio">While searching for ways to tangibly express these concepts, I would often find coding-esque examples. I became
                intrigued and started doing short coding lessons in my spare time.
              </p>
              <p className="extra-bio">It was instant brain food! It satiated my hunger for solving puzzles, cracking codes, and taking things apart
                and putting them back together again. My best friend, and erudite developer, spent many hours introducing
                me to the world of coding. It wasn't long before I was sure I wanted to take the career-switch leap. The
                rest, as they say, is history!
              </p>
            </div>
            <div className="bio2">
              <p>Currently, I am a student in the Engineering Immersion program at Thinkful. I love coding because it's a visual
                representation of math and logic working together to make something beautiful.
              </p>
              <p>When I'm not coding, you can find me playing with my inexhaustible dogs, creating with polymer clay, or re-watching
                the original Star Wars trilogy (or anything to do with space). I also love learning new things! My current
                learning goals, other than learning to code, include learning to work with resin and learning to play Dungeons & Dragons.
                
                <a className="resume" href={Resume} target="_blank" rel="noopener noreferrer" aria-label="Whitney Wallace PDF resume">My Resume</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Bio;