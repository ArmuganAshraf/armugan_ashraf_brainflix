import React from 'react';
import '../App.scss';
import MainPic from '../Images/Mohan-muruge.jpg';
import Logo from '../Logo/Logo-brainflix.svg';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{ 
  render(){
    return(
      <>
        <div className='nav'> 
          <div className='nav__logo'>
          <Link to='/'><img src={Logo} alt='Brainflix logo'/> </Link></div>
          
          <div className='nav__search'>
            <input type='text' className='nav__search--input' placeholder='Search'></input>
          </div>

          <div className='nav__upload'>
            <button type='button' className='nav__upload--button'><Link to='/upload'>UPLOAD</Link></button>
            <img src={MainPic} className='nav__upload--pic' alt='Mohan Muruge'/>
          </div>
        </div> 
      </>
    )
  }
}

export default NavBar;