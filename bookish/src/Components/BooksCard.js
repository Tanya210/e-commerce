import React from 'react';
import { useNavigate } from 'react-router-dom';
import BooksApi from '../API/BooksApi';
const BooksCard = ({bookData, setBooksData, handleClick}) => {
    const navigate = useNavigate();
    // const [booksData, setBooksData] = useState(BooksApi);
    const filterItem = (category)=>{
        const updatedList = BooksApi.filter((curElement) =>{
            return curElement.Genre === category;
        });
        setBooksData(updatedList);
    }
  return (
    <div style={{height:"100%", backgroundColor:"rgb(139 129 129)"}}>
        <nav className="navbar" style={{marginLeft:"17rem"}}>
        <div class="btn-group" role="group" aria-label="Basic example" >
        <button type="button" class="btn btn-dark" style={{borderRadius:"14px", width:"8rem", margin:"1rem"}} onClick={()=>filterItem("Romance")}>Romance</button>
        <button type="button" class="btn btn-dark" style={{borderRadius:"14px", width:"8rem", margin:"1rem"}} onClick={()=>filterItem("Philosophy")}>Philosophy</button>
        <button type="button" class="btn btn-dark" style={{borderRadius:"14px", width:"8rem", margin:"1rem"}} onClick={()=>filterItem("Thriller")}>Thriller</button>
        <button type="button" class="btn btn-dark" style={{borderRadius:"14px", width:"8rem", margin:"1rem"}} onClick={()=>filterItem("Fiction")}>Fiction</button>
        <button type="button" class="btn btn-dark" style={{borderRadius:"14px", width:"8rem", margin:"1rem"}} onClick={()=>filterItem("Tech")}>Tech</button>
        <button type="button" class="btn btn-dark" style={{borderRadius:"14px", width:"8rem", margin:"1rem"}} onClick={()=>setBooksData(BooksApi)}>ALL</button>
</div>
      </nav>
    <div style={{display:"grid", gridTemplateColumns:"auto auto auto", paddingTop:"2rem", paddingLeft:"5rem",    gridRowGap:"8rem",}}>
    {
        bookData.map((curElement)=>{
            return(
                <>
                <div className="card" style={{width: "25rem", borderRadius:"20px", backgroundColor:"#dadada"}} key = {curElement.id}>
                <div className="card-body">
                    <img src={curElement.image} alt = ".." style={{ height:"20rem", width:"300px", borderRadius:"14px", marginLeft:"2rem"}}/>
                  <h5 className="card-title" style={{textAlign:"center", fontSize:"32px", marginTop:"2rem"}}>{curElement.name}</h5>
                  <h5 className="card-title" style={{textAlign:"center", fontSize:"16px"}}> Genre: {curElement.Genre}</h5>
                  <p className="card-text" style={{paddingLeft:"0.2rem", fontSize:"13px"}}>{curElement.Description}</p>
                  <br/>
                  <h5 className="card-title" style={{textAlign:"center", fontSize:"18px"}}>&#8377; Price: {curElement.price}</h5>
                  
                  <button className="btn btn-dark" style={{marginLeft:"7rem", width:"40%"}} onClick = {()=>{handleClick(curElement)}}>Buy</button>
                </div>
              </div>    
              </>
            )
        })
    }
   
    </div>
    <br/>
    <br/>
    </div>
  );
}

export default BooksCard;
