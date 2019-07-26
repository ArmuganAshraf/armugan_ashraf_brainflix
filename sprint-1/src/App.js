import React from 'react';
import './App.scss';
import Logo from './Logo/Logo-brainflix.svg';

class App extends React.Component{
  render(){
    return(
      <NavBar />
    )
  }
}

class NavBar extends React.Component{
  render(){
    return(
      <>
        <img src={Logo} className='nav__logo'/>
        <input type='text' className='nav__input'></input>
        <button type='button' className='nav__button'>UPLOAD</button>
      </>
    )
  }
}

export default App;