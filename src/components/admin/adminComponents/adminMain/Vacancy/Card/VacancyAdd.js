import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createVacancy } from '../../../../../../actions';
import notify from '../../../../../hooks/notify';

const initialstate = {
  title: '',
  text: '',
  title_top: '',
  slug: '',
};

const VacancyAdd = (props) => {

  const [data, setData] = useState(initialstate);


  console.log(data);
  console.log(props);

  const submit = async (e) => {
    e.preventDefault();
    await props.createVacancy(data, this.props.token);



    // setData(initialstate)


  };


  return (
    <div>
      <h3 className="text-center">Добавить Слайдер</h3>
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
                  value={data.slug}
                  onChange={(e) => setData({ ...data, slug: e.target.value })}
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
          <button className="btn btn-success" type="submit">добавить</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    res: state.createVacancy,
    token: state.token,
  };
};

export default connect(mapStateToProps, { createVacancy })(VacancyAdd);
