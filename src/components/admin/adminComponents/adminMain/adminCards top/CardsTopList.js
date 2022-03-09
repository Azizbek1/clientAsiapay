import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteCard, editCard, getCards } from '../../../../../actions';
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../../../hooks/notify';

const CardsTopList = (props) => {
  const navigate = useNavigate();


  useEffect(() => {
    props.getCards();
    console.log('render');
  }, []);

  console.log(props);

  const deleteItem = (item) => {
    if (window.confirm(`Вы хотите удалить это ${item.title}?`)) {
      props.deleteCard(item._id, props.token);
      props.getCards();
    }
    notify(props.res.status, props.res.data.message);


  };

  const edit = (item) => {

    props.editCard(item);
    navigate('/admin/main/cards-top/edit');

  };

  const show = () => {


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
            <th>Ссылка</th>
            <th>Изображение</th>
            <th>действие</th>
          </tr>
          </thead>
          <tbody>
          {
            props.list && props.list.map((item, idx) => {
              return (
                <tr key={idx + 1}>
                  <th>{idx}</th>
                  <th>{item.title}</th>
                  <th>{item.text}</th>
                  <th>{item.link}</th>
                  <th><img src={`http://localhost:5000/${item.image_path}`} width="200" height="100" alt="alt" /></th>
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
            <th>Ссылка</th>
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
    list: state.getAllCards,
    res: state.deleteCardStatus,
    token: state.token,
  };
};

export default connect(mapStateToProps, { getCards, deleteCard, editCard })(CardsTopList);
