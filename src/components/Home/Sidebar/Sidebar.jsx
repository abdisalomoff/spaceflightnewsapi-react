import { Link, NavLink } from 'react-router-dom'
import { home, explore, twitter, notifications, messages, bookmarks, lists, profile, more } from '../../../assets/icons'

import userImage from '../../../assets/images/user.jpg';

import "./Sidebar.scss"
import React from 'react';

const Sidebar = () => {
  console.log("Sidebar re-render");
  return (
    <div className="sidebar">
        <header><Link to="/" className="logo">{twitter}</Link></header>

        <nav>
          <NavLink to="/home">
            <span>{home} <p>Home</p></span>
          </NavLink>
          <NavLink to="/explore">
            <span>{explore} <p>Explore</p></span>
          </NavLink>
          <NavLink to="/notifications">
            <span>{notifications} <p>Notifications</p></span>
          </NavLink>
          <NavLink to="/messages">
            <span>{messages} <p>Notifications</p></span>
          </NavLink>
          <NavLink to="/bookmarks">
            <span>{bookmarks} <p>Bookmarks</p></span>
          </NavLink>
          <NavLink to="/lists">
            <span>{lists} <p>Lists</p></span>
          </NavLink>
          <NavLink to="/profile">
            <span>{profile} <p>Profile</p></span>
          </NavLink>
          <button className="more">
            <span>{more} <p>More</p></span>
          </button>
        </nav>

        <button className="tweet">Tweet</button>

        <footer>
          <Link className="account">
            <div className="photo">
              <img
                alt="Ebenezer Don"
                src={userImage}
              />
            </div>
            <div className='user-content'>
              <div className="name">Avazbek</div>
              <div className="username">@abdisalomoff</div>
            </div>
            <p>...</p>
          </Link>
        </footer>
      </div>
  )
}

export default React.memo(Sidebar);