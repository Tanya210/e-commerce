import React from 'react';
import Navbar from '../Components/Navbar';
import book from '../Components/book.jpg'
import Genres from '../Components/Genres';
import Footer from '../Components/Footer';

export const Homepage = () => {

  return (<>
  <Navbar title= "BookishZone" login = {localStorage.getItem('user')?"LogOut":"Login"}/>
  <img style={{ width: " 100%" , height: "40rem", objectFit: "fill", objectPosition:""}} src = {book}/>
<Genres/>
<Footer/>
  </>
  );
}

