import React from 'react';
import Views from '../Icons/SVG/Icon-views.svg';
import Likes from '../Icons/SVG/Icon-likes.svg';

class HeroInfo extends React.Component{
    render(){
      const {HeroObject} = this.props
      const date = new Date(HeroObject.timestamp);
      const year = date.getFullYear();
      const month = date.getMonth()+ 1;
      const day = date.getDate();
      const dateTime = month+"/"+day+"/"+year;
      return(
        <>
          <div className = "hero">
          <div className='hero__header'>
              <h1>{HeroObject.title}</h1>
                <div className='hero__icons'>
                <div>
                  <p>By {HeroObject.channel} <span>{dateTime}</span></p>
                </div>
  
              <div className='hero__info'>
                <img src={Views} className='hero__info--views' alt='views' />
                <p>{HeroObject.views}</p>
                <img src={Likes} className='hero__info--likes' alt='views'/>
                <p>{HeroObject.likes}</p>
              </div>
              </div>
            </div>
            <div className='hero__description'>
            {HeroObject.description}
            </div>
          </div>
          
        </>
      );
    }
}

export default HeroInfo;