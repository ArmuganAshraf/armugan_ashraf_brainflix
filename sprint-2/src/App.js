import React from 'react';
import './App.scss';
import NavBar from './Components/NavBar';
import HeroImage from './Images/video-list-0.jpg';
import Views from './Icons/SVG/Icon-views.svg';
import Likes from './Icons/SVG/Icon-likes.svg';
import Comments from './Components/Comments.js';

import Video1 from './Images/video-list-1.jpg'
import Video2 from './Images/video-list-2.jpg'
import Video3 from './Images/video-list-3.jpg'
import Video4 from './Images/video-list-4.jpg'
import Video5 from './Images/video-list-5.jpg'
import Video6 from './Images/video-list-6.jpg'
import Video7 from './Images/video-list-7.jpg'
import Video8 from './Images/video-list-8.jpg'

class App extends React.Component{

  state = {
    videos : [
      {
        id:'Video0',
        title:'BMX Rampage: 2018 Highlights',
        channel:'Red Cow',
        image:<img src={HeroImage} className='hero__image' alt='Video0' />,
      },
      {
        id: 'Video1', 
        title: 'Become A Travel Pro In One Easy Lesson…', 
        channel: 'Scotty Cranmer', 
        image:<img src={Video1} className='Video1' alt='Video1' />,
      },
      {
        id: 'Video2', 
        title: 'Les Houches The Hidden Gem Of The…', 
        channel: 'Scotty Cranmer', 
        image:<img src={Video2} className='Video1' alt='Video1' />,
      },
      {
        id: 'Video3', 
        title: 'Travel Health Useful Medical Information…', 
        channel: 'Scotty Cranmer', 
        image:<img src={Video3} className='Video1' alt='Video1' />,
      },
      {
        id: 'Video4', 
        title: 'Cheap Airline Tickets Great Ways To Save', 
        channel: 'Emily Harper', 
        image:<img src={Video4} className='Video1' alt='Video1' />,
      },
      {
        id: 'Video5', 
        title: 'Take A Romantic Break In A Boutique Hotel', 
        channel: 'Ethan Owen', 
        image:<img src={Video5} className='Video1' alt='Video1' />,
      },
      {
        id: 'Video6', 
        title: 'Choose The Perfect Accommodations', 
        channel: 'Lydia Perez',
        image:<img src={Video6} className='Video1' alt='Video1' />,
      },
      {
        id: 'Video7', 
        title: 'Cruising Destination Ideas', 
        channel: 'Timothy Austin', 
        image:<img src={Video7} className='Video1' alt='Video1' />,
      },
      {
        id: 'Video8', 
        title: 'Train Travel On Track For Safety', 
        channel: 'Scotty Cranmer', 
        image:<img src={Video8} className='Video1' alt='Video1' />,
      }
    ]
  }
  render() {
    const {videos} = this.state  
    const heroObject = videos[0];
    const sideVideos = videos.filter(video => video.id !== heroObject.id);
    return(
      <>
      <div>
        <NavBar />
        <Hero HeroObject ={heroObject}/>
        <div className='alignment'>
          <div className="alignment__components">
            <HeroInfo HeroObject ={heroObject}/>
            <Comments />
          </div>
          <div>
            <SideVideos VideoList={sideVideos}/>
          </div>
        </div>
        
        
        </div>
        
      </>
    )
  }
}



class HeroInfo extends React.Component{
  render(){
    const {HeroObject} = this.props
    return(
      <>
        <div className = "hero">
        <div className='hero__header'>
            <h1>{HeroObject.title}</h1>
              <div className='hero__icons'>
              <div>
                <p>By {HeroObject.channel} <span>12/18/2018</span></p>
              </div>

            <div className='hero__info'>
              <img src={Views} className='hero__info--views' alt='views' />
              <p>1,001,023</p>
              <img src={Likes} className='hero__info--likes' alt='views'/>
              <p>110,985</p>
            </div>
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
    );
  }
}

class Hero extends React.Component{
  render(){
    const {HeroObject} = this.props
    return(
      <>
        <div className='hero'>
          <div>
          <video width='100%' height='183px'controls poster={HeroImage} className='hero__image'>
          </video>
        </div>
          
        </div>
      </>
    )
  }
}


class SideVideos extends React.Component {
  render(){
    const {VideoList} = this.props
    return (
      <>
        <div className='videos'>
        <h4 className='videos__header'>NEXT VIDEOS</h4>
        <ul>{
          VideoList.map(video => (
            <li key = {video.id}>
            <div className='videos__list'>
              <div>{video.image}</div>
              <div className='videos__list--title'>
                <p>{video.title}</p>
                <p className='videos__list--channel'><span>{video.channel}</span></p>
              </div>
            </div>
            </li>
          ))
          }</ul>
      </div>
    </>
    )
  }
}

export default App;