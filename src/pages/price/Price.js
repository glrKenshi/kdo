import * as Accordion from "@radix-ui/react-accordion";
import { Link } from "react-router";
import "./price.scss";

const Price = () => {
    const items = [
        {
            title: "Детская офтальмология",
            content: [
                { info: "Амблиокор 01 (лечение) 10 минут", price: "450р" },
                { info: "Аппаратное лечение по комплексу «Зайчик»", price: "6000р" },
                { info: "Аппаратное лечение по комплексу «Листик»", price: "5500р" },
                { info: "Аппаратное лечение по комплексу «Пташка»", price: "8500р" },
                { info: "Аппаратное лечение по комплексу «Солнышко»", price: "7000р" },
                { info: "Аппаратное лечение по комплексу «Цветик»", price: "5500р" },
                { info: "Первичный прием врача-офтальмолога (Жерновая Л.М.)", price: "3000р" },
                { info: "Повторный прием по завершению лечения у врача-офтальмолога (Жерновая Л.М.)", price: "1000р" },
                { info: "Лечение (все комплексы)", price: "500р" },
                { info: "Комплексная диагностика детского врача-офтальмолога (Жерновая Л.М.)", price: "2500р" },
                { info: "Комплексная диагностика детского врача-офтальмолога (Скорикова Т.Н.)", price: "1800р" },
                { info: "Осмотр по завершению аппаратного лечения", price: "500р" },
            ],
        },
        {
            title: "Ортокератология ОКЛ",
            content: [
                { info: "Абонемент (посещение 500р)", price: "1500р" },
                { info: "Внеплановая ультразвуковая или лабораторная очистка линз", price: "300р" },
                { info: "Выдача ОКЛ", price: "0р" },
                { info: "Первичный подбор ортокератологических линз (съемник+обучение)", price: "3000р" },
                { info: "Повторный подбор ортокератологических линз", price: "0р" },
                { info: "Разовое плановое наблюдение", price: "0р" },
                { info: "Разовое плановое наблюдение (всего 5 визитов в год)", price: "500р" },
            ],
        },
        {
            title: "Жесткие контактные линзы",
            content: [
                { info: "Ортокератологическое лечение линзами MoonLens (1 линза)", price: "10 000р" },
                { info: "Ортокератологическое лечение линзами MoonLens (2 линзы)", price: "20 000р" },
                { info: "Ортокератологическое лечение линзами MoonLens ES (1шт)", price: "11 000р" },
                { info: "Ортокератологическое лечение линзами MoonLens ES (2шт)", price: "22 000р" },
                { info: "Ортокератологическое лечение линзами Доктор Линз (1 глаз)", price: "8 500р" },
                { info: "Ортокератологическое лечение линзами Доктор Линз (2 глаза)", price: "17 000р" },
                { info: "Ортокератологическое лечение линзами Доктор Линз (1 глаз) торичная", price: "9 000р" },
                { info: "Ортокератологическое лечение линзами MoonLens (2 глаза) торичная", price: "18 000р" },
            ],
        },
    ]

    return (
        <main className="price">
            <div className="price__breadcrumbs breadcrumbs">
                <Link to='/'>
                    главная
                </Link>
                <span>/</span>
                <span>ЦЕНЫ</span>
            </div>
            <div className="price__heading section-heading">цЕНЫ НА НАШИ УСЛУГИ</div>
            <div className="price__container">
                <Accordion.Root type="single" collapsible className="price__accordion">
                    {items.map((item, index) => (
                        <Accordion.Item key={index} value={`item-${index}`} className="price__item">
                            <Accordion.Header className="price__header">
                                <Accordion.Trigger className="price__trigger">
                                    <h1 className="price__title">{item.title}</h1>
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className="price__content">
                                <div className="price__content-inner">
                                    {item.content.map((el, i) => (
                                        <div className="price__row" key={i}>
                                            <div className="price__info">{el.info}</div>
                                            <div className="price__value">{el.price}</div>
                                        </div>
                                    ))}
                                </div>
                            </Accordion.Content>
                        </Accordion.Item>
                    ))}
                </Accordion.Root>
            </div>
        </main>
    );
};

export default Price;