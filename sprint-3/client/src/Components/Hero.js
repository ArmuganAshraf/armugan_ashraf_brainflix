import React from 'react';

class Hero extends React.Component{
    render(){
      const {HeroImage} = this.props
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

export default Hero;