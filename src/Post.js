import React from 'react'
import './Post.css';
import  {MdVerified} from 'react-icons/md'
import  {MdChatBubbleOutline} from 'react-icons/md'
import  {TbRepeat} from 'react-icons/tb'
import  {MdFavoriteBorder} from 'react-icons/md'
import  {MdPublish} from 'react-icons/md'

const Post = ({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) => {
  return (
    <div className='post'>
      <div className='post_avatar'>
        <img src="../avatar.png" height="30px" padding="20px" alt=''  />
      </div>
      <div className='post_body'>
           <div className='post_header'>
                  <div className='post_headerText'>
                    <h3>{displayName} {" "} 
                      <span className='post_headerspecial'>
                           {verified && <MdVerified className='post_badge'/>}
                            {" "} @{username}
                      </span> 
                      
                    </h3>
                  </div>
                  <div className='header_discription'>
                    <p>{text}</p>
                  </div>

           </div>
           <img src={image} alt='' />
           <div className='post_footer'>
            <MdChatBubbleOutline fontSize="small" />
            <TbRepeat fontSize="small"/>
            <MdFavoriteBorder fontSize="small" />
            <MdPublish fontSize="small" />
           </div>
      </div>


    </div>
  )
}

export default Post
