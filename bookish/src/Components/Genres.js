import React, {useState} from 'react';
import GenreCard from './GenreCard';
import genreApi from '../API/GenreApi.js';
const Genres = () => {
    const [genreData, setGenreData] = useState(genreApi);
  return (
    <>
    <div style={{ backgroundColor:"rgb(139 129 129)", height:"32rem" }}>
    <h1 style={{textAlign:"center", color : "#efefef",   paddingTop:"2vh", fontSize:"84px", paddingRight:"1vw", textShadow:" 8px 2px black"}}>
        Genres
    </h1>
    <div style={{display:"flex", justifyContent:"space-evenly", paddingTop:"5vh"}}>
    <GenreCard genreData = {genreData}/>
    </div>
    </div>
    </>
  );
}

export default Genres;
