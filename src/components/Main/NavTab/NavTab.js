import React from 'react';
import './nav-tab/nav-tab.css'

const NavTab = () => {
    return (
        <section className="nav-tab">
            <div className="nav-tab__title">Учебный проект студента факультета Веб-разработки.</div>
            <div className="nav-tab__buttons">
                <button className="nav-tab__button" href="#about">О проекте</button>
                <button className="nav-tab__button" href="">Технологии</button>
                <button className="nav-tab__button" href="">Студент</button>
            </div>
        </section>
    )

};

export default NavTab;