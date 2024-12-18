import { Link } from 'react-router-dom';


function Header() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">TREND ZONE</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/events">СОБЫТИЯ</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/profile">ПРОФИЛЬ</Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to="/about">О НАС</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/create">СОЗДАТЬ</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
