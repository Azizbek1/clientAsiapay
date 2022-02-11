import { Route, Routes, Navigate } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.scss";
import About from "./about/About";
import Layout from "./Layout";
import Contact from "./contact/Contact";
import Vokansi from "./vokanse/Vokansi";
import Notfoundpage from "./404/NotFoundpage";
import Main from "./main/Main";
import Scrolltop from "./layouts/ScrollTop";
// import Header from "./layouts/Header";
// import Footer from "./layouts/Footer";
import Login from "./form/Login";
import AdminIndex from "./admin/AdminIndex";
// import Register from "./form/Register";

function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
        <Scrolltop/>
        <Routes>
           {user && <Route path="/admin" exact element={<AdminIndex />} />}
          <Route path="/login" exact element={<Login />} />
          <Route path="/admin" element={<Navigate replace to="/login" />} />
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/vokansi" element={<Vokansi />} />
            <Route path="*" element={<Notfoundpage />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
