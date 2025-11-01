"use client";

export default function DiscussProject() {
  return (
    <section className="laveaDiscuss">
      <div className="laveaDiscuss__inner">
        <div className="laveaDiscuss__left">
          <h2>Будем рады обсудить ваш проект</h2>
          <p>
            Свяжитесь с нами, чтобы получить консультацию по стоимости, срокам и подходу
            к вашему проекту. Мы обсудим идеи, рассчитаем смету и подскажем оптимальное решение.
          </p>
          <button
            className="btn goldBtn"
            onClick={() => window.openContactModal?.()}
          >
            Обсудить проект
          </button>
        </div>

        <div className="laveaDiscuss__right">
          <form className="laveaForm">
            <h3>Заказать услугу или консультацию</h3>
            <input type="text" placeholder="Ваше имя" required />
            <input type="tel" placeholder="Телефон" required />
            <input type="email" placeholder="Email" />
            <select>
              <option>Дизайн-проект интерьера</option>
              <option>Авторский надзор</option>
              <option>Комплектация</option>
            </select>
            <textarea placeholder="Комментарий" rows="4"></textarea>
            <button type="submit" className="btn goldBtn">
              Отправить заявку
            </button>
            <label className="policy">
              <input type="checkbox" required /> Я согласен с{" "}
              <a href="#">Политикой конфиденциальности</a>
            </label>
          </form>
        </div>
      </div>
    </section>
  );
}
