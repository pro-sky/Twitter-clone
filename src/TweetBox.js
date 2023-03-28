import React,{useState} from 'react'
import "./TweetBox.css";
import db from "./firebase";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  
  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Sujeet Yadav",
      username: "sky_573",
      verified: true,
      text: tweetMessage,
      image: "https://media4.giphy.com/media/YWUpVw86AtIbe/200.webp?cid=ecf05e47uz5oh3dd4o8tf7poz95fhl79ryo3fj79t65081yq&rid=200.webp&ct=g",
      
    });

    setTweetMessage("");
    setTweetImage("");
  };
  return (
  
    <div className='tweetBox'>
        
      <form>
        <div className='tweetBox-input'>
            <img src="../avatar.png" alt='' height='30px' />
          <input
           onChange={(e) => setTweetMessage(e.target.value)}
          value={tweetMessage} placeholder="What's happening?" type='text' />
        </div>
        <input 
         value={tweetImage}
         onChange={(e) => setTweetImage(e.target.value)}
        className='tweetBox-imageinput' placeholder='Enter image URL' type='text' />
        <button
         onClick={sendTweet}
         type="submit" 
        className='tweetBox-button'>Tweet</button>
      </form>
    </div>
  )
}

export default TweetBox
