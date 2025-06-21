import * as Accordion from '@radix-ui/react-accordion';
import { Link } from 'react-router';
import heroImg from '../../assets/diagnostic/diagnosticImg.png'
import mainImg from '../../assets/diagnostic/mainImg.jpg'

import './diagnostic.scss'

const Diagnostic = () => {
  const data = [
    {
      title: "Что такое ортокератология",
      descr: "Ортокератология — это метод коррекции зрения с помощью специальных жёстких газопроницаемых линз, которые надеваются на ночь. Во время сна линзы временно изменяют форму роговицы, благодаря чему днём человек видит хорошо без очков или обычных контактных линз. Эффект обратим и не требует хирургического вмешательства, что делает ортокератологию безопасной и подходящей для детей и взрослых с начальной и средней степенью миопии"
    },
    {
      title: "Удобство и простота в использовании",
      descr: "Ночные линзы надеваются всего на несколько часов — во время сна. Днём их не нужно носить, поэтому ничто не мешает привычному образу жизни. Уход за линзами не сложнее, чем за обычными контактными. Пациенты быстро привыкают к процедуре надевания и снятия, а также к графику использования. Это делает методику комфортной как для детей школьного возраста, так и для занятых взрослых"
    },
    {
      title: "Занятия спортом без ограничений",
      descr: "Одним из главных преимуществ ночных линз является полная свобода движений в течение дня. Отсутствие очков и дневных линз особенно важно для активных людей: школьников, спортсменов, пловцов, танцоров. Ортокератология позволяет заниматься спортом без опасений, связанных с выпадением линзы или запотеванием очков. Это удобное и безопасное решение для тех, кто хочет видеть чётко и не испытывать дискомфорта"
    },
    {
      title: "Как работают ночные линзы",
      descr: "Ночные линзы мягко воздействуют на роговицу глаза, моделируя её форму во время сна. Изменение формы роговицы позволяет фокусировать свет прямо на сетчатке, устраняя близорукость. После снятия линз утром эффект сохраняется на весь день. При регулярном ношении зрение остаётся чётким, а процесс безопасен и контролируется врачом. При прекращении ношения роговица постепенно возвращается к своей изначальной форме"
    }
  ]

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
      <h1 className="diagnostic__heading section-heading">Ортокератология</h1>
      <section className="diagnostic__hero">
        <img src={heroImg} alt="Ортокератология" className="diagnostic__hero__img" />
        <div className="diagnostic__hero__text">
          Эффективные профилактика и лечение различных заболеваний — это комплекс медицинских мероприятий, которые определяются индивидуально. Так как физиотерапия не предполагает хирургическое вмешательство и применение медикаментов, врачу необходимо подбирать каждому из пациентов, даже со схожими проблемами, персональную программу. В нашей клинике широкий спектр терапевтических процедур. У нас есть уникальное оборудование для применения разных методик лечения и профилактики. Врач расскажет о доступных вариантах и предложит самые результативные из них в вашем случае.
        </div>
      </section>

      <section className="diagnostic__main">
        <h2 className="diagnostic__main__heading section-heading">Ночные линзы</h2>

        <div className="diagnostic__main__box">
          <Accordion.Root type="single" collapsible className="diagnostic__accordion-root">
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