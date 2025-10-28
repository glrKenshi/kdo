import { Link } from "react-router"
import './certificate.scss'
import certificate from '../../assets/certificate/certificate.png'
import pdfPath from '../../assets/certificate/certificate.pdf'

const Сertificate = () => {
    return (
        <section className="certificate">
            <div className="certificate__breadcrumbs breadcrumbs">
                <Link to='/'>
                <span>главная</span>
                </Link>
                <span>/</span> 
                <span>сертификаты</span>
            </div>
            <div className="certificate__content">
                <div className="certificate__text">
                    <h1 className="certificate__heading section-heading">
                        сертификаты
                    </h1>
                    <p className="certificate__descr">
                        Сертификат соответствия – документ, подтверждающий соответствие продукции требованиям качества и безопасности, установленными для нее действующими стандартами и правилами.
                    </p>
                </div>

                <div className="certificate__docs">
                    <img src={certificate} alt="" className="certificate__img" />
                    <a 
                        className="certificate__btn" 
                        target="_blank" 
                        href={pdfPath}
                    >
                        открыть документ
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Сertificate