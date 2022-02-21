import React, {useState} from 'react';
import './Navbar.css'

const Nav = props => {
    const [isNavCollapsed, setIsNavCollapsed]=useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarCollapse">
            <button onClick={()=>props.changeView("About")} className="nav-item nav-link">About Me</button>
            <button onClick={()=>props.changeView("Font")} className="nav-item nav-link">Font</button>
            <button onClick={()=>props.changeView("Sports")} className="nav-item nav-link">Sports</button>
            <button onClick={()=>props.changeView("Movies")} className="nav-item nav-link">Movie Reviews</button>
            <button onClick={()=>props.changeView("Countdown")} className="nav-item nav-link">Countdown</button>
          </div>
        </nav>
    );
}

export default Nav;

