import React, { useState, useEffect } from "react";
import "../styles/cart.css";
const CartPage = ({ cart, setCart, handleChange }) => {

    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
      const arr = cart.filter((item) => item.id !== id);
      setCart(arr);
      handlePrice();
    };
  
    const handlePrice = () => {
      let ans = 0;
      cart.map((item) => (ans += item.price * item.amount));
      setPrice(ans);
    };
  
    useEffect(() => {
      handlePrice();
    });

    const loadScript = (src)=>{
 return new Promise((resolve)=>{
  const script = document.createElement('script')
  script.src = src

  script.onload = ()=>{
    resolve(true)
  }

  script.onerror = ()=>{
    resolve(false)
  }
  document.body.appendChild(script)
 })
    }

    const displayRazorpay = async(amount) =>{
      const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

      if(!res){
        alert('you are offline...Failed to load')
        return
      }


      const options = {
        key :'rzp_test_qFHf6B20S90SuQ',
        currency:"INR",
        amount: amount*100,
        name : "navdeep",
        descriptipn: "Thanks for purchasing",

        handler : function(response){
          alert(response.razorpay_payment_id)
          alert("payment successful")
        },
        prefill:{
          name: "navdeep"
        }
      };

      const paymentObject = new window.Razorpay(options)
      paymentObject.open()
    }

  return (
    
      <div style={{minHeight:"80vh",height:"100%", backgroundColor:"rgb(139 129 129)", marginTop:"-1.25rem", paddingLeft:"5rem", paddingRight:"5rem" , paddingTop:"5rem"}}>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image} alt="" style={{width:"15rem", height:"15rem", borderRadius:"20px"}}/>
            <p style={{fontSize:"48px",width:"600px", marginTop:"5rem", marginLeft:"2rem", color:"#f9f1da"}}>{item.name} </p>
          </div>
          <div>
            <button onClick={() => {handleChange(item, 1)}}style={{borderRadius:"7px"}}>+</button>
            <button style={{borderRadius:"7px"}}>{item.amount}</button>
            <button onClick={() => {handleChange(item, -1)}}style={{borderRadius:"7px"}}>-</button>
          </div>
          <div>
            <span style={{borderRadius:"7px", fontSize:"20px", color:"black"}}>{item.price}</span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => handleRemove(item.id)} style={{color:"white", backgroundColor:"black", borderRadius:"14px", fontSize:"24px"}} >Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span style={{ color:"white", marginTop:"4vh"}} >Total Price of your Cart</span>
        <span style={{ color:"white", marginTop:"4vh"}}>Rs - {price}</span>
      </div>
        <br/>
        <button style = {{width:"12rem", height:"3rem", borderRadius:"14px", backgroundColor:"black", color :"white", fontSize:"20px", marginLeft:"60em"}}  onClick = {()=>{displayRazorpay(price)}} >Proceed to payment</button>
      <br/><br/>
      </div>
    
  );
}

export default CartPage;
