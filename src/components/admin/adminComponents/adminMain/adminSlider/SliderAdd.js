import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSlider } from '../../../../../actions';

import FormData from 'form-data';

const initialstate = {
  title: '',
  text: '',
  file: '',
};

const Slideradd = (props) => {

  const [data, setData] = useState(initialstate);


  console.log(data);
  console.log(props);

  const submit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('text', data.text);
    formData.append('file', data.file);


    props.postSlider(formData, props.token);
    console.log(formData);

    setData(initialstate);


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
                <label>Изображение</label>
                <input
                  value={data.img}
                  onChange={(e) => setData({ ...data, file: e.target.files[0] })}
                  type="file"
                  className="form-control"
                  placeholder="Добавить рисунок"
                  name="file" />
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
    message: state.statusPostSlider,
    token: state.token,
  };
};

export default connect(mapStateToProps, { postSlider })(Slideradd);
