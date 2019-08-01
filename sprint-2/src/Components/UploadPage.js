import React from 'react';
import NavBar from './NavBar';
import Thumbnail from '../Images/Upload-video-preview.jpg';

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
  render(){
    return(
      <>
        <div>
          <h1>Upload Video</h1>
          <label>VIDEO THUMBNAIL</label>
          <img src={Thumbnail} alt='upload photo'/>
          <label>TITLE YOUR VIDEO</label>
          <input type='text' placeholder='Add a title to your video' />
          <label>ADD A VIDEO DESCRIPTION</label>
          <input type='text' placeholder='Add a description of your video'/>
          <button>PUBLISH</button>
          <button>CANCEL</button>
        </div>
      </>
    )
  }
}
export default UploadPage;