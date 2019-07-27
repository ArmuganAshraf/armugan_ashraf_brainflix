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
          <img src={Logo1} className='comments__user--logo' alt='Mohan Muruge'/>
          <div className='comments__user__new'>
            <label className='comments____user__new--label'>JOIN THE CONVERSATION</label>
            <input type='textarea' className='comments__user__new--input' placeholder='Write comments here' />
            <button className='comments__user__new--button'>COMMENT</button>
          </div>
        </div>
        <div className='comments__old'>
        <div>
        <img src={Logo2} className='comments__old--logo' alt='old user'/>
        <p className="comments__old__name">Micheal Lyons
          <span className="comments__old__date">12/18/2018</span>
        </p>
        <p className="comments__old__comment">They BLEW the ROOF off at their
              last show, once everyone started
              figuring out they were going. This is
              still simply the greatest opening of a
              concert I have EVER witnessed.
        </p>
        </div>
        <img src={Logo2} className='comments__old--logo' alt='old user'/>
        <p className="comments__old__name">Gary Wong
          <span className="comments__old__date">12/18/2018</span>
        </p>
        <p className="comments__old__comment">Every time I see him shred I feel so
              motivated to get off my couch and
              hop on my board. He’s so talented! I
              wish I can ride like him one day so I
              can really enjoy myself!
        </p>
        <div>

        <div>
        <img src={Logo2} className='comments__old--logo' alt='old user'/>
        <p className="comments__old__name">Theodore Duncan
          <span className="comments__old__date">11/15/2018</span>
        </p>
        <p className="comments__old__comment">How can someone be so good!!!
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