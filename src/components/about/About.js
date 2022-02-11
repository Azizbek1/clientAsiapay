import React from "react";
import people from "../../images/people.jpg";
import about1 from "../../images/about1.png";
import about2 from "../../images/about2.png";
import about3 from "../../images/about3.png";
import about4 from "../../images/about4.png";
import "./about.scss";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="about__title">
          <h1>О нас</h1>
          <h3>
            “Больше чем просто бизнес, Экономия времени всем и каждому”
          </h3>
          <p>
            Мы эксперты в своем деле.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="about__fine">
              <img src={people} alt="jpg" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about__fine">
                <h2>Что это значит для клиента?</h2>
                <p>Долго размышляяя над этим вопросом мы решили, что, невозможно быть экспертом во всем. И Мы решили, что, будем экспертами в экономии времени человека.</p>
                <p>Ведь человек проводит 60% своего драгоценного времени с деньгами. Всего в пару кликов вы отдадите эту задачу нам и мы сделаем всю остальную работу за вас.</p>
                <a className="btn btn-warning" href="javascriptvoid">Lorem.</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid about__teams">
          <div className="about__teams-title">
            <h2>Lorem, ipsum.</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sed.</p>
          </div>
          <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="about__teams-cards">
                    <img src={about1} alt="png" />
                    <h4>Lorem, ipsum.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illum repellat rem velit laboriosam repudiandae ducimus error perferendis amet eum!</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="about__teams-cards">
                    <img src={about2} alt="png" />
                    <h4>Lorem, ipsum.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illum repellat rem velit laboriosam repudiandae ducimus error perferendis amet eum!</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="about__teams-cards">
                    <img src={about3} alt="png" />
                    <h4>Lorem, ipsum.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illum repellat rem velit laboriosam repudiandae ducimus error perferendis amet eum!</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="about__teams-cards">
                    <img src={about4} alt="png" />
                    <h4>Lorem, ipsum.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illum repellat rem velit laboriosam repudiandae ducimus error perferendis amet eum!</p>
                </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default About;
