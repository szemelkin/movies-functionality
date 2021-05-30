import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom'
import reactLogo from '../../images/logo.svg';
import profileLink from '../../images/profile.svg';
import './header/header.css'

const Header = () => {

    const location = useLocation();

    const signin = 
        <div>
            <header className="header">
                <img className="header__logo" src={reactLogo} alt="Логотип место"/>
                <div className="header__menu">
                    <Link to="signup" className="header__link" href="">Регистрация</Link>
                    <Link to="signin" className="header__button" href="">Войти</Link>
                </div>
            </header>
        </div>
        
    const logined = 
        <div>
            <header className="header">
                <img className="header__logo" src={reactLogo} alt="Логотип место"/>
                <div className="header__menu">
                    <Link to="movies" className="header__link" href="">Фильмы</Link>
                    <Link to="saved-movies" className="header__link" href="">Сохраненные фильмы</Link>
                    <Link to="profile" className="header__link" href=""><img className="header__profileLink" src={profileLink} alt="Логотип место"/></Link>
                </div>
            </header>
        </div>

    const currentUrl = location.pathname

    const menuNavigation = (currentUrl) => {
        if (currentUrl == "/") {return signin}
        else if (currentUrl == '/movies') {return logined}
        else if (currentUrl == '/saved-movies') {return logined}
        else if (currentUrl == '/profile') {return logined}
    }

    return (
        <div>
            {
                menuNavigation(currentUrl)                
            }
        </div>
    )

};

export default Header;