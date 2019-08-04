import React from 'react'; 
import '../App.scss'
import Logo1 from '../Images/Mohan-muruge.jpg'
import Logo2 from '../Images/grey.jpg'

class Comments extends React.Component{
  
    convertToDate(timestamp){
        const date = new Date(timestamp)
        const year = date.getFullYear();
        const month = date.getMonth()+ 1;
        const day = date.getDate();
        const dateTime = month+"/"+day+"/"+year;
        return dateTime;
    }
    
  render(){
    const {HeroComments} = this.props
    const heroComments = HeroComments.comments;
    
    return(
        
      <div className='comments'>
        <div className='comments__header'>
          <h2>{heroComments.length} Comments</h2>
        </div>

        <div className='comments__user'>
          <div className='comments__user__new'>
         <div><img src={Logo1} className='comments__user__new--logo' alt='Mohan Muruge'/></div> 
          <div >
            <label className='comments____user__new--label'>JOIN THE CONVERSATION</label>
            <div className='comments__user__new--submit'>
            <input type='textarea' className='comments__user__new--input' placeholder='Write comments here' />
            <input type='textarea' className='comments__user__new--input2' placeholder ='That was easily most spectacular BMX moment ever.'/>
           <button className='comments__user__new--button'>COMMENT</button>
            </div>
          </div>
          </div>
        </div>
        <div className='comments__old'>

            {heroComments.map( comment => 

                <div key={comment.id}>
                    <img src={Logo2} className='comments__old--logo' alt='old user'/>
                    <div className='comments__old__profile'>
                    <p className="comments__old__profile--name">{comment.name}
                        <span className="comments__old__profile--date">{this.convertToDate(comment.timestamp)}</span>
                    </p>
                    <p className="comments__old__profile--comment">{comment.comment}
                    </p>
                    </div>
                </div>
                )
            }
      </div>
    </div>
    )
  }
}
export default Comments;