import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './books2.jpeg';
const Navbar = (props) => {
  const navigate = useNavigate();
  function login(){
    navigate("/LoginPage")
  }
  function logout(){
      localStorage.clear();
       navigate("/")
  }
  function dashboard(){
     navigate("/")
}
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{height:"7rem"}}>
  <div className="container-fluid" style={{display:"flex", justifyContent:"space-between"}}>
    <div style= {{width:"100%", height:"7rem", paddingTop:"1rem"}}>
    <a className="navbar-brand" onClick={dashboard} style={{fontSize:"50px", marginLeft:"3rem"}}>{props.title}</a>
    <img src={logo} style={{height:"4rem", marginLeft:"0.5rem", marginBottom:"1.7rem" }}/>
    </div>
    <div >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav" style={{marginRight:"2rem"}}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" onClick={login}  style={{fontSize:"24px", cursor:"pointer"}}>{props.login}</a>
        </li>
        &nbsp;&nbsp;
        <li className="nav-item">
          <a className="nav-link" onClick={() => {props.setShow(true)}} style={{fontSize:"24px", cursor:"pointer" }}>{props.Books}</a>
        </li>
        &nbsp;&nbsp;
        <li className="nav-item">
          <a className="nav-link" onClick={() => {props.setShow(false)}} style={{fontSize:"24px", cursor:"pointer" }}>{props.Cart}</a>
        </li>
        &nbsp;&nbsp;
        <li className="nav-item">
          <a className="nav-link" onClick={logout} style={{fontSize:"24px", cursor:"pointer"}}>{props.logout}</a>
        </li>
      </ul>
    </div>
    </div>
  </div>
</nav>
    </>
       
   
  );
}

export default Navbar;
