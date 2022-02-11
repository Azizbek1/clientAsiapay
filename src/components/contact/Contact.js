import React from "react";
import contact from "../../images/contact.png";
import "./contact.scss";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="row">
          <h2>Контакт</h2>
          <div className="col-md-6 contact__img">
            <img src={contact} alt="png" />
          </div>
          <div className="col-md-6">
            <div className="contact__title">
              <ul>
                <li><i className="fas fa-phone-volume"></i>Контакты: Umidjon <i>+998 (91) </i><b>779-78-28</b> </li>
                <li><i className="fas fa-map-marked-alt"></i>Адрес: Ташкентская область г.Чирчик ул. Амангелди - 4</li>
                <li><i className="fas fa-envelope-open-text"></i>Режим работы: Понедельник - Пятница
(8:00 - 17:00)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
