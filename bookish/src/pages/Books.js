import React, {useState} from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import BooksApi from '../API/BooksApi';
import BooksCard from '../Components/BooksCard';
import CartPage from './CartPage';
const Books = () => {



  const [cart, setCart] = useState([]);
const handleClick = (item)=>{
  if(cart.indexOf(item) !== -1) return;
  setCart([...cart, item]);
};

const handleChange = (item, d) =>{
  const ind = cart.indexOf(item);
  const arr = cart;
  arr[ind].amount += d;

  if(arr[ind].amount===0)
    arr[ind].amount =1;
  setCart([...arr]);
};


const [show, setShow] = useState(true);

  const [booksData, setBooksData] = useState(BooksApi);
  return (
    <div>
      <Navbar title="BookishZone" setShow = {setShow} logout = 'LogOut' Books = "Books" Cart = "Cart"/>
      {show ? <BooksCard bookData = {booksData} setBooksData = {setBooksData} handleClick = {handleClick}/> : <CartPage cart = {cart} setCart = {setCart} handleChange = {handleChange}/>}
      <Footer/>
    </div>
  );
}

export default Books;
