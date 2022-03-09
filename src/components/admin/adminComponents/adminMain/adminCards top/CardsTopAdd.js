import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createCardTop } from '../../../../../actions';
import { toast } from 'react-toastify';
import FormData from 'form-data';

const initialstate = {
  title: '',
  text: '',
  link: '',
  file: '',
};

const CardsTopAdd = (props) => {

  const [data, setData] = useState(initialstate);


  console.log(props);

  const submit = async (e) => {
    e.preventDefault();
    const formData = await new FormData();
    formData.append('title', data.title);
    formData.append('text', data.text);
    formData.append('slug', data.link);
    formData.append('file', data.file);
    await props.createCardTop(formData, props.token);
    console.log(formData);

    if (props.res.status >= 200) {
      toast.success(props.res.data.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (400 > props.res.status > 200) {
      toast.warn(props.res.data.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(props.res.data.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    setData(initialstate);


  };


  return (
    <div>
      <h3 className="text-center">Добавить </h3>
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
    res: state.createCard,
    token: state.token,
  };
};

export default connect(mapStateToProps, { createCardTop })(CardsTopAdd);
