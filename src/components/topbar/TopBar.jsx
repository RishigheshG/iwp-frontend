import './topbar.css'
import {Link} from "react-router-dom"

export default function TopBar(props) {
  console.log(props.user)
  return (
    <div className='top'>
      <div className='topLeft'>
      <i className="topIcon fa-brands fa-facebook"></i>
      <i className="topIcon fa-brands fa-twitter"></i>
      <i className="topIcon fa-brands fa-linkedin-in"></i>

      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className = "link" to="/">HOME</Link>
          </li>
          {/* <li className='topListItem'><Link className = "link" to="/">ABOUT</Link></li>
          <li className='topListItem'><Link className = "link" to="/">CONTACT</Link></li> */}
          <li className='topListItem'><Link className = "link" to="/write">WRITE</Link></li>
          <li className='topListItem'>{props.loggedIn&&"LOGOUT"}</li>
        </ul>
      </div>
      <div className='topRight'>
        {
          props.loggedIn ? (
            <></>
          ):(
            <ul className='topList'>
              <li className='topListItem'>
                <Link className='link' to="/login">LOGIN</Link>
              </li>
              <li className='topListItem'>
                <Link className='link' to="/register">REGISTER</Link>
              </li>            
            </ul>
          )
        }
        <i className="rightIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
