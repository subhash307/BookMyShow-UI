import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Card.style.css";

function Card({ location, theater, screen, movie }) {

   const navigate = useNavigate();
    const clickHandler = () => {
        
        navigate("/bookmyshow/theater/owner",  {state:{
            theaterId: theater.id,
            theaterName: theater.theaterName,
            movieId: movie.id,
            movieName: movie.movieName,
            screenName: screen.screenName,
            ownerName: theater.owner,
            updatedPrice: movie.movieCost
        }})
        
    }
    return (
        <div className='card-container' onClick={clickHandler}>
            <p><strong>Location Name </strong><a>{location}</a> </p>
            <p><strong>Theater Name </strong><a>{theater.theaterName}</a> </p>
            <p><strong>Screen Name </strong><a>{screen.screenName}</a> </p>
            <p><strong>Movie Name </strong><a>{movie.movieName}</a> </p>
            <p><strong>Movie Cost </strong><a>{movie.movieCost}</a> </p>
        </div>
    )
}

export default Card;