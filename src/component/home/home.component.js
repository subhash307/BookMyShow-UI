import React, { useEffect, useState } from 'react'
import CardList from './CardList.component';
import "./home.style.css"


function Home({movieDetails}) {
    let movieList = [];

    movieDetails.forEach(item => {
        movieList.push(<>
            <div className='location-area'>
                <b>Location: </b> <a>{item.locationName}</a>
            </div>
            <div className='card-area'>
                <CardList key={item.id} location={item.locationName} theaters={item.theater} />
            </div>
        </>
        )
    })

    return (
        <div className='container'>

                <div className='movie-details'>
                    {movieList}

                </div>

        </div>
    )
}

export default Home