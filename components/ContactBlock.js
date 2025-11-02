"use client";

export default function ContactBlock() {
  const submit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    form.reset();
    const ok = form.querySelector("#contactBlockOk");
    if (ok) {
      ok.hidden = false;
      setTimeout(() => (ok.hidden = true), 6000);
    }
  };

  return (
    <section id="contacts" className="contactBlock">
      <div className="contactBlock__container">
        <div className="contactBlock__head">
          <h2 className="contactBlock__title">Контакты</h2>
          <p className="contactBlock__subtitle">Ответим на вопросы и назначим консультацию</p>
        </div>

        <div className="contactBlock__grid">
          {/* Левая колонка — информация */}
          <div className="contactBlock__info card">
            <ul className="contactBlock__list">
              <li>
                <span>Телефон:</span>{" "}
                <a href="tel:+74952155471">8 (495) 215-54-71</a>
              </li>
              <li><span>Адрес:</span> Москва, ул. Ильинка, 4</li>
              <li>
                <span>E-mail:</span>{" "}
                <a href="mailto:laveastudio@yandex.ru">laveastudio@yandex.ru</a>
              </li>
            </ul>

            <div className="contactBlock__hours">
              <div><strong>пн–пт:</strong> 10:00–19:00</div>
              <div><strong>сб:</strong> 10:00–17:00</div>
              <div><strong>вс:</strong> выходной</div>
            </div>

            <div className="contactBlock__cta">
              <a href="tel:+74952155471" className="goldBtn contactBlock__btn">Позвонить</a>
              <a href="mailto:laveastudio@yandex.ru" className="contactBlock__btn contactBlock__btn--ghost">Написать</a>
            </div>
          </div>

          {/* Правая колонка — форма */}
          <div className="contactBlock__form card">
            <h3 className="contactBlock__formTitle">Обратная связь</h3>
            <form onSubmit={submit} id="contactBlockForm" noValidate>
              <div className="contactBlock__field">
                <label>Имя</label>
                <input type="text" name="name" placeholder="Ваше имя" required />
              </div>
              <div className="contactBlock__field">
                <label>Телефон</label>
                <input type="tel" name="phone" placeholder="+7 (___) ___-__-__" required />
              </div>
              <div className="contactBlock__field">
                <label>Сообщение</label>
                <textarea name="message" rows="4" placeholder="Коротко опишите задачу" />
              </div>
              <label className="contactBlock__agree">
                <input type="checkbox" required /> Согласен(а) на обработку персональных данных
              </label>
              <button type="submit" className="goldBtn contactBlock__btn contactBlock__btn--full">Отправить</button>
              <p className="contactBlock__note">Нажимая «Отправить», вы даёте согласие на обработку данных.</p>
              <p id="contactBlockOk" className="contactBlock__ok" hidden>Спасибо! Мы свяжемся в рабочее время.</p>
            </form>
          </div>
        </div>

        {/* Карта */}
        <div className="contactBlock__map card" aria-label="Карта проезда">
          <iframe
            title="Москва, ул. Ильинка, 4"
            src="https://www.google.com/maps?q=Москва,+ул.+Ильинка,+4&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
