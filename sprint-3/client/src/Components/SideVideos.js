import React from 'react';
import { Link } from "react-router-dom";

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
                <Link to={`/${video.id}`}>
                    <div className='videos__list'>
                        <img src={video.image} />
                        <div className='videos__list--title'>
                        <p>{video.title}</p>
                        <p className='videos__list--channel'><span>{video.channel}</span></p>
                        </div>
                    </div>
                </Link>
              </li>
            ))
            }</ul>
        </div>
      </>
      )
    }
  }

  export default SideVideos;