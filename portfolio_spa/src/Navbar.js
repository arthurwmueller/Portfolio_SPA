import React, {useState} from 'react';
import './Navbar.css'

const Nav = props => {
    const [isNavCollapsed, setIsNavCollapsed]=useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-expand-xl navbar-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarCollapse">
            <button className="nav-item nav-link">Font</button>
            <button className="nav-item nav-link">Sports</button>
            <button className="nav-item nav-link">Movie Reviews</button>
            <button className="nav-item nav-link">Countdown</button>
            <button className="nav-item nav-link">Iced Coffee</button>
            <button className="nav-item nav-link">FAQ</button>
          </div>
        </nav>
    );
}

export default Nav;