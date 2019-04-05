import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const NavBar = ()=> {
  return (
    <nav>
      <div>
        <ul>
          {/* <li><NavLink to="/simple/states">States</NavLink></li> */}
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/simple/states">States</NavLink></li>
          <li><NavLink to="/simple/redux">Redux</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar 