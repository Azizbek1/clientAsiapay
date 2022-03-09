import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteSlider, getSliderList, showItem, updateItemSlider } from '../../../../../actions';

const Sliderlist = (props) => {
  const navigate = useNavigate();


  console.log(props);

  useEffect(() => {
    props.getSliderList();
  }, []);

  const deleteItem = async (item) => {

    if (window.confirm(`Вы хотите удалить это ${item.title}?`)) {
      await props.deleteSlider(item._id, props.token);
      props.getSliderList();

    }
  };

  const edit = (item) => {
    props.updateItemSlider(item);
    navigate('/admin/main/sliderTop/edit');
  };

  const show = (item) => {
    props.showItem([item]);
    navigate('/admin/main/sliderTop/show');
  };


  return (
    <div>
      <h3 className="text-center">Список</h3>
      <div className="card-body">
        <table className="table table-bordered table-hover">
          <thead>
          <tr>
            <th>index</th>
            <th>Заголовок</th>
            <th>Текст</th>
            <th>Название изображения</th>
            <th>Изображение</th>
            <th>действие</th>
          </tr>
          </thead>
          <tbody>

          {
            props.list && props.list.map((item, idx) => {
              return (
                <tr key={idx}>
                  <th>{idx}</th>
                  <th>{item.title}</th>
                  <th>{item.text}</th>
                  <th>{item.image_name}</th>
                  <th><img src={`http://localhost:5000/${item.image_path}`} width="200" height="100"
                           alt={item.image_name} /></th>
                  <th>
                    <div className="f-flex align-content-between ">
                      <button className="btn btn-danger mr-2" onClick={() => deleteItem(item)}>Удалить</button>
                      <button className="btn btn-success mr-2" onClick={() => edit(item)}>Редактировать</button>
                      <button className="btn btn-primary" onClick={() => show(item)}>Показывать</button>
                    </div>
                  </th>

                </tr>
              );
            })
          }
          </tbody>
          <tfoot>
          <tr>
            <th>index</th>
            <th>Заголовок</th>
            <th>Текст</th>
            <th>Название изображения</th>
            <th>Изображение</th>
            <th>действие</th>
          </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.sliderList,
    message: state.statusDeleteSilder,
    token: state.token,

  };
};

export default connect(mapStateToProps, { getSliderList, deleteSlider, updateItemSlider, showItem })(Sliderlist);
