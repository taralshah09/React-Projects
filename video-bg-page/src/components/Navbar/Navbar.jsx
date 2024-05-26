import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav'>
        <h2 id='nav-logo'>Logo</h2>
        <ul className="nav-menu">
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className='contact'>Contact</li>
        </ul>
      
    </div>
  )
}

export default Navbar
