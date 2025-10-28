import img1 from '../../assets/supervisory/1.png'
import img2 from '../../assets/supervisory/2.png'
import img3 from '../../assets/supervisory/3.png'
import { Link } from 'react-router'

import './supervisory.scss'

const Supervisory = () => {
    return (
        <section className="supervisory">
            <div className="supervisory__breadcrumbs breadcrumbs">
                <Link to='/'>
                <span>главная</span>
                </Link>
                <span>/</span> 
                <span>надзорные органы</span>
            </div>
            <h1 className="supervisory__heading section-heading">
                Надзорные органы
            </h1>
            <ul className="supervisory__list">
                <div className="supervisory__item">
                    <a href="https://ffoms.gov.ru/">
                        <img src={img1} alt="" className="supervisory__img" />
                    </a>
                    <h3 className="supervisory__label">
                        Фонд обязательного медицинского страхования
                    </h3>
                </div>

                <div className="supervisory__item">
                    <a href="http://31.rospotrebnadzor.ru/">
                        <img src={img2} alt="" className="supervisory__img" />
                    </a>
                    <h3 className="supervisory__label">
                        Управление Федеральной службы по надзору в сфере защиты прав потребителей 
                    </h3>
                </div>

                <div className="supervisory__item">
                    <a href="https://minzdrav.gov.ru/">
                        <img src={img3} alt="" className="supervisory__img" />
                    </a>
                    <h3 className="supervisory__label">
                        Министерство здравоохранения РФ
                    </h3>
                </div>
            </ul>
        </section>
    )
}

export default Supervisory