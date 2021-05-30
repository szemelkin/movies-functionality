import React from 'react';
import './search-form/search-form.css'
import searchIcon from '../../../images/search.svg';


//  <p className="about-project__timeline_description">Front-end</p>
// <p className="about-project__timeline_description">Back-end</p>

const SearchForm = () => {
    return (
        <div>
            <div className="search-form">
                <img className="search-form__icon" src={searchIcon}/>
                <div className="search-form__text">Фильм</div>
                <button className="search-form__button">Найти</button>
            </div>
        </div>
    )

};

export default SearchForm;