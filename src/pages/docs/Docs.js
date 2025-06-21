import { Link } from 'react-router'

import './docs.scss'
import Boss from '../../assets/doctors/boss.png'
import Jernova from '../../assets/doctors/Jernova.png'
import Skorikova from '../../assets/doctors/Skorikova.png'
import Pereligina from '../../assets/doctors/Pereligina.png'
import Tochilina from '../../assets/doctors/Tochilina.png'
import Belyaeva from '../../assets/doctors/Belyaeva.png'
import Getman from '../../assets/doctors/Getman.png'


const Docs = () => {
  const data = [
    {
      name: "Мезинов Владислав Олегович",
      role: "Директор",
      appoint: "false",
      url: Boss
    },
    {
      name: "Жерновая Лариса Михайловна",
      role: "детский офтальмолог",
      link: "https://prodoctorov.ru/belgorod/vrach/43545-zhernovaya/",
      url: Jernova
    },
    {
      name: "Скорикова Тамара Николаевна",
      role: "детский офтальмолог",
      link: "https://prodoctorov.ru/belgorod/vrach/813248-skorikova/",
      url: Skorikova
    },
    {
      name: "Перелыгина Анастасия Станиславовна",
      role: "оптометрист",
      url: Pereligina
    },
    {
      name: "Точилина Елизавета Анатольевна",
      role: "Медсестра",
      url: Tochilina
    },
    {
      name: "Беляева Виолетта Евгеньевна",
      role: "Медсестра",
      url: Belyaeva
    },
    {
      name: "Гетьман Валерия Валерьевна",
      role: "Администратор",
      url: Getman
    },
    
  ]

  return (
    <main className="docs">
      <div className="docs__breadcrumbs breadcrumbs">
        <span>
          <Link to='/'>
            главная
          </Link>
        </span>
        <span>/</span>
        <span>специалисты</span>
      </div>
      <h1 className="docs__heading">Наши специалисты</h1>
      <ul className="docs__list">
        {data.map((item, index) => (
          <li className="docs__item" key={index}>
            <div className="docs__item-top">
              <img src={item.url} alt="doctor"  className="docs__img"/>
            </div>
            <div className="docs__item-bot">
              <span className="docs__name">{item.name}</span>
              <span className="docs__role">{item.role}</span>
              {!item.link ? null : (
                <a href={item.link} className="docs__btn">ЗАПИСАТЬСЯ</a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Docs