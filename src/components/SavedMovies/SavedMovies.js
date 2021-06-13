import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom'

import '../Movies/movies.css'
import SearchFormSavedMovies from '../SavedMovies/SearchFormSavedMovies/SearchFormSavedMovies'
import SavedMoviesCardList from '../SavedMovies/SavedMoviesCardList/SavedMoviesCardList'
import FilterCheckBoxSavedMovies from '../SavedMovies/FilterCheckBoxSavedMovies/FilterCheckBoxSavedMovies'

import mainApi from '../../utils/MainApi'

const SavedMovies = (props) => {

    const [renderedSavedMovies, setRenderedSavedMovies] = useState([])
    const [searchFraseSavedMovies, setSearchFraseSavedMovies] = useState('')

    //Запрос к базе фильмов и сохранение в массив
    function handleSavedMoviesRequest() {

        mainApi.getSavedMovies()
            .then(res => {
                setRenderedSavedMovies(res)
                console.log(res)
            })
            .catch((err) => {console.log(err)});        
    }



    //Рендер при заходе на страницу
    useEffect(() => {
        handleSavedMoviesRequest()
    }, []) 


    //РеРендер после удаления карточки
    function handleRerenderAfterDel() {
        handleSavedMoviesRequest()
    }



    //Подгрузка слова из компонента Search

    const handleSearchFrase = (frase) => {
        setSearchFraseSavedMovies(frase)
    }
    
    
    //Обработка поиска по фразе
    const handleSearchByFrase = (searchFraseSavedMovies) => {
        if (!searchFraseSavedMovies) {
            return;
        }
        let arraySavedMovies = JSON.parse(localStorage.getItem('savedMovies'))
        let arraySavedMoviesForRender = []
        arraySavedMovies.forEach(element => {
            if (element.nameRU.includes(searchFraseSavedMovies.search)) {
                arraySavedMoviesForRender.push(element)
            } else { }
            setRenderedSavedMovies(arraySavedMoviesForRender)

        });
    
        }
    
    //Обработка поиска по фразе и продолжительности
    const handleSearchByFraseAndDuration = (searchFraseSavedMovies) => {
    
        if (!searchFraseSavedMovies) {
            return;
        }
    
        let arraySavedMovies = JSON.parse(localStorage.getItem('savedMovies'))
        let arraySavedMoviesForRender = []
    
        arraySavedMovies.forEach(element => {
            if (element.nameRU.includes(searchFraseSavedMovies.search) && (element.duration < 40)) {
                arraySavedMoviesForRender.push(element)
            } else { }
            setRenderedSavedMovies(arraySavedMoviesForRender)
        })
    }    

    //Обработка нажатия на кнопку поиск
    const handleSearchButton = (e) => {
        
        e.preventDefault();
        if (!searchFraseSavedMovies) {
            return;
        }
        handleSearchByFrase(searchFraseSavedMovies)
        }


    //Обработка нажатия на тумблер
    const handleShortSavedMovies = (checkBox) => {
        if (!checkBox) {
            handleSearchByFraseAndDuration(searchFraseSavedMovies)
        } else {
            handleSearchByFrase(searchFraseSavedMovies)
        }
    }


    return (
        <div className="movies">
            <SearchFormSavedMovies 
                handleSavedMoviesRequest = {handleSavedMoviesRequest}
                handleSearchFrase = {handleSearchFrase}
                handleSearchButton = {handleSearchButton}
            />
            <FilterCheckBoxSavedMovies 
                handleShortSavedMovies = {handleShortSavedMovies}
            />
            <SavedMoviesCardList 
                renderedSavedMovies = {renderedSavedMovies}
                handleRerenderAfterDel = {handleRerenderAfterDel}
            />
        </div>
    )

};

export default SavedMovies;