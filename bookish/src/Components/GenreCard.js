import React from 'react';
import {useNavigate } from "react-router-dom";
import Books from '../pages/Books';
const GenreCard = ({genreData}) => {
   const navigate = useNavigate();

  return (
    <>
    {
        genreData.map((curElement)=>{
            return(
                <>
                <div className="card" style={{width: "16rem", borderRadius:"20px"}} key = {curElement.id}>
                <div className="card-body">
                  <h5 className="card-title" style={{textAlign:"center", fontSize:"32px"}}>{curElement.Genre}</h5>
                  <p className="card-text" style={{paddingLeft:"0.2rem"}}>{curElement.Description}</p>
                  <br/>
                  <button onClick={()=>{localStorage.getItem('user')?navigate("/books"):navigate("/LoginPage")}} className="btn btn-dark" style={{marginLeft:"3rem"}}>Check Books</button>
                </div>
              </div>    
              </>
            )
        })
    }
   
    </>
  );
}

export default GenreCard;
