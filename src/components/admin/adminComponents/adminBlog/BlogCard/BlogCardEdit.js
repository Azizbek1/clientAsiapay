import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateBlogCard } from '../../../../../actions';

import FormData from 'form-data';

const BlogCardEdit = (props) => {
  const navigate = useNavigate();

  const initialstate = {
    title: props.card.title,
    text: props.card.text,
    slug: props.card.slug,
    file: props.card.file,
  };
  const [data, setData] = useState(initialstate);


  console.log(data);
  console.log(props);

  const submit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('text', data.text);
    formData.append('slug', data.link);
    formData.append('file', data.file);


    props.updateBlogCard(props.card._id, formData, props.token);

    navigate('/admin/blog/card/list');


  };


  return (
    <div>
      <h3 className="text-center">Обнавить </h3>
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
          <button className="btn btn-success" type="submit">Обнавить</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    card: state.editBlogCards,
    res: state.updateBlogCards,
    token: state.token,
  };
};

export default connect(mapStateToProps, { updateBlogCard })(BlogCardEdit);
