import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useState } from 'react'
import { Link } from 'react-router'

import './main.scss'
import heroImg from '../../assets/main/heroImg.png'

import grid1 from '../../assets/main/eye.svg'
import grid2 from '../../assets/main/heart-rate.svg'
import grid4 from '../../assets/main/healtcare.svg'
import grid5 from '../../assets/main/stethoscope.svg'
import grid6 from '../../assets/main/doctor.svg'

import jernovaya from '../../assets/main/Jernova.png'
import skorikova from '../../assets/main/Skorikova.png'
import pereligina from '../../assets/main/Pereligina.png'
import arrow from '../../assets/main/arrow.svg'

const Main = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [isAnimating, setIsAnimating] = useState(null)

    const toggleAccordion = (id) => {

        if (isAnimating) return;
      
        if (activeTab === id) {
            setIsAnimating(true);
            setActiveTab(null);
            setTimeout(() => setIsAnimating(false), 500); 
        } else {
            setIsAnimating(true);
            setActiveTab(null);
            setTimeout(() => {
                setActiveTab(id);
                setIsAnimating(false);
            }, 500);
        }
    }

    const tabs = [
        {
            id: 0, 
            name: 'Жерновая Лариса Михайловна',
            role: 'Детский офтальмолог', 
            text: 'Детский офтальмолог с большим практическим опытом. Специализируется на диагностике и лечении заболеваний глаз у детей, применяя современные методики. Особое внимание уделяет аппаратным методам лечения, позволяющим добиваться отличных результатов без хирургического вмешательства. Доктор отличается внимательным подходом к каждому маленькому пациенту, сочетая высокий профессионализм с доброжелательностью.',
            url: jernovaya,
            link: "https://prodoctorov.ru/belgorod/vrach/43545-zhernovaya/"
        },
        {
            id: 1, 
            name: 'Скорикова Тамара Николаевна',
            role: 'Детский офтальмолог', 
            text: 'Стаж 32 года. Все отзывы о враче. Проводит диагностику и лечение астигматизма, близорукости, дальнозоркости, конъюнктивит (вирусный, бактериальный, аллергический), косоглазия, ячменя. Занимается проверкой зрения, а также подбором очков и контактных линз.',
            url: skorikova,
            link: "https://prodoctorov.ru/belgorod/vrach/813248-skorikova/"
        },
        {
            id: 2, 
            name: 'Перелыгина Анастасия Станиславовна',
            role: 'Оптометрист', 
            text: 'Занимается терапией, профилактикой и диагностикой патологии глаз. Ей известно, что следует предпринять при помутнении, сужении зрительного поля, косоглазии, сильном слезотечении и остальных недугах. Окулист учитывает стадию заболевания, и когда есть хотя бы маленький шанс избежать операции, назначает консервативное лечение: капли, специальные упражнения или физиотерапию. Тем же пациентам, у которых обнаруживается гиперметропия или миопия, врач подбирает подходящие очки или контактные линзы.',
            url: pereligina,
            link: ""
        }
    ]

    const clinicAddress = "г. Белгород, ул. Победы, д. 69а"
    const clinicCoordinates = [50.591766, 36.594921]

    return (
        <main className='main'>
            <section className="hero">
                <h1 className="hero__heading">
                    КЛИНИКА ДЕТСКОЙ ОФТАЛЬМОЛОГИИ
                </h1>
                <div className="hero__box">
                    <div className="hero__info">
                        <p className="hero__descr">
                            Помогаем вашему ребенку видеть мир ярким и четким. Современная диагностика, бережное лечение и индивидуальный подход в нашей детской офтальмологической клинике. Доверьте зрение малыша профессионалам!
                        </p>
                        <div className="hero__btns">
                            <Link to='/doctors'>
                                <button className="hero__sign btn">
                                    записаться на прием
                                </button>
                            </Link>
                            <Link to='/price'>
                                <button className="hero__details btn">
                                    подробнее об услугах
                                </button>
                            </Link>
                        </div>
                    </div>
                    <img src={heroImg} alt="" className="hero__img" />
                </div>
            </section>
            <section className="why">
                <h2 className="why__heading section-heading">Почему выбирают нас?</h2>
                <div className="why__grid">
                    <div className="why__item why__item--1">
                        <div className="why__head">
                            <img src={grid1} alt="icon" className="why__icon" />
                            <div className="why__item-heading">ПРОФИЛАКТИКА И ДИАГНОСТИКА</div>
                        </div>
                        <div className="why__item-descr">Мы уделяем особое внимание профилактике и ранней диагностике, чтобы предотвратить возможные проблемы со зрением</div>
                    </div>
        
                    <div className="why__item why__item--2">
                        <div className="why__head">
                            <img src={grid2} alt="icon" className="why__icon" />
                            <div className="why__item-heading">СОВРЕМЕННЫЕ ТЕХНОЛОГИИ</div>
                        </div>
                        <div className="why__item-descr">Применяем передовые методы детской офтальмологии: аппаратную терапию и ортокератологию, сочетая современные технологии с безопасностью и индивидуальным подходом</div>
                    </div>
                    <div className="why__item why__item--3" />
                    <div className="why__item why__item--4">
                        <div className="why__head">
                            <img src={grid4} alt="icon" className="why__icon" />
                            <div className="why__item-heading">ИНДИВИДУАЛЬНЫЙ ПОДХОД</div>
                        </div>
                        <div className="why__item-descr">Мы видим в каждом ребенке личность и разрабатываем индивидуальный план лечения, учитывающий его потребности и особенности</div>
                    </div>
                    <div className="why__item why__item--5">
                        <div className="why__head">
                            <img src={grid5} alt="icon" className="why__icon" />
                            <div className="why__item-heading">ОПЫТНЫЕ СПЕЦИАЛИСТЫ</div>
                        </div>
                        <div className="why__item-descr">Наши врачи регулярно проходят повышение квалификации и следят за последними достижениями в области офтальмологии</div>
                    </div>
                    <div className="why__item why__item--6">
                        <div className="why__head">
                            <img src={grid6} alt="icon" className="why__icon" />
                            <div className="why__item-heading">УЗКАЯ СПЕЦИАЛИЗАЦИЯ</div>
                        </div>
                        <div className="why__item-descr">Специализируемся на детской офтальмологии: глубоко понимаем зрение детей и находим лучшие решения.</div>
                    </div>
                </div>
            </section>
            <section className='doctors'>
                <h2 className="doctors__heading section-heading">
                    Наши специалисты
                </h2>
                {activeTab === null ? null : (
                    <div className="doctors__content">
                        <ul className="doctors__tabs">
                            {tabs.map((tab) => (
                                <li
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`doctors__tab ${activeTab === tab.id ? 'doctors__active-tab' : ''}`}>
                                    <p className="doctors__tab-name">{tab.name}</p>
                                    <p className="doctors__tab-role">{tab.role}</p>
                                </li>
                            ))}
                        </ul>
                        <div key={activeTab} className="doctors__card">
                            <img src={tabs[activeTab].url} alt="doctor" className='doctors__img'/>
                        </div>
                        <div key={`${activeTab}-box`} className="doctors__box">
                            <div className="doctors__info">
                                <p className="doctors__name">{tabs[activeTab].name}</p>
                                <p className="doctors__role">{tabs[activeTab].role}</p>
                                <p className="doctors__descr">{tabs[activeTab].text}</p>
                            </div>
                            <a className="doctors__btn btn" href={tabs[activeTab].link}>записаться на прием</a>
                        </div>
                        <div className="doctors__link">
                            <Link to='/doctors'>
                                <span className="doctors__link-text">СМОТРЕТЬ ВСЕХ ВРАЧЕЙ</span>
                                <img className='doctors__link-icon' src={arrow} alt="arrow-icon" />
                            </Link>
                        </div>
                    </div>
                )}
                <div className="doctors__accord">
                    {tabs.map((item) => (
                        <div className="doctors__accord-item" key={item.id}>
                            <div className="doctors__accord-header"
                                onClick={() => toggleAccordion(item.id)}>
                                <p className="doctors__accord-name">{item.name}</p>
                                <p className="doctors__accord-role">{item.role}</p>
                            </div>
                            <div className={`doctors__accord-content ${item.id === activeTab ? 'open' : ''}`}>
                                <div className="doctors__accord-body">
                                    <div className="doctors__accord-card">
                                        <img src={item.url} alt="doctor" className="doctors__accord-img" />
                                    </div>
                                    <div className="doctors__accord-info">
                                        <p className="doctors__accord-name">{item.name}</p>
                                        <p className="doctors__accord-role">{item.role}</p>
                                        <a className="doctors__accord-btn btn" href={item.link}>записаться на приём</a>
                                    </div>
                                    <div className="doctors__accord-descr">{item.text}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="doctors__accord-link">
                    <Link to='/doctors'>
                        <span className="doctors__link-text">СМОТРЕТЬ ВСЕХ ВРАЧЕЙ</span>
                        <img className='doctors__link-icon' src={arrow} alt="arrow-icon" />
                    </Link>
                </div>
            </section>
            <section className="service">
                <h2 className="service__heading section-heading">наши услуги</h2>
                    <ul className="service__list">
                        <li className="service__item service__item-diagnostic">
                            <h3 className="service__item-heading">Комплексная диагностика</h3>
                            <Link to='/diagnostic'>
                                <button className="service__btn">Подробнее</button>
                            </Link>
                        </li>
                        <li className="service__item service__item-apparat">
                            <h3 className="service__item-heading">Аппаратное лечение</h3>
                             <Link to='/apparat'>
                                <button className="service__btn">Подробнее</button>
                            </Link>
                        </li>
                        <li className="service__item service__item-ortho">
                            <h3 className="service__item-heading">Ортокератология</h3>
                             <Link to='/ortho'>
                                <button className="service__btn">Подробнее</button>
                            </Link>
                        </li>
                        <li className="service__item service__item-teraphy">
                            <h3 className="service__item-heading">Физиотерапия</h3>
                             <Link to='/therapy'>
                                <button className="service__btn">Подробнее</button>
                            </Link>
                        </li>
                    </ul>
            </section>
            <section className="contacts">
                <div className="contacts__wrapper">
                    <h2 className="contacts__heading section-heading">
                        контакты
                    </h2>
                    <ul className="contacts__info">
                        <li className="contacts__item">
                            Работаем с 7:30 до 19:00
                        </li>
                        <li className="contacts__item">
                            +7 (910) 225-68-65
                        </li>
                        <li className="contacts__item">
                            Telegram : <a href="https://t.me/oftalmologybel">@oftalmologybel</a>
                        </li>
                        <li className="contacts__item">
                            ул. Лермонтова, 47А, г. Белгород
                        </li>
                    </ul>
                </div>
                <YMaps>
                    <Map
                        className="contacts__map"
                        defaultState={{
                        center: clinicCoordinates,
                        zoom: 16,
                        controls: ['zoomControl'],
                        }}
                        modules={['control.ZoomControl']}
                    >
                        <Placemark 
                        geometry={clinicCoordinates}
                        properties={{
                            balloonContent: clinicAddress,
                        }}
                        options={{
                            preset: 'islands#redMedicalIcon',
                        }}
                        />
                    </Map>
                </YMaps>
            </section>
        </main>
    )
}

export default Main