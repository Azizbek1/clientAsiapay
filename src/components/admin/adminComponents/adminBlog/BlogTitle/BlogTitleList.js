import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteBlogTitle, editBlogTitle, getBlogTitle, showItem } from '../../../../../actions';


const BlogTitleList = (props) => {
  const navigate = useNavigate();


  useEffect(() => {
    props.getBlogTitle();
    console.log('render');
  }, []);

  console.log(props);

  const deleteItem = async (item) => {
    if (window.confirm(`Вы хотите удалить это ${item.title}?`)) {
      await props.deleteBlogTitle(item._id, props.token);
      props.getBlogTitle();
      // notify(props.res.status, props.res.data.message);
    }


  };

  const edit = (item) => {

    props.editBlogTitle(item);
    navigate('/admin/blog/title/edit');

  };

  const show = (item) => {
    props.showItem([item]);
    navigate('/admin/blog/title/show');

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
            <th>действие</th>
          </tr>
          </thead>
          <tbody>
          {
            props.list && props.list.map((item, idx) => {
              return (
                <tr key={idx + 1}>
                  <th>{idx}</th>
                  <th>{item.name}</th>
                  <th>
                    <div className="f-flex align-content-between ">
                      <button className="btn btn-danger mr-2" onClick={() => deleteItem(item)}>
                        Удалить
                        {/* <input type="checkbox" className='form-check-input' value={item._ids}/> */}
                      </button>
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
    list: state.blogTitleList,
    res: state.blogTitleDelete,
    token: state.token,
  };
};

export default connect(mapStateToProps, { getBlogTitle, deleteBlogTitle, editBlogTitle, showItem })(BlogTitleList);
