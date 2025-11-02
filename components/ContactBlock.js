"use client";

export default function ContactBlock() {
  const submit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const payload = await res.json().catch(() => ({}));
      if (!res.ok || payload?.ok === false) {
        throw new Error(payload?.error || "Неизвестная ошибка API");
      }

      form.reset();
      const ok = form.querySelector("#contactBlockOk");
      if (ok) { ok.hidden = false; setTimeout(() => (ok.hidden = true), 6000); }
    } catch (err) {
      alert(err.message || "Не удалось отправить. Попробуйте ещё раз или напишите на почту.");
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
          {/* Левая колонка — данные */}
          <div className="contactBlock__info card">
            <dl className="contactBlock__dl">
              <div className="contactBlock__row">
                <dt>Телефон</dt>
                <dd><a href="tel:+74952155471">8 (495) 215-54-71</a></dd>
              </div>
              <div className="contactBlock__row">
                <dt>Адрес</dt>
                <dd>Москва, ул. Ильинка, 4</dd>
              </div>
              <div className="contactBlock__row">
                <dt>E-mail</dt>
                <dd><a href="mailto:laveastudio@yandex.ru">laveastudio@yandex.ru</a></dd>
              </div>
            </dl>

            <div className="contactBlock__hours">
              <div><strong>пн–пт</strong> 10:00–19:00</div>
              <div><strong>сб</strong> 10:00–17:00</div>
              <div><strong>вс</strong> выходной</div>
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
                <textarea name="message" rows={4} placeholder="Коротко опишите задачу" />
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
