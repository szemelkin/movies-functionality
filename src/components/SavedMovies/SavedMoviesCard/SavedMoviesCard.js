import React from 'react';
import { useEffect, useState } from 'react';

import './movies-card/movies-card.css'
import moviesPicture from '../../../images/pic_1.svg'
import moviesIcon from '../../../images/delete_from_saved.svg'
import savedMovies from '../../../images/saved.svg'
import notSavedMovies from '../../../images/notsaved.svg'

import mainApi from '../../../utils/MainApi'

import { CurrentUserContext } from '../../../contexts/CurrentUserContext';

const SavedMoviesCard = (props) => {

    const currentUser = React.useContext(CurrentUserContext);

    var urlMainPic = ''
    if (props.image === null) {
        urlMainPic = ''
    } else {urlMainPic = props.image}

    const handleTrailerLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    const [isSavedMovies, setIsSavedMovies] = useState(false)

    function handleDelSaveMovies() {
        // console.log('handleDelSaveMovies',props)
        // console.log('handleDelSaveMovies handleSavedMoviesRerender',props.handleSavedMoviesRerender)
        mainApi.delSavedMovies(props).then(props.handleRerenderAfterDel())
        // props.handleSavedMoviesRerender
        
        console.log('handleDelSaveMovies Кнопку нажали')
        // setSavedMovies(false)
    }


    const savedMoviesSrc = () => {
        if (isSavedMovies) {return savedMovies} else {return notSavedMovies}
    }; 
    

    return (
        <div>
            <div className="movies-card">
                <div className="movies-card__items">
                    <div className="movies-card__description">
                        <h2 className="movies-card__title">{props.nameRU}</h2>
                        <p className="movies-card__duration">{(Math.floor(props.duration/60)) + ' ч ' + (props.duration - (Math.floor(props.duration/60)*60))+ ' м'}</p>
                    </div>
                    <button onClick = {handleDelSaveMovies}  className="movies-card__button"><img className="movies-card__icon" src={savedMoviesSrc()}  alt="Здесь должна быть картинка"/></button>
                </div>
                <img className="movies-card__image" onClick = {() => handleTrailerLink(props.trailerLink)} src={props.image} alt="Здесь должна быть картинка"/>
            </div>
        </div>
    )
};

export default SavedMoviesCard;