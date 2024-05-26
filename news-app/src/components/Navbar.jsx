import styled from "styled-components";

const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-3 py-3" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#" onClick={()=>{setCategory("general")}}><span className="badge bg-light text-dark fs-3 ">News Mag</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        
          <li className="nav-item">
            <div className="nav-link" href="#" onClick={()=>{setCategory("general")}}>General</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" href="#" onClick={()=>{setCategory("health")}}>Health</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" href="#" onClick={()=>{setCategory("business")}}>Business</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" href="#" onClick={()=>{setCategory("science")}}>Science</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" href="#" onClick={()=>{setCategory("sports")}}>Sports</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" href="#" onClick={()=>{setCategory("technology")}}>Technology</div>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
