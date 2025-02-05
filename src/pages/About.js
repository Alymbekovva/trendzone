import "./About.css"
function About() {

    return (
      <div>
     <div className="about-container">
      <h1 className="about-title">О нас</h1>
      <p className="about-description">
        Добро пожаловать на наш сайт мероприятий! Здесь вы найдете информацию о
        самых интересных событиях, включая конкурсы, семинары, выставки и многое
        другое. Наш сайт создан для активной молодежи и профессионалов, которые
        стремятся участвовать в самых ярких событиях.
      </p>

      <div className="about-feature">
        <h2>Наши преимущества</h2>
        <ul className="about-list">
          <li>Удобный поиск по категориям и датам</li>
          <li>Добавление собственных мероприятий</li>
          <li>Сохранение интересующих событий</li>
          <li>Доступ к событиям со всего города и страны</li>
        </ul>
      </div>

      <div className="about-mission">
        <h2>Наша миссия</h2>
        <p>
          Мы стремимся объединить людей и вдохновить их участвовать в самых
          интересных и познавательных мероприятиях. Независимо от того, ищете ли
          вы развлечения или профессиональный рост, у нас есть что предложить
          каждому!
        </p>
      </div>

      <div className="about-contact">
        <h2>Свяжитесь с нами</h2>
        <p>
          Если у вас есть вопросы или предложения, напишите нам на{" "}
          <a href="mailto:info@eventsplatform.com" className="about-link">
            info@eventsplatform.com
          </a>
        </p>
      </div>

      <p className="about-footer">
        Создавайте. Участвуйте. Вдохновляйтесь вместе с нами!
      </p>
    </div>
        <h1 style={{color: "black"}}>О платформе для проведения мероприятий</h1>
        <p class="luias">Платформа позволяет пользователям публиковать материалы и регистрировать на мероприятий.</p>
      </div>
    );
  }
  
  export default About;
  