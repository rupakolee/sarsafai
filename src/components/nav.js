import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <header>
        <div>
          <h1>Sarsafai</h1>
        </div>
        <div className="nav-sec">
          <ul>
            <Link to='/'><li><a href="#">Home</a></li></Link>
            <li><a href="#">Schedules</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="header-btn">
          <Link to='/login'><button id="login-header">Login</button></Link>
          <Link to='/register'><button id="register-header">Register</button></Link>
        </div>
      </header>
    )
}