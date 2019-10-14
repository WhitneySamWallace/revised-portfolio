import React from 'react';
import SproutInAction2 from '../../Images/SproutInAction2.png';
import LearningLatin from '../../Images/LearningLatin.png';
import SproutPrototype from '../../Images/Main8.png';
import StudentDashboard from '../../Images/StudentDashboard.png';
import './Projects.css';

class Projects extends React.Component {
  render() {
    return (
      <section>
        <div className="project-flex-container">
          <h3 className="vibes-sprout-title">Sprout</h3>
          <div className="project-inner-container">
            <div className="project-description-container">
              <p className="project-description">Sprout is a formative assessment tool to help 
              teachers set goals with students and give timely, specific, and goal-oriented feedback. 
              Sprout helps teachers set and track individual, real-time goals with students to keep them
              on track to reach the lesson's learning target.  In session, teachers can view all students, 
              the current learning target, and each student's current goal.</p>
              <p className="project-description">When checking in with a student, 
              teachers can choose a priority of high, medium, or low for the student's current goal.  Sprout
              will alert the teacher in 5, 10, or 15 minutes that the student is ready for a checkin. (Current 
              times are set to 5, 10, and 15 seconds for demo purposes.)  Teachers can also include exit tickets when assigning a 
              learning target.  After ending a session, student responses to the exit ticket can be monitored in real time.</p>
              <h4>Demo Account Info:</h4>
              <p className="project-description">Email: Teacher@email.com</p>
              <p className="project-description">Password: Password1!</p>
              <div className="project-links">
                <div className="live-link-button">
                  <a href="https://sprout-app.now.sh/" className="live-text" rel="noopener noreferrer" target="_blank" aria-label="link to live code example">LIVE</a>
                </div>
                <span>|</span>
                <a href="https://github.com/thinkful-ei-emu/ZOMGPOW-Client" target="_blank" rel="noopener noreferrer" aria-label="link to GitHub code repository">
                  <i className="devicon-github-plain-wordmark colored"></i>
                </a>
              </div>
            </div>
            <div className="project-photo-container">
              <img className="project-photo" src={SproutInAction2} alt="sprout app" />
              <img className="project-photo" src={StudentDashboard} alt="student dashboard view of Sprout app" />
            </div>
          </div>
          <div className="technology-badges" aria-label="technologies used">
            <i className="devicon-react-original-wordmark colored" aria-label="react"></i>
            <i className="devicon-html5-plain-wordmark colored" aria-label="html5"></i>
            <i className="devicon-css3-plain-wordmark colored" aria-label="css3"></i>
            <i className="devicon-javascript-plain colored" aria-label="javascript"></i>
            <i className="devicon-nodejs-plain-wordmark colored" aria-label="nodejs"></i>
            <i className="devicon-postgresql-plain-wordmark colored" aria-label="postgresql"></i>
            <i className="devicon-express-original-wordmark colored" aria-label="express"></i>
            <i className="devicon-heroku-plain-wordmark colored" aria-label="heroku"></i>
            <i className="devicon-mocha-plain colored" aria-label="mocha"></i>
          </div>
        </div>
        <div className="project-divider"></div>
        <div className="project-flex-container">
          <h3 className="learning-latin-title">Learning Latin</h3>
          <div className="project-inner-container">
            <div className="project-description-container">
              <p className="project-description">Learning Latin is an educational app that will
              help you learn another language by using a spaced repetition algorithm to show you 
              flashcards of 10 Latin words.</p>
              <p className="project-description">Spaced repetition is a learning technique that 
              incorporates increasing intervals of time between previously learned material.  Words
               that are correctly translated get moved farther back in the queue, while words that 
               are answered incorrectly are kept towards the front of the queue.  Learners will be 
               exposed to incorrectly answered words at a much higher rate than correctly answered words.</p>
              <h4>Demo Account Info:</h4>
              <p className="project-description">Username: DwightSchrute</p>
              <p className="project-description">Password: Password1!</p>
              <div className="project-links">
                <div className="live-link-button">
                  <a href="https://w-a-a-learning-latin.now.sh/login" className="live-text" rel="noopener noreferrer" target="_blank" aria-label="link to live code example">LIVE</a>
                </div>
                <span>|</span>
                <a href="https://github.com/WhitneySamWallace/spaced-repetition" target="_blank" rel="noopener noreferrer" aria-label="link to GitHub code repository">
                  <i className="devicon-github-plain-wordmark colored"></i>
                </a>
              </div>
            </div>
            <div className="project-photo-container">
              <img className="project-photo" src={LearningLatin} alt="Learning Latin app" />
            </div>
          </div>
          <div className="technology-badges" aria-label="technologies used">
            <i className="devicon-react-original-wordmark colored" aria-label="react"></i>
            <i className="devicon-html5-plain-wordmark colored" aria-label="html5"></i>
            <i className="devicon-css3-plain-wordmark colored" aria-label="css3"></i>
            <i className="devicon-javascript-plain colored" aria-label="javascript"></i>
            <i className="devicon-nodejs-plain-wordmark colored" aria-label="nodejs"></i>
            <i className="devicon-postgresql-plain-wordmark colored" aria-label="postgresql"></i>
            <i className="devicon-heroku-plain-wordmark colored" aria-label="heroku"></i>
            <i className="devicon-express-original-wordmark colored" aria-label="express"></i>
          </div>
        </div>
        <div className="project-divider"></div>
        <div className="project-flex-container">
          <h3 className="sprout-prototype-title">Sprout <span>(prototype)</span></h3>
          <div className="project-inner-container">
            <div className="project-description-container">
              <p className="project-description">Sprout is the original prototype that grew into the fully functioning, multi-view-supporting app
              with the same name.  The original Sprout prototype showed the functioning teacher view of goal setting with students and the timer functionality.</p>
              <h4>Demo Account Info:</h4>
              <p className="project-description">Username: Teacher1</p>
              <p className="project-description">Password: Teacher1pass!</p>              
              <div className="project-links">
                <div className="live-link-button">
                  <a href="https://sprout-capstone-1.whitneysamwallace.now.sh/" className="live-text" target="_blank"  rel="noopener noreferrer" aria-label="link to live code example">LIVE</a>
                </div>
                <span>|</span>
                <a href="https://github.com/WhitneySamWallace/Sprout-Client" target="_blank" rel="noopener noreferrer" aria-label="link to GitHub code repository">
                  <i className="devicon-github-plain-wordmark colored"></i>
                </a>
              </div>
            </div>
            <div className="project-photo-container">
              <img className="project-photo" src={SproutPrototype} alt="sprout prototype app" />
            </div>
          </div>
          <div className="technology-badges" aria-label="technologies used">
            <i className="devicon-react-original-wordmark colored" aria-label="react"></i>
            <i className="devicon-html5-plain-wordmark colored" aria-label="html5"></i>
            <i className="devicon-css3-plain-wordmark colored" aria-label="css3"></i>
            <i className="devicon-javascript-plain colored" aria-label="javascript"></i>
            <i className="devicon-nodejs-plain-wordmark colored" aria-label="nodejs"></i>
            <i className="devicon-postgresql-plain-wordmark colored" aria-label="postgresql"></i>
            <i className="devicon-express-original-wordmark colored" aria-label="express"></i>
            <i className="devicon-heroku-plain-wordmark colored" aria-label="heroku"></i>
            <i className="devicon-mocha-plain colored" aria-label="mocha"></i>
          </div>
        </div>
      </section>
    )
  }
}

export default Projects;