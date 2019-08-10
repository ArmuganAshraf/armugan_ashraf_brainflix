import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import axios from 'axios';
import HeroInfo from './HeroInfo';
import Comments from './Comments';
import SideVideos from './SideVideos';

class Main extends React.Component{

    apiKey = '821ec83b-6c7c-4a2a-bdfd-0485c9721996';

    state = {
        isLoading: true,
        videos: [],
        heroVideo: {}
      }
    
    componentDidUpdate(){
        const { match } = this.props;
        const videoId = match.params.id;

        let video = {};

        axios.get('https://project-2-api.herokuapp.com/videos/'+videoId+'?api_key='+this.apiKey)
          .then(response => {
            video = response.data;

            this.setState({
                heroVideo: video
            });
          })
    }

    componentDidMount(){
        
    
        let videos = [];
        let video = {};
    
        axios.get('https://project-2-api.herokuapp.com/videos?api_key='+this.apiKey)
        .then(response => {
          videos = response.data;
          video = videos[0];
    
          axios.get('https://project-2-api.herokuapp.com/videos/'+video["id"]+'?api_key='+this.apiKey)
          .then(response => {
            video = response.data;

            this.setState({
                isLoading: false,
                videos: videos,
                heroVideo: video
            });
          })
    
          
        })
    
    }

    render(){
        const {isLoading, heroVideo, videos} = this.state  

        const sideVideos = videos.filter(video => video.id !== heroVideo.id);
        
        return(
            isLoading ? (<div>Loading...</div> ) : (
            <>
                <div>
                    <NavBar />
                    <Hero HeroImage ={heroVideo["image"]}/>
                    <div className='alignment'>
                        <div className="alignment__components">
                            <HeroInfo HeroObject ={heroVideo}/>
                            <Comments HeroComments={heroVideo}/>
                        </div>
                        <div>
                            <SideVideos VideoList={sideVideos}/>
                        </div>
                    </div>
                </div>
            </>
        ));
    }
}

export default Main;