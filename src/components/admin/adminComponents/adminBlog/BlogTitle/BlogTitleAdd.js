import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createBlogTitle } from '../../../../../actions';

const initialstate = {
  name: '',
};

const BlogTitleAdd = (props) => {

  const [data, setData] = useState(initialstate);


  console.log(props);
  console.log(data);

  const submit = async (e) => {
    e.preventDefault();

    props.createBlogTitle(data, props.token);

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
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  type="text"
                  className="form-control"
                  placeholder="Добавить загаловку"
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
    res: state.createBlogTitle,
    token: state.token,
  };
};

export default connect(mapStateToProps, { createBlogTitle })(BlogTitleAdd);
