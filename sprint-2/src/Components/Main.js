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
        sideVideos: [],
        heroVideo: {}
      }
    
    componentDidUpdate(){
        const { match } = this.props;
        const videoId = match.params.id;
        console.log(videoId);

        let video = {};
        const { videos, sideVideos } = this.state;

        axios.get('https://project-2-api.herokuapp.com/videos/'+videoId+'?api_key='+this.apiKey)
          .then(response => {
            video = response.data;
            console.log(video);

            this.setState({
                isLoading: false,
                heroVideo: video,
                videos: videos,
                sideVideos: videos.filter(tmpVideo => tmpVideo.id !== video.id)
            });
          })
    }

    componentDidMount(){
        
    
        let videos = [];
        let video = {};
    
        axios.get('https://project-2-api.herokuapp.com/videos?api_key='+this.apiKey)
        .then(response => {
          videos = response.data;
          console.log(videos);
          video = videos[0];
          console.log(video);
    
          axios.get('https://project-2-api.herokuapp.com/videos/'+video["id"]+'?api_key='+this.apiKey)
          .then(response => {
            video = response.data;
            console.log(video);

            this.setState({
                isLoading: false,
                videos: videos,
                sideVideos: videos.filter(tmpVideo => tmpVideo.id !== video.id),
                heroVideo: video
            });
          })
    
          
        })
    
    }

    render(){
        const {isLoading, heroVideo, sideVideos} = this.state  
        
        //const loadingMessage = <span>Loading..</span>;
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