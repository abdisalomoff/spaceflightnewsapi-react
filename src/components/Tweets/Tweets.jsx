import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

import { reply, repost, reposted, like, liked, share, view } from '../../assets/icons'

import "./Tweets.scss"

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
          /* Faqat oy va sana kelsa, yani ayni paytdagi yilda tweet qilingan bo'lsa */
          return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        } else {
          /* Boshqa yil */
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
    

const Tweets = () => {
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
