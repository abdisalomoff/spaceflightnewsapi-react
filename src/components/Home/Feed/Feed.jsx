import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'

import "./Feed.scss"
import { darkmode,image, gif, stats, emoji, schedule } from '../../../assets/icons'
import userImage from '../../../assets/images/user.jpg';
import Tweets from '../../Tweets/Tweets';
import { useState } from 'react';


const Feed = () => {
  const postInputRef = useRef()
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState(''); 

  const submit = (evt) => {
    evt.preventDefault();
    let inputValue = postInputRef.current.value;
    console.log(inputValue);

    // Local storagega saqlash
    localStorage.setItem("inputValue", inputValue);
    setInputValue(inputValue);
  };

  useEffect(() => {
    // Local storagedan bor malumotlarni olish
    const storedInputValue = localStorage.getItem("inputValue");
    if (storedInputValue) {
      setInputValue(storedInputValue);
    }
  }, []);

  


  return (
    <div className="feed">
      <header className="container">
        <div className="header-inner">
          <h1>Home</h1>
          <button className='darkmode'>{darkmode}</button>
        </div>
      </header>

      <form onSubmit={submit} className='form container'>
        <div className="feed-input">
          <img src={userImage} alt="avatar" width="40px" />
          <input
            ref={postInputRef}
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

      {loading ? (
      <div className="loader"></div>
    ) : (
      <ul className="container">
        <Tweets inputValue={inputValue} />
      </ul>
    )}
    </div>
  )
}

export default Feed


