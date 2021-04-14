import React from 'react';
import { NavLink } from 'react-router-dom';
 
const Header = () => {
    return (
        <div className="header">
            <NavLink to='people'>People</NavLink>
            <NavLink to='planets'>Planets</NavLink>
            <NavLink to='spaceship'>Spaceship</NavLink>
        </div>
    )
}

export default Header