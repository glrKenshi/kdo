import './requisite.scss'
import { Link } from 'react-router'

const Requisite = () => {
  return (
    <section className="requisite">
        <div className="requisite__breadcrumbs breadcrumbs">
            <Link to='/'>
            <span>главная</span>
            </Link>
            <span>/</span>
            <span>реквизиты</span>
        </div>
        <h1 className="requisite__heading section-heading">Реквизиты</h1>
        <p className="requisite__descr">Ниже приведены реквизиты компании, в случае необходимости получения дополнительных документов: свидетельства о государственной регистрации, идентификационного номера налогоплательщика вы можете обратиться в бухгалтерию предприятия. </p>
        <div class="company-details">
            <div class="detail-item">
                <div class="detail-label">Полное наименование:</div>
                <div class="detail-value">Общество с ограниченной ответственностью «Клиника детской офтальмологии»</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Сокращенное наименование:</div>
                <div class="detail-value">ООО «КДО»</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">ИНН/КПП:</div>
                <div class="detail-value">3100038170/310001001</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">ОГРН:</div>
                <div class="detail-value">1243100010625</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Юридический адрес:</div>
                <div class="detail-value">308027, Белгородская область, город Белгород, улица Лермонтова, дом 47а, помещение 1007, комната 6</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Фактический адрес:</div>
                <div class="detail-value">308027, Белгородская область, город Белгород, улица Лермонтова, дом 47а, помещение 1007, комната 6</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Телефон, факс:</div>
                <div class="detail-value">
                    <div class="contact-info">(4722) 24-88-24</div>
                    <div class="contact-info">+7 (910) 225-68-65</div>
                </div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Электронная почта:</div>
                <div class="detail-value">mcb31ok@mail.ru</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Сайт:</div>
                <div class="detail-value">kdo-31.ru</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Банковские реквизиты:</div>
                <div class="detail-value">
                    <div class="bank-details">БИК 044525411</div>
                    <div class="bank-details">Р/с №40702810709740002461,</div>
                    <div class="bank-details">Филиал «ЦЕНТРАЛЬНЫЙ» Банка ВТБ ПАО</div>
                    <div class="bank-details">г. Москва</div>
                    <div class="bank-details">Кор/счет 30101810145250000411</div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Requisite
