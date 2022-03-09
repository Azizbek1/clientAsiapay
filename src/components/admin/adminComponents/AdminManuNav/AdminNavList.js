import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteMenu, getMenuList, postMenu, showItem, updateListMenu, updateMenu } from '../../../../actions';
import ReactPaginate from 'react-paginate';


const AdminNavList = (props) => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const listPerPage = 10;
  const pagesVisited = pageNumber * listPerPage;

  const diplayList = list
    .slice(pagesVisited, pagesVisited + listPerPage)
    .map((item, idx) => {
      return (
        <tr key={idx}>
          <th>{idx + 1}</th>
          <th>{item.name}</th>
          <th>
            <div className="f-flex align-content-between ">
              <button className="btn btn-danger mr-2" onClick={() => deleteItem(item)}>Удалить</button>
              <button className="btn btn-success mr-2" onClick={() => edit(item)}>Редактировать</button>
              <button className="btn btn-primary" onClick={() => show(item)}>Показывать</button>
            </div>
          </th>

        </tr>
      );
    });

  const pageCount = Math.ceil(list.length / listPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


  useEffect(() => {
    props.getMenuList();
    setList(props.list);
    console.log('useEffect');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const deleteItem = (item) => {

    if (window.confirm(`Вы хотите удалить это ${item.title}?`)) {
      props.deleteMenu(item._id, props.token);
      props.getMenuList();
      setList(props.list);
    }
  };

  const show = (item) => {
    props.showItem([item]);
    navigate('/admin/navbar/show');
  };

  const edit = (menu) => {
    console.log(menu);
    props.updateListMenu(menu);
    navigate('/admin/navbar/edit');

  };


  return (
    <div>
      <h1 className="slider slider-purple">Список</h1>
      <div className="card-body">
        <table className="table table-bordered table-hover">
          <thead>
          <tr>
            <th>index</th>
            <th>Название</th>
            <th>действие</th>
          </tr>
          </thead>
          <tbody>
          {diplayList}

          </tbody>
          <tfoot>
          <tr>
            <th>index</th>
            <th>Название</th>
            <th>действие</th>
          </tr>
          </tfoot>
        </table>
        <div className="mt-4">
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'pagination'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}

          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
    list: state.menuList,
    message: state.deleteMenu,
    token: state.token,
  };
};

export default connect(mapStateToProps, {
  getMenuList,
  postMenu,
  updateMenu,
  deleteMenu,
  updateListMenu,
  showItem,
})(AdminNavList);

