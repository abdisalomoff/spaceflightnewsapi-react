import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

import { reply, repost, like, share, view } from '../../assets/icons'

import "./Tweets.scss"

const Tweets = () => {
  let { tweets, loading} = useFetch();

    // Datani mos kelgan formatga o'zgartirish
    const formatDate = (dateString) => {
    const date = new Date(dateString);
    const currentDate = new Date();
  
    const timeDifference = currentDate - date;
  
    if (timeDifference < 60 * 1000) {
      return Math.floor(timeDifference / 1000) + 's';
    } else if (timeDifference < 60 * 60 * 1000) {
      return Math.floor(timeDifference / (60 * 1000)) + 'm';
    } else if (timeDifference < 24 * 60 * 60 * 1000) {
      return Math.floor(timeDifference / (60 * 60 * 1000)) + 'h';
    } else if (currentDate.getFullYear() === date.getFullYear()) {
      // Sana bo'lmagan, bitta yil o'tgan joyda
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    } else {
      // Boshqa yil
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
  };
    // End
  
    // Tweet textni ichidagi kelib qolgan urlni linkka aylantirish   
  const formatLinkTweetText = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
  
    return text.replace(urlRegex, (url) => {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
    });
  };
    // End

  useEffect(() => {
    console.log("Fetched Tweets:", tweets);
  }, [tweets]);
  

  return (
         <>
            {loading && <div className="loader"></div>}
            {tweets.map((tweet, index) => (
                <li key={index} className="tweet">
                    <div className="tweet-user-info">
                        <img className="tweet-user-avatar" src={tweet.user.profile_pic_url} alt="tweet.user.name" />
                        <div className="tweet-user-info-head">
                            <div>
                                <h2 className="tweet-user-name">{tweet.user.name}</h2>
                                <a className="tweet-user-username" href="#">{tweet.user.username}</a>
                                <span className="tweet-user-point">·</span>
                                <span className="tweet-user-posttime">{formatDate(tweet.creation_date)}</span>
                                <a className="tweet-user-more-btn" href="#">···</a>
                            </div>
                            <p className="tweet-user-text" dangerouslySetInnerHTML={{ __html: formatLinkTweetText(tweet.text) }}></p>
                            {tweet.media_url && <img className="tweet-user-image" src={tweet.media_url} alt={tweet.user.name}/>}
                        </div>
                    </div>
                    <div className="tweet-icons">
                        <div>
                            <a href="#">{reply}</a>
                            <span>{tweet.reply_count}</span>
                        </div>
                        <div>
                            <a href="#">{repost}</a>
                            <span>{tweet.quote_count}</span>
                        </div>
                        <div>
                            <a href="#">{like}</a>
                            <span>{tweet.retweet_count}</span>
                        </div>
                        <div>
                            <a href="#">{view}</a>
                            <span>{tweet.favorite_count}</span>
                        </div>
                        <div>
                            <a href="#">{share}</a>
                        </div>
    
                    </div>
                </li>
        ))} 
         </>

  );
};

export default Tweets;
