import React from 'react';
import { useEffect, useState } from 'react';

import './movies-card-list/movies-card-list.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import moviesIcon from '../../../images/saved.svg'


const MoviesCardList = (props) => {

    return (
        <section className="movies-card-list">
            {
                props.renderedMovies.map(item => {
                    return (<MoviesCard 
                                key = {item.id}    
                                {...item}
                                iconPic = {moviesIcon}

                            />)
                    })      

            }          
            
        </section>
    )

};

export default MoviesCardList;