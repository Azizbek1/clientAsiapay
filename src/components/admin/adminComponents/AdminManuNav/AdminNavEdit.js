import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateMenu } from '../../../../actions';


const AdminNavEdit = (props) => {
  const navigate = useNavigate();

  const initialstate = {
    name: props.menu.name,

  };
  const [formData, setFormData] = useState(initialstate);


  console.log(formData);
  console.log(props);


  useEffect(() => {


  }, []);


  const submit = (e) => {
    e.preventDefault();
    props.updateMenu(props.menu._id, formData, props.token);

    navigate('/admin/navbar/list');
  };


  return (
    <div>
      <h3 className="text-center">Обновить</h3>
      <div className="card-body">
        <form id="frm-add-cardTop" onSubmit={submit}>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>название</label>
                <input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  type="text"
                  className="form-control"
                  placeholder="Добавить загаловку"
                  name="name" />
              </div>
            </div>
          </div>
          <button className="btn btn-success" type="submit">Обновить</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    menu: state.updateListMenu,
    message: state.updateMenu,
    token: state.token,

  };
};

export default connect(mapStateToProps, { updateMenu })(AdminNavEdit);

