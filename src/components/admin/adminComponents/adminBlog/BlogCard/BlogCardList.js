import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteBlogCard, editBlogCard, listBlogCard, showItem } from '../../../../../actions';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogCardList = (props) => {
  const navigate = useNavigate();


  useEffect(() => {
    props.listBlogCard();
    console.log('render');
  }, []);

  console.log(props);

  const deleteItem = (item) => {
    if (window.confirm(`Вы хотите удалить это ${item.title}?`)) {
      props.deleteBlogCard(item._id, props.token);
      props.listBlogCard();
    }

    if (props.res.status && props.res.status === 200) {
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
    } else if (410 < props.res.status <= 500) {
      toast.error(props.res.data.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error('Ошибка!!!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    }


  };

  const edit = (item) => {

    props.editBlogCard(item);
    navigate('/admin/blog/card/edit');

  };

  const show = (item) => {
    props.showItem([item]);
    navigate('/admin/blog/card/show');

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
    list: state.getBlogCards,
    res: state.deleteBlogCards,
    token: state.token,
  };
};

export default connect(mapStateToProps, { listBlogCard, deleteBlogCard, editBlogCard, showItem })(BlogCardList);
