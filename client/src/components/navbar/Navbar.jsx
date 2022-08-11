import "./navbar.css"
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const { loading, error, dispatch } = useContext(AuthContext);
  const handleLogout = ()=>{
    dispatch({ type: "LOGOUT" })
  }


  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to='/' style={{color:"inherit", textDecoration:"none"}}>
        <span className="logo">lamabooking</span>
        </Link>
        {user ? (
          <div className="navItem">
            <span>{ user.username } </span>
            <button
              className="navItems"
              onClick={() => handleLogout()}
            >Logout</button>
          </div>
        ) : (
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