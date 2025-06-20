import { NavLink } from 'react-router-dom'
import wiproLogo from '../assets/logo.png'
import { useAuth } from './auth'

const NavBar = () => {
  const auth = useAuth();
  const navLinkStyles = ({ isActive }) => {
    //console.log(isActive)
    return ({
      fontWeight: isActive ? 'bold' : 'normal',
      textTransform: isActive ? 'uppercase' : 'none',
      color: isActive ? 'yellow' : 'white'
    })
  }

  return (
    <nav className="navbar navbar-dark bg-dark mb-5 p-3">
      <a class="navbar-brand" href="/">
        <img src={wiproLogo} alt="company logo" className="navbar-brand-logo" style={{ width: "50px", borderRadius: "50%" }} />
        &nbsp; &nbsp; Wipro
      </a>

      <NavLink to='/' style={navLinkStyles} className="text-decoration-none"> Home </NavLink>
      <NavLink to='/about' style={navLinkStyles} className="text-decoration-none">About</NavLink>
      <NavLink to='/contact' style={navLinkStyles} className="text-decoration-none">Contact</NavLink>
      <NavLink to='/products' style={navLinkStyles} className="text-decoration-none">Products</NavLink>

      <NavLink to='/users' style={navLinkStyles} className="text-decoration-none">Users</NavLink>

      <NavLink to='/profile' style={navLinkStyles} className="text-decoration-none">Profile</NavLink>
      {
        !auth.user && <NavLink to='/login' style={navLinkStyles} className="text-decoration-none">Login</NavLink>
      }
    </nav>
  )
}

export default NavBar
