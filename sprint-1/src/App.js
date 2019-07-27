import React from 'react';
import './App.scss';
import MainPic from './Images/Mohan-muruge.jpg';
import Logo from './Logo/Logo-brainflix.svg';
import HeroImage from './Images/video-list-0.jpg';
import Views from './Icons/SVG/Icon-views.svg';
import Likes from './Icons/SVG/Icon-likes.svg';
import Comments from './Components/Comments.js';
import SideVideos from './Components/SideVideos.js';

class App extends React.Component{
  render(){
    return(
      <>
        <NavBar />
        <Hero />
        <Comments />
        <SideVideos />
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

              <div>
                <p>By Red Cow <span>12/18/2018</span></p>
              </div>

            <div className='hero__info'>
              <img src={Views} className='hero__info--views' />
              <p>1,001,023</p>
              <img src={Likes} className='hero__info--likes'/>
              <p>110,985</p>
            </div>

          </div>
          <div className='hero__description'>
          On a gusty day in Southern Utah, a group of 25
          daring mountain bikers blew the doors off what is
          possible on two wheels, unleashing some of the
          biggest moments the sport has ever seen. While
          mother nature only allowed for one full run before
          the conditions made it impossible to ride, that was
          all that was needed for event veteran Kyle Strait,
          who won the event for the second time -- eight years
          after his first Red Cow Rampage title
          </div>
          
        </div>
      </>
    )
  }
}


export default App;