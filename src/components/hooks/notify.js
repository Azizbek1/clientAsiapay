/* eslint-disable no-mixed-operators */
import React from 'react'
import { toast } from 'react-toastify';

const notify = (props) => {
  console.log(props);
  let res = props.res
  console.log(res);

//   if(status && status >= 200 ){
//     return toast.success(msg, {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         });
// }else if(400> status > 200 ){
//   return toast.warn(msg, {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         });
// }else if( 400 >=  status <= 500  ) {
//   return toast.error(msg, {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         });
// }else{
//   return toast.error("Ошибка!!!", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         });

// }
}

export default notify