import React from 'react';
import Header from './components/Header/Header';
import Bio from './components/Bio/Bio';
import Divider from './components/Dividers/Dividers';
import Projects from './components/Projects/Projects';
import Abilities from './components/Abilities/Abilities';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import MobileNav from './components/MobileNav/MobileNav';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Bio />
        <Divider title={'Projects'} className={'img2'} id={'projects'}/>
        <Projects />
        <Divider title={'Abilities'} className={'img3'} id={'abilities'}/>
        <Abilities />
        <Divider title={'Contact'} className={'img4'} id={'contact'}/>
        <Contact />
        <MobileNav />
        <Footer />
      </div>
    );
  }
}

export default App;
