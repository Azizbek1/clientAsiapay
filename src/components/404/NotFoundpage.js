import React from 'react';
import Not_404 from "../../images/404.png";
import "./NotFoundpage.scss";
const Notfoundpage = () => {
    return (
        <div className="NotFoundpage">
             <div className="NotFoundpage__flex">
                 <div className="NotFoundpage__col NotFoundpage__col-4">
                     <h2>404 PAGE NOT FOUND</h2>
                     <p>Check that you typed the address correctly, go back to your previous page or try using our site search to find something specific.</p>
                 </div>
                 <div className="NotFoundpage__col">
                     <div className="NotFoundpage__img">
                         <img src={Not_404} alt="png" />
                     </div>
                 </div>
             </div>
        </div>
    );
}

export default Notfoundpage;
