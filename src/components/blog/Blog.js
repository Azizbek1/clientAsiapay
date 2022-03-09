import React, { useEffect, useState } from 'react';
import './blog.scss';
import { connect } from 'react-redux';
import { listBlogCard } from '../../actions';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const Blog = (props) => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const listPerPage = 8;
  const pagesVisited = pageNumber * listPerPage;

  const diplayList = list
    .slice(pagesVisited, pagesVisited + listPerPage)
    .map((item, idx) => {
      return (
        <div className="col-md-3 col-sm-6" key={idx}>
          <div className="blog__card">
            <div className="blog__img">
              <img src={`http://localhost:5000/${item.image_path}`} alt="png" />
            </div>
            <div className="blog__text">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href="javascriptvoid:(2)" className="btn btn-success">{item.slug}</a>
            </div>

          </div>
        </div>
      );
    });


  const pageCount = Math.ceil(list.length / listPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    props.listBlogCard();
    setList(props.list);
  }, []);

  console.log(props);

  return (
    <div className="blog">
      <h2>Новости компании!</h2>
      <div className="container-fluid">
        <div className="row">
          {
            props.list ? diplayList : <h1 className="text-center"> Nothing </h1>
          }

        </div>


        <nav aria-label="...">
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            pageCount={pageCount}
            onPageChange={changePage}
            renderOnZeroPageCount={null}
            containerClassName={'pagination'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            activeClassName={'page-item active'}
            activeLinkClassName={'page-link'}
          />
          {/*<ul className="pagination">*/}
          {/*  <li className="page-item disabled">*/}
          {/*    <a href="javascriptvoid" className="page-link">Previous</a>*/}
          {/*  </li>*/}
          {/*  <li className="page-item"><a className="page-link" href="javascritpVoid">1</a></li>*/}
          {/*  <li className="page-item active" aria-current="page">*/}
          {/*    <a className="page-link" href="javascritpVoid">2 <span className="visually-hidden">(current)</span></a>*/}
          {/*  </li>*/}
          {/*  <li className="page-item"><a className="page-link" href="javascritpVoid">3</a></li>*/}
          {/*  <li className="page-item">*/}
          {/*    <a className="page-link" href="javascritpVoid">Next</a>*/}
          {/*  </li>*/}
          {/*</ul>*/}
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.getBlogCards,
  };
};

export default connect(mapStateToProps, { listBlogCard })(Blog);


// <div>
//
//   <div className="col-md-3 col-sm-6">
//     <div className="blog__card">
//       <div className="blog__img">
//         <img src={pay1} alt="png" />
//       </div>
//       <div className="blog__text">
//         <h3>lorem ipsum dolor sit amet, consectetur</h3>
//         <p>llorem ipsum dolor lorem ipsum dolor sit amet, consectet</p>
//         <a href="javascriptvoid:(2)" className="btn btn-success">lorem</a>
//       </div>
//
//     </div>
//   </div>
//   <div className="col-md-3 col-sm-6">
//     <div className="blog__card">
//       <div className="blog__img">
//         <img src={pay1} alt="png" />
//       </div>
//       <div className="blog__text">
//         <h3>lorem ipsum dolor sit amet, consectetur</h3>
//         <p>llorem ipsum dolor lorem ipsum dolor sit amet, consectet</p>
//         <a href="javascriptvoid:(2)" className="btn btn-success">lorem</a>
//       </div>
//
//     </div>
//   </div>
//   <div className="col-md-3 col-sm-6">
//     <div className="blog__card">
//       <div className="blog__img">
//         <img src={pay1} alt="png" />
//       </div>
//       <div className="blog__text">
//         <h3>lorem ipsum dolor sit amet, consectetur</h3>
//         <p>llorem ipsum dolor lorem ipsum dolor sit amet, consectet</p>
//         <a href="javascriptvoid:(2)" className="btn btn-success">lorem</a>
//       </div>
//
//     </div>
//   </div>
//   <div className="col-md-3 col-sm-6">
//     <div className="blog__card">
//       <div className="blog__img">
//         <img src={pay1} alt="png" />
//       </div>
//       <div className="blog__text">
//         <h3>lorem ipsum dolor sit amet, consectetur</h3>
//         <p>llorem ipsum dolor lorem ipsum dolor sit amet, consectet</p>
//         <a href="javascriptvoid:(2)" className="btn btn-success">lorem</a>
//       </div>
//
//     </div>
//   </div>
//   <div className="col-md-3 col-sm-6">
//     <div className="blog__card">
//       <div className="blog__img">
//         <img src={pay1} alt="png" />
//       </div>
//       <div className="blog__text">
//         <h3>lorem ipsum dolor sit amet, consectetur</h3>
//         <p>llorem ipsum dolor lorem ipsum dolor sit amet, consectet</p>
//         <a href="javascriptvoid:(2)" className="btn btn-success">lorem</a>
//       </div>
//
//     </div>
//   </div>
//   <div className="col-md-3 col-sm-6">
//     <div className="blog__card">
//       <div className="blog__img">
//         <img src={pay1} alt="png" />
//       </div>
//       <div className="blog__text">
//         <h3>lorem ipsum dolor sit amet, consectetur</h3>
//         <p>llorem ipsum dolor lorem ipsum dolor sit amet, consectet</p>
//         <a href="javascriptvoid:(2)" className="btn btn-success">lorem</a>
//       </div>
//
//     </div>
//   </div>
//   <div className="col-md-3 col-sm-6">
//     <div className="blog__card">
//       <div className="blog__img">
//         <img src={pay1} alt="png" />
//       </div>
//       <div className="blog__text">
//         <h3>lorem ipsum dolor sit amet, consectetur</h3>
//         <p>llorem ipsum dolor lorem ipsum dolor sit amet, consectet</p>
//         <a href="javascriptvoid:(2)" className="btn btn-success">lorem</a>
//       </div>
//
//     </div>
{/*  </div>*/
}
{/*</div>*/
}