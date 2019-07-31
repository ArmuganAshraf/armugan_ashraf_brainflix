import React from 'react';
import '../App.scss';
import MainPic from '../Images/Mohan-muruge.jpg';
import Logo from '../Logo/Logo-brainflix.svg';

class NavBar extends React.Component{ 
  render(){
    return(
      <>
        <div className='nav'> 
          <div className='nav__logo'><img src={Logo} alt='Brainflix logo'/> </div>
          
          <div className='nav__search'>
            <input type='text' className='nav__search--input' placeholder='Search'></input>
          </div>

          <div className='nav__upload'>
            <button type='button' className='nav__upload--button'>UPLOAD</button>
            <img src={MainPic} className='nav__upload--pic' alt='Mohan Muruge'/>
          </div>
        </div> 
      </>
    )
  }
}

export default NavBar;