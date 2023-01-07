import React, {useState} from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'
import boook from '../Components/boook.jpeg';
import {useNavigate } from 'react-router-dom';
import axios from 'axios'
const LoginPage = () => {
const navigate =  useNavigate()

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


  const loginUser = async(event) =>{
    event.preventDefault();
    try{
      const response = await  axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
        email: email,
        password: password
      }) 
      // console.log(response.data.user._id);
      alert('Login Successful') 
      
      localStorage.setItem('user', response.data.user._id )
      console.log(localStorage.getItem('user'));
      navigate('/books')
    }
  catch(err){
    console.log(err)
    alert('please check your username and password')
  }
  }

  return (
    <div>
      
      <Navbar title = "BookishZone"/>
      <div style={{height:"40rem"}}>
      <img src={boook} style= {{ width:"100%", height:"40rem", objectFit:"fill", opacity:0.7, position:"relative" }} alt ="login"/>
      <div style={{width:"100%", height:"40rem", backgroundImage: "linear-gradient(0deg,rgba(0,0,0,.8) 0,transparent 60%,rgba(0,0,0,.8))", position:"absolute",bottom:"0.01px", top:"7rem"}}>
      <div style={{height:"35rem", width:"50%",  marginTop:"2.5rem", marginLeft:"25%", borderRadius:"25px", opacity:0.4, backgroundColor:"grey" , position:'relative'}}>
      </div>
      <div style={{height:"35rem", width:"50%", marginTop:"2.5rem", marginLeft:"25%", borderRadius:"25px", opacity:1, backgroundColor:"transparent", position:"absolute", bottom:"40px"}}>
        <h3 style={{fontSize:"64px", color:"#edddddc7", textAlign:"center", marginTop:"1rem"}}>LoginForm</h3>
        <form onSubmit={loginUser} className="row g-3 needs-validation" novalidate style={{marginLeft:"2rem", marginRight:"2rem"}}>
 
  <div className="col-md-12">
    <label for="validationCustom03" className="form-label" style={{fontSize:"25px", color:"white"}}>Email</label>
    <input type="email" className="form-control" id="validationCustom03" name = "email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
    <div className="invalid-feedback">
      Enter VAlid Email
    </div>
  </div>
  <br/>
  <br/>
  <div className="col-md-12">
    <label for="validationCustom03" className="form-label" style={{fontSize:"25px", color:"white"}}>Password</label>
    <input type="password" className="form-control" id="validationCustom03" name = "password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
    <div className="invalid-feedback">
      Enter correct password
    </div>
  </div>
 

  <div className="col-md-12" style={{marginLeft:"14rem", marginTop:"3rem"}}>
    <label for="validationCustom03" className="form-label" style={{fontSize:"25px", color:"white"}}> Not have any account?</label>
    <br/>
    <button className="btn btn-light" type="submit" style={{borderRadius:"14px", marginLeft:"4rem"}} onClick={()=>{navigate("/RegisterPage")}}>Register Form</button>
    </div>
 
  
  <div className="col-12">
    <button className="btn btn-light" type="submit" style={{borderRadius:"14px", width:"10rem", marginTop:"10px", marginLeft:"17rem"}}>Login</button>
  </div>
</form>
      </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default LoginPage;
