import React from 'react'
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed
} from "react-twitter-embed"
import {BsSearch} from "react-icons/bs"

const Widgets = () => {
  return (
    <div className='widgets'>
       <div className='widget_input'>
         <BsSearch className='widget_searchicon' />
         <input placeholder='Search Twitter' type='text' />
       </div>
       <div className='widget_container'>
        <h2>What's happening</h2>
        < TwitterTweetEmbed tweetId='858551177860055040' />
        <TwitterTimelineEmbed
        sourceType='profile'
        screenName='cleverqazi'
        options={{height:400}}
        />
        <TwitterShareButton
         url='https://www.facebook.com/cleverprogrammer'
         options={{text:"#reactjs is awesome",via:"cleverqazi"}}
        />

       </div>
    </div>
  )
}

export default Widgets
