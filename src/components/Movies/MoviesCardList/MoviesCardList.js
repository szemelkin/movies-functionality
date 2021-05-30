import React from 'react';
import './movies-card-list/movies-card-list.css'
import MoviesCard from '../MoviesCard/MoviesCard'

//  <p className="about-project__timeline_description">Front-end</p>
// <p className="about-project__timeline_description">Back-end</p>

const MoviesCardList = () => {
    return (
        <section className="movies-card-list">
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
        </section>
    )

};

export default MoviesCardList;