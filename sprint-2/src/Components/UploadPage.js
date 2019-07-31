import React from 'react';
import NavBar from './NavBar';
import Thumbnail from '../Images/'

class UploadPage extends React.Component{
  render(){
    return(
      <>
        <NavBar />
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
          <img src={Thumbnail} />
        </div>
      </>
    )
  }
}
export default UploadPage;