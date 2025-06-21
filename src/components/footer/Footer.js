import './footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <p className="footer__text">
                Материалы, размещенные на&nbsp;данной странице, носят информационный характер и&nbsp;предназначены для ознакомительных целей. Необходимо проконсультироваться с&nbsp;врачом. Информация, представленная на&nbsp;сайте, не&nbsp;может быть использована для постановки диагноза, назначения лечения и&nbsp;не&nbsp;заменяет прием врача. Информация, размещенная на&nbsp;сайте, не&nbsp;является публичной офертой. Актуальную информацию о&nbsp;ценах, акциях и&nbsp;предложениях уточняйте по&nbsp;телефону
            </p>
            <div className="footer__info">
                <h2 className="footer__heading">Контакты</h2>
                <span>Работаем с 7:30 до 19:00</span>
                <span>+7 (910) 225-68-65</span>
                <span>Telegram : @oftalmologybel</span>
                <span>ул. Лермонтова, 47 А, г. Белгород</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer