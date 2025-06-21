import { useState, useEffect } from 'react'
import { Link } from 'react-router'

import './header.scss'
import logo from '../../assets/header/logo.svg'
import burger from '../../assets/header/burger.svg'
import close from '../../assets/header/Close.svg'
import telegram from '../../assets/header/telegramIcon.svg'
import vk from '../../assets/header/vkIcon.svg'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(prev => !prev)

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [menuOpen])
    
  return (       
    <header className='header'>
        <div className="logo">
            <Link to='/'>
                <img src={logo} alt="logo" className="logo__img" />
            </Link>
            <p className="logo__title">Клиника детской офтальмологии</p>
        </div>
        <ul className="header__list">
            <li className="header__item header__item__menu btn">
                <span>Услуги</span>
                <ul className="header__dropdown">
                    <li className="header__dropdown-item">
                        <Link to='/diagnostic'>
                            Комплексная диагностика
                        </Link>
                    </li>
                    <li className="header__dropdown-item">
                        <Link to='/apparat'>
                            Аппаратное лечение
                        </Link>
                    </li>
                    <li className="header__dropdown-item">
                        <Link to='/ortho'>
                            Ортокератология
                        </Link>
                    </li>
                    <li className="header__dropdown-item">
                        <Link to='/therapy'>
                            Физиотерапия
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="header__item btn">
                <Link to='/price'>
                    Цены
                </Link>
            </li>
            <li className="header__item btn">
                <Link to='/doctors'>
                    СПЕЦИАЛИСТЫ
                </Link>
            </li>
        </ul>
        <img src={menuOpen ? close : burger} 
        alt="menu" 
        className="header__burger" 
        onClick={toggleMenu}/>
        <div className="header__socials">
            <a href="https://t.me/oftalmologybel" className="header__social-link">
                <img src={telegram} alt="telegram" className="header__social-icon" />
            </a>
            <a href="https://t.me/oftalmologybel" className="header__social-link">
                <img src={vk} alt="vkontakte" className="header__social-icon" />
            </a>        
        </div>
        <div className="header__info">
            <p>+7 (910) 225-68-65</p>
            <p>Работаем с 7.30 до 19.00</p>
        </div>

        {menuOpen && (
            <div className="mobile-menu">
                <div className="mobile-menu__body">

                    <ul className="mobile-menu__list">
                        <li className="mobile-menu__item">Услуги</li>
                        <ul className="mobile-menu__sublist">
                            <li>
                                <Link to='/diagnostic' 
                                onClick={() => setMenuOpen(false)}>
                                    Комплексная диагностика
                                </Link>
                            </li>
                            <li>
                                <Link to='/apparat'
                                onClick={() => setMenuOpen(false)}>
                                    Аппаратное лечение
                                </Link>
                            </li>
                            <li>
                                <Link to='/ortho'
                                onClick={() => setMenuOpen(false)}>
                                    Ортокератология
                                </Link>
                            </li>
                            <li>
                                <Link to='/therapy'
                                onClick={() => setMenuOpen(false)}>
                                    Физиотерапия
                                </Link>
                            </li>
                        </ul>
                        <li className="mobile-menu__item"
                        onClick={() => setMenuOpen(false)}>
                            <Link to='/price'>
                                Цены
                            </Link>
                        </li>
                        <li className="mobile-menu__item"
                        onClick={() => setMenuOpen(false)}>
                            <Link to='/doctors'>
                                Специалисты
                            </Link>
                        </li>
                    </ul>

                    <div className="mobile-menu__info">
                        <p>+7 (910) 225-68-65</p>
                        <p>Работаем с 7.30 до 19.00</p>
                    </div>
                </div>
                <div 
                    className="mobile-menu__backdrop"
                    onClick={() => setMenuOpen(false)}
                ></div>
            </div>
        )}
    </header>
  )
}

export default Header