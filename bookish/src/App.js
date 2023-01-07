import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from './Components/Project';
import Books from './pages/Books';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import {useState} from 'react'
function App() {

const [user, setLoginUser] = useState({})



  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Project/>}/>
          <Route exact path="/books" element={localStorage.getItem('user') ? <Books/> : <LoginPage setLoginUser = {setLoginUser}/>}/>
          <Route exact path="/LoginPage" element={<LoginPage setLoginUser = {setLoginUser}/>} />
          <Route exact path = "/RegisterPage" element = {<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
   
   </>
     );
}

export default App;
