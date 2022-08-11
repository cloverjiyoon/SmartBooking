import "./navbar.css"
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to='/' style={{color:"inherit", textDecoration:"none"}}>
        <span className="logo">RacoonBooking</span>
        </Link>
        {user ? (user.username) : (
          <div className="navItems">
            <a href="/register" className="navButton">Register</a>
            <a href="/login" className="navButton">Login</a>
          </div>
        )}

      </div>
    </div>
  )
}

export default Navbar