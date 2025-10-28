import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'

import './header.scss'
import logo from '../../assets/header/logo.svg'
import burger from '../../assets/header/burger.svg'
import close from '../../assets/header/Close.svg'
import telegram from '../../assets/header/telegramIcon.svg'
import vk from '../../assets/header/vkIcon.svg'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [alert, setAlert] = useState(null)

    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm()

    const toggleMenu = () => setMenuOpen(prev => !prev)
    const toggleModal = () => setModalOpen(prev => !prev)

    useEffect(() => {
        document.body.style.overflow = menuOpen || modalOpen ? 'hidden' : 'auto'
        return () => { document.body.style.overflow = 'auto' }
    }, [menuOpen, modalOpen])

    const onSubmit = async (data) => {
        const submission = {
            ...data,
            subject: "Обратная связь от клиента КДО" 
        }

        try {
            const response = await fetch("https://formspree.io/f/movkggvr", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submission),
            })

            if (response.ok) {
                setAlert({ type: 'success', msg: 'Заявка успешно отправлена!' })
                reset()
                setModalOpen(false)
            } else {
                setAlert({ type: 'error', msg: 'Ошибка при отправке. Попробуйте позже.' })
            }
        } catch {
            setAlert({ type: 'error', msg: 'Ошибка соединения. Попробуйте позже.' })
        } finally {
            setTimeout(() => setAlert(null), 5000)
        }
    }

    return (
        <>
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
                            <li className="header__dropdown-item"><Link to='/diagnostic'>Комплексная диагностика</Link></li>
                            <li className="header__dropdown-item"><Link to='/apparat'>Аппаратное лечение</Link></li>
                            <li className="header__dropdown-item"><Link to='/ortho'>Ортокератология</Link></li>
                            <li className="header__dropdown-item"><Link to='/therapy'>Физиотерапия</Link></li>
                        </ul>
                    </li>

                    <li className="header__item btn"><Link to='/price'>Цены</Link></li>
                    <li className="header__item btn"><Link to='/doctors'>СПЕЦИАЛИСТЫ</Link></li>

                    <li className="header__item header__item__menu btn">
                        <span>О клинике</span>
                        <ul className="header__dropdown header__dropdown--right">
                            <li className="header__dropdown-item"><Link to='/certificate'>Сертификаты</Link></li>
                            <li className="header__dropdown-item"><Link to='/requisite'>Реквизиты</Link></li>
                            <li className="header__dropdown-item"><Link to='/supervisory'>Надзорные органы</Link></li>
                        </ul>
                    </li>

                    <li className="header__item btn header__appointment" onClick={toggleModal}>Запись</li>
                </ul>

                <img 
                    src={menuOpen ? close : burger} 
                    alt="menu" 
                    className="header__burger" 
                    onClick={toggleMenu}
                />

                <div className="header__socials">
                    <a href="https://t.me/oftalmologybel" className="header__social-link">
                        <img src={telegram} alt="telegram" className="header__social-icon" />
                    </a>
                    <a href="https://vk.com/oftalmologybel" className="header__social-link">
                        <img src={vk} alt="vkontakte" className="header__social-icon" />
                    </a>
                </div>

                {menuOpen && (
                    <div className="mobile-menu">
                        <div className="mobile-menu__body">
                            <ul className="mobile-menu__list">
                                <li className="mobile-menu__item">Услуги</li>
                                <ul className="mobile-menu__sublist">
                                    <li><Link to='/diagnostic' onClick={() => setMenuOpen(false)}>Комплексная диагностика</Link></li>
                                    <li><Link to='/apparat' onClick={() => setMenuOpen(false)}>Аппаратное лечение</Link></li>
                                    <li><Link to='/ortho' onClick={() => setMenuOpen(false)}>Ортокератология</Link></li>
                                    <li><Link to='/therapy' onClick={() => setMenuOpen(false)}>Физиотерапия</Link></li>
                                </ul>
                                <li><Link to='/price' onClick={() => setMenuOpen(false)}>Цены</Link></li>
                                <li><Link to='/doctors' onClick={() => setMenuOpen(false)}>Специалисты</Link></li>
                                <li className="mobile-menu__item">О клинике</li>
                                <ul className="mobile-menu__sublist">
                                    <li><Link to='/certificate' onClick={() => setMenuOpen(false)}>Сертификаты</Link></li>
                                    <li><Link to='/requisite' onClick={() => setMenuOpen(false)}>Реквизиты</Link></li>
                                    <li><Link to='/supervisory' onClick={() => setMenuOpen(false)}>Надзорные органы</Link></li>
                                </ul>
                                <li className="mobile-menu__item mobile-menu__appointment" onClick={() => { setMenuOpen(false); toggleModal(); }}>
                                    Запись
                                </li>
                            </ul>
                        </div>
                        <div className="mobile-menu__backdrop" onClick={() => setMenuOpen(false)}></div>
                    </div>
                )}

                {modalOpen && (
                    <div className="modal-overlay">
                        <div className="modal">
                            <div className="modal__header">
                                <h2 className="modal__title">ЗАПИСАТЬСЯ НА ПРИЕМ</h2>
                                <button className="modal__close" onClick={toggleModal}>×</button>
                            </div>
                            
                            <div className="modal__content">
                                <p className="modal__description">
                                    Позвоните или оставьте заявку — администратор свяжется с вами.
                                </p>

                                <div className="modal__phone">
                                    <h3>НАБЕРИТЕ НОМЕР:</h3>
                                    <a href="tel:+79102256865" className="modal__phone-link">+7 (910) 225-68-65</a>
                                </div>

                                <form className="modal__form" onSubmit={handleSubmit(onSubmit)}>
                                    <h3>ИЛИ ЗАПОЛНИТЕ ФОРМУ</h3>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder="Ваше имя *"
                                            className="form-input"
                                            {...register("name", { required: "Введите имя" })}
                                        />
                                        {errors.name && <p className="error-text">{errors.name.message}</p>}
                                    </div>

                                    <div className="form-group">
                                        <InputMask
                                            mask="+7 (999) 999-99-99"
                                            placeholder="Ваш телефон *"
                                            className="form-input"
                                            {...register("phone", {
                                                required: "Введите телефон",
                                                minLength: { value: 10, message: "Некорректный номер" }
                                            })}
                                        />
                                        {errors.phone && <p className="error-text">{errors.phone.message}</p>}
                                    </div>

                                    <div className="form-group">
                                        <textarea
                                            placeholder="Комментарий (необязательно)"
                                            className="form-textarea"
                                            {...register("message")}
                                        ></textarea>
                                    </div>

                                    <p className="modal__privacy">
                                        Нажимая кнопку "Отправить заявку", вы соглашаетесь с обработкой персональных данных.
                                    </p>

                                    <button className="modal__submit-btn" type="submit">
                                        ОТПРАВИТЬ ЗАПИСЬ
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="modal__backdrop" onClick={toggleModal}></div>
                    </div>
                )}
            </header>

            {alert && (
                <div className={`alert ${alert.type}`}>
                    {alert.msg}
                </div>
            )}
        </>
    )
}

export default Header
