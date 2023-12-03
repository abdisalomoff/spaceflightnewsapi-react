import { Link } from 'react-router-dom'

import "./Feed.scss"

import { darkmode,image, gif, stats, emoji, schedule } from '../../../assets/icons'

import userImage from '../../../assets/images/user.jpg';
import Tweets from '../../Tweets/Tweets';

const Feed = () => {
  return (
    <div className="feed">
      <header className="container">
        <div className="header-inner">
          <h1>Home</h1>
          <button>{darkmode}</button>
        </div>
      </header>

      <form className='container'>
        <div className="feed-input">
          <img src={userImage} alt="avatar" width="40px" />
          <input
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <div className='feed-collage'>
          <div>
            <Link to="/image"><span>{image}</span></Link>
            <Link to="/gif"><span>{gif}</span></Link>
            <Link to="/stats"><span>{stats}</span></Link>
            <Link to="/emoji"><span>{emoji}</span></Link>
            <Link to="/emoji"><span>{schedule}</span></Link>
          </div>
          <button className="tweet">Tweet</button>
        </div>
      </form>

      <ul className="container">
        <Tweets/>
      </ul>
    </div>
  )
}

export default Feed


