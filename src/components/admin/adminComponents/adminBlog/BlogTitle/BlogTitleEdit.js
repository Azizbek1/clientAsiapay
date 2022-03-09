import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateBlogTitle } from '../../../../../actions';
import notify from '../../../../hooks/notify';


const BlogTitleEdit = (props) => {
  const navigate = useNavigate();

  const initialstate = {
    name: props.blog.name,
  };
  const [data, setData] = useState(initialstate);


  const submit = async (e) => {
    e.preventDefault();

    await props.updateBlogTitle(props.blog._id, data, props.token);

    props.res && notify(props.res);

    navigate('/admin/blog/title/list');


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
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  type="text"
                  className="form-control"
                  placeholder="Добавить загаловку"
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
    blog: state.blogTitleEdit,
    res: state.blogTitleUpdate,
    token: state.token,
  };
};

export default connect(mapStateToProps, { updateBlogTitle })(BlogTitleEdit);
