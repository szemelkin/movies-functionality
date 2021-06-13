import React from 'react';
import { useEffect, useState } from 'react';

import './movies.css'
import SearchForm from '../Movies/SearchForm/SearchForm'
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'
import FilterCheckBox from '../Movies/FilterCheckBox/FilterCheckBox'
import Continue from '../Movies/Continue/Continue'

import moviesApi from '../../utils/MoviesApi'
import mainApi from '../../utils/MainApi'

// import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const Movies = (props) => {

    const [renderedMovies, setRenderedMovies] = useState([])
    const [continueState, setContinueState] = useState(true)

    const [searchFrase, setSearchFrase] = useState('')

    //Достаем данные и сохраняем в локалсторидж
    const handleMoviesRequest = () => {
        moviesApi.getMovies()
            .then(res => {
                localStorage.setItem('movies', JSON.stringify(res))
            })
            .catch((err) => {console.log(err)});        
    }


    useEffect(() => {
        handleMoviesRequest()
    }, []) 


const handleClickContinue = () => {
    setContinueState(!continueState)
}

const handleSearch = (el) => {
    // console.log('handleSearch', el)
    setRenderedMovies(el)
    // console.log('handleSearch renderedMovies', renderedMovies)
}

const handleSearchFrase = (frase) => {
    // console.log('handleSearch', el)
    setSearchFrase(frase)
    // console.log('handleSearch renderedMovies', renderedMovies)
}


const handleSearchButton = (e) => {
    
    e.preventDefault();
    if (!searchFrase) {
        return;
    }
    handleSearchByFrase(searchFrase)
    }

const handleSearchByFrase = (searchFrase) => {
    if (!searchFrase) {
        return;
    }
    let arrayMovies = JSON.parse(localStorage.getItem('movies'))
    let arrayForRender = []
    arrayMovies.forEach(element => {
        if (element.nameRU.includes(searchFrase.search)) {
            arrayForRender.push(element)
        } else { }
        setRenderedMovies(arrayForRender)
    });

    }

const handleSearchByFraseAndDuration = (searchFrase) => {

    if (!searchFrase) {
        return;
    }

    let arrayMovies = JSON.parse(localStorage.getItem('movies'))
    let arrayForRender = []

    arrayMovies.forEach(element => {
        if (element.nameRU.includes(searchFrase.search) && (element.duration < 40)) {
            arrayForRender.push(element)
        } else { }
        setRenderedMovies(arrayForRender)
    })
}


const handleShortMovies = (checkBox) => {
    if (!checkBox) {
        handleSearchByFraseAndDuration(searchFrase)
    } else {
        handleSearchByFrase(searchFrase)
    }
}

    return (
        <div className="movies">
            <SearchForm 
                handleMoviesRequest = {handleMoviesRequest}
                handleSearch = {handleSearch}
                handleSearchFrase = {handleSearchFrase}
                handleSearchButton = {handleSearchButton}
            />
            <FilterCheckBox 
                handleShortMovies = {handleShortMovies}
            />
            <MoviesCardList 
                renderedMovies = {renderedMovies}
                isSavedMovies = {false}
            />
            <Continue 
                handleClickContinue = {handleClickContinue}
            />
        </div>
    )

};

export default Movies;