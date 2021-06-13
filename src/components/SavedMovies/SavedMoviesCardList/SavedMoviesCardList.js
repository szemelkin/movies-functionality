import React from 'react';
import './movies-card-list/movies-card-list.css'
import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard'
import moviesIcon from '../../../images/saved.svg'
import moviesIconBlack from '../../../images/black_flag.svg'

const SavedMoviesCardList = (props) => {

    return (
        <section className="movies-card-list">
            {                
                props.renderedSavedMovies.map(item => {
                    return (<SavedMoviesCard 
                                key = {item._id}    
                                {...item}
                                iconPic = {moviesIcon}
                                // handleSavedMoviesRerender = {props.handleSavedMoviesRerender}
                                isSmthDeleted = {props.isSmthDeleted}
                                handleRerenderAfterDel = {props.handleRerenderAfterDel}
                            />)
                    })      
            }                      
        </section>
    )

};

export default SavedMoviesCardList;