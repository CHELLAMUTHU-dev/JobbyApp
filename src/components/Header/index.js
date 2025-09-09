import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {GoHome, GoBriefcase} from 'react-icons/go'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Header = props => {
  const logout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('./login')
  }

  const navigate = () => {
    const {history} = props
    history.replace('/')
  }

  return (
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
        className="nav-logo"
        onClick={navigate}
      />
      <div className="lg-screen-view">
        <ul className="nav-links">
          <Link to="/" className="link">
            <li>Home</li>
          </Link>
          <Link to="/jobs" className="link">
            <li>jobs</li>
          </Link>
        </ul>
        <button type="button" className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
      <div className="mobile-screen-view">
        <ul className="nav-links">
          <Link to="/" className="link">
            <li>
              <GoHome />
            </li>
          </Link>
          <Link to="/jobs" className="link">
            <li>
              <GoBriefcase />
            </li>
          </Link>
        </ul>
        <button type="button" className="logout-btn" onClick={logout}>
          <FiLogOut />
        </button>
      </div>
    </div>
  )
}

export default withRouter(Header)
