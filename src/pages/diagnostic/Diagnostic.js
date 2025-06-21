import * as Accordion from '@radix-ui/react-accordion';
import { Link } from 'react-router';
import heroImg from '../../assets/diagnostic/diagnosticImg.png'
import mainImg from '../../assets/diagnostic/mainImg.jpg'

import './diagnostic.scss'

const Diagnostic = () => {
  const data = [
    {
      title: "Что включает комплексная диагностика зрения",
      descr: "Комплексная диагностика — это полное обследование зрительной системы ребенка с использованием современного оборудования. Включает проверку остроты зрения, рефракции (близорукость, дальнозоркость, астигматизм), бинокулярных функций, состояния глазного дна и внутриглазного давления. Позволяет выявить даже скрытые патологии на ранней стадии и подобрать оптимальный метод коррекции или лечения."
    },
    {
      title: "Безопасность и комфорт для ребенка",
      descr: "Диагностика проводится с учетом возрастных особенностей детей. Врач подбирает методы обследования так, чтобы минимизировать дискомфорт для ребенка. При необходимости используются щадящие подходы, а родители могут присутствовать во время процедур. Все манипуляции выполняются на специализированном оборудовании, соответствующем медицинским стандартам."
    },
    {
      title: "Почему это важно для детей",
      descr: "Зрение ребенка активно формируется до 12-14 лет. Раннее выявление таких проблем, как амблиопия («ленивый глаз»), косоглазие или прогрессирующая миопия, позволяет вовремя начать лечение. В 80% случаев своевременная диагностика помогает предотвратить серьезные нарушения и избежать хирургического вмешательства в будущем."
    },
    {
      title: "Как подготовиться к диагностике",
      descr: "1. Возьмите с собой предыдущие рецепты на очки/линзы (если есть).\n2. Для детей до 3 лет желательно приехать после сна и кормления.\n3. Если ребенок носит контактные линзы, их нужно снять за 1-2 дня до обследования (или предупредить врача).\n4. После расширения зрачка возможна временная нечёткость зрения — планируйте возвращение домой без нагрузок."
    },
    {
      title: "После диагностики",
      descr: "Родители получают подробное заключение с диагнозом, рекомендациями по коррекции (очки, аппаратное лечение и т.д.) и дальнейшему наблюдению. Для сложных случаев собирается консилиум специалистов. При необходимости назначаются дополнительные исследования (ОКТ, УЗИ глаза)."
    }
  ];

  return (
    <main className="diagnostic">
      <div className="diagnostic__breadcrumbs breadcrumbs">
        <Link to='/'>
          <span>главная</span>
        </Link>
        <span>/</span>
        <span>услуги</span>
        <span>/</span>
        <span>комплексная диагностика</span>
      </div>
      <h1 className="diagnostic__heading section-heading">Комплексная диагностика</h1>
      <section className="diagnostic__hero">
        <img src={heroImg} alt="Ортокератология" className="diagnostic__hero__img" />
        <div className="diagnostic__hero__text">
          Комплексная диагностика зрения - это расширенное обследование, которое включает в себя ряд процедур для оценки различных аспектов здоровья глаз и зрения. В отличие от стандартной проверки зрения, комплексная диагностика позволяет выявить не только нарушения рефракции (близорукость, дальнозоркость, астигматизм), но и другие заболевания глаз на ранних стадиях, когда они еще не проявляются симптомами.
        </div>
      </section>

      <section className="diagnostic__main">
        <h2 className="diagnostic__main__heading section-heading">Подробнее о процедуре</h2>

        <div className="diagnostic__main__box">
          <Accordion.Root 
            type="single" 
            collapsible 
            className="diagnostic__accordion-root"
          >
            {data.map((item, index) => (
              <Accordion.Item value={`item-${index}`} className="diagnostic__accordion-item" key={index}>
                <Accordion.Header>
                  <Accordion.Trigger className="diagnostic__accordion-trigger">
                    {item.title}
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="diagnostic__accordion-content">
                  {item.descr}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
          <img src={mainImg} alt="lenses" className='diagnostic__main__img'/>
        </div>
      </section>
    </main>
  )
}

export default Diagnostic