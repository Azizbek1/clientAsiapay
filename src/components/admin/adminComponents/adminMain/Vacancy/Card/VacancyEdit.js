import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateVacancy } from '../../../../../../actions';
import { useNavigate } from 'react-router-dom';


const VacancyEdit = (props) => {
  const navigate = useNavigate();

  const initialstate = {
    title: props.card.title,
    text: props.card.text,
    link: props.card.slug,
    title_top: props.card.title_top,
  };

  const [data, setData] = useState(initialstate);


  console.log(data);
  console.log(props);

  const submit = (e) => {
    e.preventDefault();


    props.updateVacancy(props.card._id, data, props.token);
    console.log(data);
    console.log(props);

    navigate('/admin/vacancy/card/list');


  };


  return (
    <div>
      <h3 className="text-center">Обновить Слайдер</h3>
      <div className="card-body">
        <form id="frm-add-cardTop" onSubmit={submit}>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>Заголовок</label>
                <input
                  required
                  value={data.title}
                  onChange={(e) => setData({ ...data, title: e.target.value })}
                  type="text"
                  className="form-control"
                  placeholder="Добавить загаловку"
                  name="name" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Текст</label>
                <input
                  required
                  value={data.text}
                  onChange={(e) => setData({ ...data, text: e.target.value })}
                  type="text"
                  className="form-control"
                  placeholder="Добавить текст"
                  name="name" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Ссылка</label>
                <input
                  required
                  value={data.link}
                  onChange={(e) => setData({ ...data, link: e.target.value })}
                  type="url"
                  className="form-control"
                  placeholder="Добавить текст"
                  name="name" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Вверхный заголовок </label>
                <input
                  required
                  value={data.title_top}
                  onChange={(e) => setData({ ...data, title_top: e.target.value })}
                  type="text"
                  className="form-control"
                  placeholder="Добавить текст"
                  name="name" />
              </div>
            </div>
          </div>
          <button className="btn btn-success" type="submit">Обнавить</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    card: state.editVacancy,
    res: state.updateVacancy,
    token: state.token,

  };
};

export default connect(mapStateToProps, { updateVacancy })(VacancyEdit);
