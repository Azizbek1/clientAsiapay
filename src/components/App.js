import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.scss";
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';


import About from "./about/About";
import Layout from "./Layout";
import Contact from "./contact/Contact";
import Vokansi from "./vokanse/Vokansi";
import Notfoundpage from "./404/NotFoundpage";
import Main from "./main/Main";


import Scrolltop from "./layouts/ScrollTop";
import Login from "./form/Login";
import Blog from "./blog/Blog";
import Payment from "./payment/Payment";
import AdminIndex from "./admin/AdminIndex";
import Adminmain from "./admin/adminComponents/adminMain/AdminMain";

import AdminCardsTop from "./admin/adminComponents/adminMain/adminCards top/AdminCardsTop";
import CardsTopAdd from "./admin/adminComponents/adminMain/adminCards top/CardsTopAdd";
import CardsTopList from "./admin/adminComponents/adminMain/adminCards top/CardsTopList";
import CardsTopEdit from "./admin/adminComponents/adminMain/adminCards top/CardsTopEdit";

import AdminCardsBottom from "./admin/adminComponents/adminMain/adminCardsBottom/AdminCardsBottom";
import CardsAddBottom from "./admin/adminComponents/adminMain/adminCardsBottom/CardsAddBottom";
import CardsListBottom from "./admin/adminComponents/adminMain/adminCardsBottom/CardsListBottom";
import Adminmainindex from "./admin/adminComponents/adminMain/AdminMainIndex";
import Adminoutlet from "./admin/AdminOutlet";

import Adminslider from "./admin/adminComponents/adminMain/adminSlider/AdminSlider";
import Slideradd from "./admin/adminComponents/adminMain/adminSlider/SliderAdd";
import Sliderlist from "./admin/adminComponents/adminMain/adminSlider/SliderList";
import SliderEdit from "./admin/adminComponents/adminMain/adminSlider/SliderEdit";

import AdminMenuNav from "./admin/adminComponents/AdminManuNav/AdminMenuNav";
import AdminNavAdd from "./admin/adminComponents/AdminManuNav/AdminNavAdd";
import AdminNavList from "./admin/adminComponents/AdminManuNav/AdminNavList";
import AdminNavEdit from "./admin/adminComponents/AdminManuNav/AdminNavEdit";

import Adminblog from "./admin/adminComponents/adminBlog/AdminBlog";
import AdminBlogTitle from "./admin/adminComponents/adminBlog/BlogTitle/AdminBlogTitle";
import BlogTitleAdd from "./admin/adminComponents/adminBlog/BlogTitle/BlogTitleAdd";
import BlogTitleList from "./admin/adminComponents/adminBlog/BlogTitle/BlogTitleList";
import BlogTitleEdit from "./admin/adminComponents/adminBlog/BlogTitle/BlogTitleEdit";
import AdminBlogCard from "./admin/adminComponents/adminBlog/BlogCard/AdminBlogCard";
import BlogCardAdd from "./admin/adminComponents/adminBlog/BlogCard/BlogCardAdd";
import BlogCardList from "./admin/adminComponents/adminBlog/BlogCard/BlogCardList";
import BlogCardEdit from "./admin/adminComponents/adminBlog/BlogCard/BlogCardEdit";

import Vacancy from './admin/adminComponents/adminMain/Vacancy/Vacancy'
import VacancyCard from './admin/adminComponents/adminMain/Vacancy/Card/VacancyCard'
import VacancyAdd from './admin/adminComponents/adminMain/Vacancy/Card/VacancyAdd'
import VacancyList from './admin/adminComponents/adminMain/Vacancy/Card/VacancyList'
import VacancyEdit from './admin/adminComponents/adminMain/Vacancy/Card/VacancyEdit'
import ShowComponent from "./admin/adminComponents/ShowComponent";
import { connect } from "react-redux";


function App(props) {
  console.log(props)
  
  return (
    <div className="App">
      <ToastContainer />
      <Scrolltop />
      <Routes>

        {/*  Admin routers  */}
        {props.role &&
          <Route path="/admin/*"  element={<Adminoutlet />}  >
            <Route index element={<AdminIndex />}  />
            <Route path="main"  element={<Adminmain  />}   >
              <Route index element={<Adminmainindex />}  />
              <Route path="cards-top" element={<AdminCardsTop />}  >
                <Route path="add" element={<CardsTopAdd />} />
                <Route path="list" element={<CardsTopList />} />
                <Route path="edit" element={<CardsTopEdit />} />
                <Route path="show" element={<ShowComponent path='/admin/main/cars-top/list' />} />
              </Route>
              <Route path="cards-bottom" element={<AdminCardsBottom />}  >
                <Route path="add" element={<CardsAddBottom />} />
                <Route path="list" element={<CardsListBottom />} />
              </Route>
              <Route path="sliderTop" element={<Adminslider/>}  >
                <Route path="add" element={<Slideradd />} />
                <Route path="list" element={<Sliderlist />} />
                <Route path="edit" element={<SliderEdit />} />
                <Route path="show" element={<ShowComponent path='/admin/main/sliderTop/list' />} />
              </Route>
              <Route path="banks" element={<Adminslider/>}  >
                <Route path="add" element={<Slideradd />} />
                <Route path="list" element={<Sliderlist />} />
                <Route path="show" element={<ShowComponent path='/admin/main/banks/list' />} />
              </Route>            
            </Route>
            <Route path="navbar" element={<AdminMenuNav/>}  >
              <Route path="add" element={<AdminNavAdd />} />
              <Route path="list" element={<AdminNavList />} />
              <Route path="edit" element={<AdminNavEdit />} />
              <Route path="show" element={<ShowComponent path='/admin/navbar/list' />} />
            </Route>
            <Route path="blog" element={<Adminblog />}  >
              <Route index element={<Adminblog />}  />
              <Route path="title" element={<AdminBlogTitle/>}  >
                <Route path="add" element={<BlogTitleAdd />} />
                <Route path="list" element={<BlogTitleList />} />
                <Route path="edit" element={<BlogTitleEdit />} />
                <Route path="show" element={<ShowComponent path='/admin/blog/title/list' />} />
              </Route>
              <Route path="card" element={<AdminBlogCard/>}  >
                <Route path="add" element={<BlogCardAdd />} />
                <Route path="list" element={<BlogCardList />} />
                <Route path="edit" element={<BlogCardEdit />} />
                <Route path="show" element={<ShowComponent path='/admin/blog/card/list' />} />
              </Route>
            </Route>
            <Route path="vacancy" element={<Vacancy />}  >
              <Route index element={<Vacancy />}  />
              <Route path="card" element={<VacancyCard/>}  >
                <Route path="add" element={<VacancyAdd />} />
                <Route path="list" element={<VacancyList />} />
                <Route path="edit" element={<VacancyEdit />} />
                <Route path="show" element={<ShowComponent path='/admin/vacancy/card/list' />} />
              </Route>
            </Route>

          </Route>
        }




        {/*   Form routers  */}
        <Route path="/admin" element={<Navigate to="/login"  />} />
        <Route path="/login" element={<Login />} />

          
          
          {/* Index routers  */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/paymet" element={<Payment />} />
          <Route path="/vokansi" element={<Vokansi />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>



      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    user : state.admin,
    role: state.adminAuth
  }
}

export default connect(mapStateToProps, {})(App);
