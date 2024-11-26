import { Link } from 'react-router-dom';
import './scss/style.scss';

function Header() {
  return (
    <>
      <header className='header-g'>
        <img className='logo' alt="Logo" src='/src/assets/logo.png'/>
        <div className='entry-btn'>
          <button className='signup-btn'>
            <Link to="/signup" className='link-btn'>SIGN UP</Link>
          </button>
          <button className='login-btn'>
            <Link to="/login"  className='link-btn'>LOGIN</Link>
          </button>
        </div>
      </header>
      <nav>
        <ul>
          <li><a href="#clinics">CLINICS</a></li>
          <li><a href="#laboratory">LABORATORIES</a></li>
          <li><Link to="/about">ABOUT US</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
