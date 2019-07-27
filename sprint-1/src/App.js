import React from 'react';
import './App.scss';
import MainPic from './Images/Mohan-muruge.jpg';
import Logo from './Logo/Logo-brainflix.svg';
import HeroImage from './Images/video-list-0.jpg';

class App extends React.Component{
  render(){
    return(
      <>
      <NavBar />
      <Hero />
      </>
    )
  }
}

class NavBar extends React.Component{ 
  render(){
    return(
      <>
        <img src={Logo} className='nav__logo' alt='Brainflix logo'/> 

        <div className='nav__search'>
          <input type='text' className='nav__search--input' placeholder='Search'></input>
        </div>

        <div className='nav__upload'>
          <button type='button' className='nav__upload--button'>UPLOAD</button>
          <img src={MainPic} className='nav__upload--pic' alt='Mohan Muruge'/>
        </div>
        
      </>
    )
  }
}

class Hero extends React.Component{
  render(){
    return(
      <>
        <div className='hero'>
        <video poster={HeroImage} className='hero__image'>
          <source src={HeroImage} type="video/webm" />
        </video>

        <div className='hero__header'>
          <h1>BMX Rampage: 2018 Highlights</h1>

        </div>

        </div>
      </>
    )
  }
}


export default App;