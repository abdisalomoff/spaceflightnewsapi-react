import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

import { reply, repost, reposted, like, liked, share, view } from '../../assets/icons'
import { formatDate, formatLinkTweetText } from '../../assets/format-functions'

import userImage from '../../assets/images/user.jpg';

import "./Tweets.scss"


const Tweets = (props) => {
    const {inputValue} = props;
    console.log(inputValue);
  let { tweets, loading,} = useFetch();

  useEffect(() => {
    console.log("Fetched Tweets:", tweets);
  }, [tweets]);


//  LIKE BUTTON
  const tweetsJSON = localStorage.getItem("likeTweets");
  const [likeTweets, setLikeTweets] = useState(JSON.parse(tweetsJSON) || []);

  const handleLike = (tweetId) => {
    setLikeTweets((prevLikeTweets) => {
      let updateLikeTweets;

      if (prevLikeTweets.includes(tweetId)) {
        updateLikeTweets = prevLikeTweets.filter((id) => id !== tweetId);
      } else {
        updateLikeTweets = [...prevLikeTweets, tweetId];
      }
      localStorage.setItem('likeTweets', JSON.stringify(updateLikeTweets));

      return updateLikeTweets;
    });
  };
//   repost BUTTON
const repostTweetsJSON = localStorage.getItem("repostTweets");
const [repostTweets, setrepostTweets] = useState(JSON.parse(repostTweetsJSON) || []);

const handleRepost = (tweetId) => {
    setrepostTweets((prevRepostTweets) => {
      let updarepostTweets;

      if (prevRepostTweets.includes(tweetId)) {
        updarepostTweets = prevRepostTweets.filter((id) => id !== tweetId);
      } else {
        updarepostTweets = [...prevRepostTweets, tweetId];
      }
      localStorage.setItem('repostTweets', JSON.stringify(updarepostTweets));

      return updarepostTweets;
    });
  };
  

  
  
  return (
         <>
            {inputValue && (
            <li className="tweet">
                <div className="tweet-user-info">
                    <img className="tweet-user-avatar" src={userImage} alt="tweet.user.name" />
                    <div className="tweet-user-info-head">
                        <div>
                            <h2 className="tweet-user-name">Avazbek</h2>
                            <a className="tweet-user-username" href="#">@abdisalomoff</a>
                            <span className="tweet-user-point">·</span>
                            <span className="tweet-user-posttime">{formatDate(new Date())}</span>
                            <a className="tweet-user-more-btn" href="#">···</a>
                        </div>
                        <p className="tweet-user-text">{inputValue}</p>
                    </div>
                </div>
                <div className="tweet-icons">
                    <div className="reply">
                        <button>{reply}</button>
                        <span>0</span>
                    </div>
                    <div className="repost">
                        <button>
                            {repost}
                        </button>
                        <span>0</span>
                    </div>
                    <div className="like">
                        <button>
                            {like}
                        </button>
                        <span>0</span>
                    </div>
                    <div className="view">
                        <button>{view}</button>
                        <span>0</span>
                    </div>
                    <div className="share">
                        <button>{share}</button>
                    </div>
                </div>
            </li>
            )}

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
                        <div className="reply">
                            <button>{reply}</button>
                            <span>{tweet.reply_count}</span>
                        </div>
                        <div className="repost">
                            <button onClick={() => handleRepost(tweet.tweet_id)}>
                                {repostTweets.includes(tweet.tweet_id) ? reposted : repost}
                            </button>
                            <span>{tweet.quote_count + (repostTweets.includes(tweet.tweet_id) ? 1 : 0)}</span>
                        </div>
                        <div className="like">
                            <button onClick={() => handleLike(tweet.tweet_id)}>
                                {likeTweets.includes(tweet.tweet_id) ? liked : like}
                            </button>
                            <span>{tweet.retweet_count + (likeTweets.includes(tweet.tweet_id) ? 1 : 0)}</span>
                        </div>
                        <div className="view">
                            <button>{view}</button>
                            <span>{tweet.favorite_count}</span>
                        </div>
                        <div className="share">
                            <button>{share}</button>
                        </div>
    
                    </div>
                </li>
            ))}
         </>

  );

};

export default Tweets;
