import { useState } from 'react'
import { Link } from 'react-router';
import * as Accordion from '@radix-ui/react-accordion';

import './therapy.scss'
import heroImg from '../../assets/therapy/therapyImg.png'
import arrow from '../../assets/therapy/arrow-right.svg'
import grid1 from '../../assets/therapy/expl1.png'
import grid2 from '../../assets/therapy/expl2.png'
import grid3 from '../../assets/therapy/expl3.png'
import grid4 from '../../assets/therapy/expl4.png'

const Therapy = () => {

  const data = [
    {
      title: "Прессотерапия (лимфодренаж)",
      descr: "Уникальная лечебно-косметологическая процедура, которую еще называют пневмомассажем и лимфодренажом. Она помогает за короткий срок вывести токсины и лишнюю влагу из периферических тканей (включая целлюлитные ткани!), активизирует кровообращение и поток лимфы"
    },
    {
      title: "Ударно-волновая терапия",
      descr: "Акустическая волна, которая доставляет энергию к болезненному месту и скелетным мышечным тканям в подострой, субхронической и хронической стадиях заболевания. Ударные волны характеризуются определенной формой импульса и давлением, которое обычно составляет от 1 до 5 бар. Значения энергии, применяемой на аппаратах BTL, позволяют мягко проводить терапию, при этом оказывая стимулирующий эффект и запуская заживляющие, репаративные и восстановительные процессы в биотканях"
    },
    {
      title: "Магнитотерапия",
      descr: "BTL представляет инновационный метод терапии — высокоинтенсивную магнитотерапию (SIS). Эта технология основана на положительном действии высокоинтенсивного магнитного поля на ткани человеческого организма. Терапевтические эффекты данного вида лечения включают в себя устранение боли, ускорение заживления переломов, снятие мышечного напряжения и повышение подвижности суставов"
    },
    {
      title: "Лазерная терапия",
      descr: "Высокоинтенсивная лазерная терапия (HIL) — это уникальная инновационная технология, позволяющая оказывать безболезненное неинвазивное воздействие на ткани и органы человека. Приборы ХИЛ компании BTL показывают отличные практические результаты и широко применяются в физиотерапии, ортопедии, спортивной медицине, неврологии"
    },
    {
      title: "Столы для лечения заболеваний позвоночника ORMED",
      descr: `"ОРМЕД-кинезо" — установка для пассивного вытяжения позвоночника, устраняющая боли, улучшающая кровообращение и восстанавливающая подвижность. Мягко растягивает позвоночник, раскрывает грудную клетку и насыщает организм кислородом, что полезно при реабилитации после COVID-19, проблемах с дыханием, головных и спинных болях. Процедуры улучшают питание мозга, работу внутренних органов и общее самочувствие. Установка не имеет аналогов, обеспечивает выраженный терапевтический эффект без операций и повышает качество жизни.`
    }
  ]

  const [activeTab, setActiveTab] = useState(0)

  return (
    <main className="therapy">
      <div className="therapy__breadcrumbs breadcrumbs">
          <Link to='/'>
            главная
          </Link>
        <span>/</span>
        <span>услуги</span>
        <span>/</span>
        <span>физиотерапия</span>
      </div>
      <h1 className="therapy__heading section-heading">Физиотерапия</h1>
      <section className="therapy__hero">
        <img src={heroImg} alt="Физиотерапия" className="therapy__hero__img"/>
        <div className="therapy__hero__text">
          Эффективные профилактика и лечение различных заболеваний — это комплекс медицинских мероприятий, которые определяются индивидуально. Так как физиотерапия не предполагает хирургическое вмешательство и применение медикаментов, врачу необходимо подбирать каждому из пациентов, даже со схожими проблемами, персональную программу. В нашей клинике широкий спектр терапевтических процедур. У нас есть уникальное оборудование для применения разных методик лечения и профилактики. Врач расскажет о доступных вариантах и предложит самые результативные из них в вашем случае.
        </div>
      </section>

      <section className="therapy__main">
        <h2 className="therapy__main__heading section-heading">Какие процедуры мы предоставляем?</h2>
        <div className="therapy__main__box">
          <ul className="therapy__main__list">
            {data.map((item, index) => (
              <li className={`therapy__main__tab ${activeTab === index ? 'active' : ''}`}
                key={index}
                onClick={() => setActiveTab(index)}
              >
                <p className="therapy__main__title">{item.title}</p>
                <img src={arrow} alt="arrow" className={`therapy__main__arrow ${activeTab === index ? 'active' : ''}`} />
              </li>
            ))}
          </ul>
          <div className="therapy__main__text" key={activeTab}>
            {data[activeTab].descr}
          </div>
        </div>

        <Accordion.Root type="single" collapsible className="therapy__accordion-root">
            {data.map((item, index) => (
              <Accordion.Item value={`item-${index}`} className="therapy__accordion-item" key={index}>
                <Accordion.Header>
                  <Accordion.Trigger className="therapy__accordion-trigger">
                    {item.title}
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="therapy__accordion-content">
                  {item.descr}
                </Accordion.Content>
              </Accordion.Item>
            ))}
        </Accordion.Root>
      </section>



      <section className="therapy__info">
        <h2 className="therapy__info__heading section-heading">Примеры аппаратов</h2>
        <div className="therapy__info__grid">
            <img src={grid1} alt="cabinet" className='therapy__info__grid-1 therapy__info__grid-item'/>
            <img src={grid2} alt="cabinet" className='therapy__info__grid-2 therapy__info__grid-item'/>
            <img src={grid3} alt="cabinet" className='therapy__info__grid-3 therapy__info__grid-item'/>
            <img src={grid4} alt="cabinet" className='therapy__info__grid-4 therapy__info__grid-item'/>
        </div>
      </section>
    </main>
  )
}

export default Therapy