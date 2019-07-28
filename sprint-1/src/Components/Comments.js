import React from 'react'; 
import '../App.scss'
import Logo1 from '../Images/Mohan-muruge.jpg'
import Logo2 from '../Images/grey.jpg'

class Comments extends React.Component{
  render(){
    return(
      <div className='comments'>
        <div className='comments__header'>
          <h2>3 Comments</h2>
        </div>

        <div className='comments__user'>
          <div className='comments__user__new'>
          <img src={Logo1} className='comments__user__new--logo' alt='Mohan Muruge'/>
          <div >
            <div>
            <label className='comments____user__new--label'>JOIN THE CONVERSATION</label>
            <input type='textarea' className='comments__user__new--input' placeholder='Write comments here' />
            <button className='comments__user__new--button'>COMMENT</button>
            </div>
          </div>
          </div>
        </div>
        <div className='comments__old'>
        <div>
        <img src={Logo2} className='comments__old--logo' alt='old user'/>
        <div className='comments__old__profile'>
        <p className="comments__old__profile--name">Micheal Lyons
          <span className="comments__old__profile--date">12/18/2018</span>
        </p>
        <p className="comments__old__profile--comment">They BLEW the ROOF off at their
              last show, once everyone started
              figuring out they were going. This is
              still simply the greatest opening of a
              concert I have EVER witnessed.
        </p>
        </div>
        </div>
        <div>
        <img src={Logo2} className='comments__old--logo' alt='old user'/>
        <div className='comments__old__profile'>
        <p className="comments__old__profile--name">Gary Wong
          <span className="comments__old__profile--date">12/18/2018</span>
        </p>
        <p className="comments__old__profile--comment">Every time I see him shred I feel so
              motivated to get off my couch and
              hop on my board. He’s so talented! I
              wish I can ride like him one day so I
              can really enjoy myself!
        </p>
        </div>
        </div>
        <div>
          <img src={Logo2} className='comments__old--logo' alt='old user'/>
          <div className='comments__old__profile'>
            <p className="comments__old__profile--name">Theodore Duncan
              <span className="comments__old__profile--date">11/15/2018</span>
            </p>
            <p className="comments__old__profile--comment">How can someone be so good!!!
                  You can tell he lives for this and
                  loves to do it every day. Everytime I
                  see him I feel instantly happy! He’s
                  definitely my favorite ever!
            </p>
        </div>
        </div>
      </div>
    </div>
    )
  }
}
export default Comments;