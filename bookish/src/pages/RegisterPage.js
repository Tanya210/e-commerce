import { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import boook from '../Components/boook.jpeg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {

  const navigate = useNavigate()
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const registerUser = async(event) =>{
    event.preventDefault();
    
    try {
       await axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
      })  
        navigate('/LoginPage')
    
    } catch(err) {
      alert(err.error)
    }
  }


  return (
    <div>
        <Navbar title = "BookishZone"/>
      <div style={{height:"40rem"}}>
      <img src={boook} style= {{ width:"100%", height:"40rem", objectFit:"fill", opacity:0.7, position:"relative" }} alt = "register" />
      <div style={{width:"100%", height:"40rem", backgroundImage: "linear-gradient(0deg,rgba(0,0,0,.8) 0,transparent 60%,rgba(0,0,0,.8))", position:"absolute",bottom:"0.01px", top:"7rem"}} >
      <div style={{height:"35rem", width:"50%",  marginTop:"2.5rem", marginLeft:"25%", borderRadius:"25px", opacity:0.4, backgroundColor:"grey" , position:'relative'}}>
      </div>
      <div style={{height:"35rem", width:"50%", marginTop:"2.5rem", marginLeft:"25%", borderRadius:"25px", opacity:1, backgroundColor:"transparent", position:"absolute", bottom:"40px"}}>
        <h3 style={{fontSize:"64px", color:"#edddddc7", textAlign:"center", marginTop:"1rem"}}>Registration Form</h3>
        <form onSubmit={registerUser} className="row g-3 needs-validation" novalidate style={{marginLeft:"2rem", marginRight:"2rem"}}>
  <div className="col-md-6">
    <label for="validationCustom01" className="form-label" style={{fontSize:"20px", color:"white"}}>First name</label>
    <input type="text" className="form-control" id="validationCustom01"   name = "firstname" value = {firstname} onChange = {(e)=>{setFirstname(e.target.value)}} required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationCustom02" className="form-label" style={{fontSize:"20px", color:"white"}}>Last name</label>
    <input type="text" className="form-control" id="validationCustom02"  name = "lastname" value = {lastname} onChange = {(e)=>{(setLastname(e.target.value))}} required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>

  <div className="col-md-6">
    <label for="validationCustom03" className="form-label" style={{fontSize:"20px", color:"white"}}>Email</label>
    <input type="email" className="form-control" id="validationCustom03"  name = "email" value = {email} onChange = {(e)=>{setEmail(e.target.value)}} required/>
    <div className="invalid-feedback">
      Enter Valid Email
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationCustom03" className="form-label" style={{fontSize:"20px", color:"white"}}>Password</label>
    <input type="password" className="form-control" id="validationCustom04" name = "password" value = {password} onChange = {(e) =>{setPassword(e.target.value)}} required/>
    <div className="invalid-feedback">
      Enter correct password
    </div>
  </div>


  <div className="col-12">
    <button className="btn btn-light" type="submit" style={{borderRadius:"14px", marginLeft:"18rem", marginTop:"2rem"}}  >Submit form</button>
  </div>
</form>
      </div>
      </div>
      </div>
      <Footer/>
  </div>
  );
}
export default RegisterPage;
