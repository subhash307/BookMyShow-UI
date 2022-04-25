import React, { useState } from 'react'
import Card from './Card.component'
import "./CardList.style.css"

function CardList({location, theaters}) {

  return (
    <div className="card-list">
        
        {
            theaters.map(theater => (
                theater.screen.map( scr => (
                        <Card key={scr.movie.id} 
                        location={location} 
                        theater={theater} 
                        screen = {scr} 
                        movie={scr.movie}  />
                ))
            ))
        }
    </div>
  )
}

export default CardList