import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <nav>
      <h2><Link to="/" className='title'>Movies App</Link></h2>
      <ul>
        <li><NavLink className="link"  to="movies/popular">Popular</NavLink></li>
        <li><NavLink className="link"  to="movies/top_rated">Top Rated</NavLink></li>
        <li><NavLink className="link"  to="movies/upcoming">Upcoming</NavLink></li>
      </ul>
    </nav>
  )
}

export default Header
