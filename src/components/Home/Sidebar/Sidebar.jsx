import { Link, NavLink } from 'react-router-dom'
import { home, explore, twitter, notifications, messages, bookmarks, lists, profile, more } from '../../../assets/icons'

import userImage from '../../../assets/images/user.jpg';

import "./Sidebar.scss"

const Sidebar = () => {
  return (
    <div className="sidebar">
        <header><Link className="logo">{twitter}</Link></header>

        <nav>
          <NavLink to="/home">
            <span>{home} Home</span>
          </NavLink>
          <NavLink to="/explore">
            <span>{explore} Explore</span>
          </NavLink>
          <NavLink to="/notifications">
            <span>{notifications} Notifications</span>
          </NavLink>
          <NavLink to="/messages">
            <span>{messages} Messages</span>
          </NavLink>
          <NavLink to="/bookmarks">
            <span>{bookmarks} Bookmarks</span>
          </NavLink>
          <NavLink to="/lists">
            <span>{lists} Lists</span>
          </NavLink>
          <NavLink to="/profile">
            <span>{profile} Profile</span>
          </NavLink>
          <button className="more">
            <span>{more} More</span>
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

export default Sidebar