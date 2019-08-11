import React from 'react';
import NavBar from './NavBar';
import '../App.scss';
import Thumbnail from '../Images/Upload-video-preview.jpg';
import axios from 'axios';

class UploadPage extends React.Component{
  render(){
    return(
      <>
        <NavBar />
        <NewPhoto />
      </>
    )
  }
}

class NewPhoto extends React.Component{
  handleClick = () => {
    axios.post('http://localhost:8080/videos', {
      title: document.getElementById('title_text').value,
      channel: 'Ashraf Production',
      description: document.getElementById('desc_text').value,
      image: 'http://localhost:3000/static/media/Upload-video-preview.c814c81c.jpg'
      //'https://i.imgur.com/l2Xfgpl.jpg'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){

    return(
      <>
        <div className='upload'>
          <h1>Upload Video</h1>
          <div className='upload__content'>
            <div>
              <label>VIDEO THUMBNAIL</label>
              <img src={Thumbnail} alt='upload photo'/>
            </div>
            <div className='upload__input'>
              <label>TITLE YOUR VIDEO</label>
              <input id="title_text" className="upload__input--input1" type='text' placeholder='Add a title to your video' />
              <label>ADD A VIDEO DESCRIPTION</label>
              <input id="desc_text"className="upload__input--input2" type='text' placeholder='Add a description of your video'/>
            </div>
          </div>
            
          <div className='upload__button'>
            <button className='upload__button--button1' onClick={this.handleClick}>PUBLISH</button>
            <button className='upload__button--button2'>CANCEL</button>
          </div>
          
        </div>
      </>
    )
  }
}
export default UploadPage;