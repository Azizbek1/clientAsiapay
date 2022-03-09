import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";

import { Link} from "react-router-dom";
import "./form.scss";

import {admin} from '../../actions'
import {connect} from 'react-redux' 
import { useNavigate } from "react-router-dom";


const Login = (props) => {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const formChange = (e) => {
        e.preventDefault()
    }
    useEffect(() => {
        admin()
    })

    const admin = async () => {
        await props.role.user && props.role.user.role === 1 && navigate('/admin')
        await props.role.user && props.role.user.role === 0 && navigate('/')
                
    }
    console.log(props)
    const login = async (name, password) => {
            await props.admin(name, password)
    //     try {
    //         const config = {
    //             headers: {
    //                 "Content-type": "application/json", 
    //             },
    //         };
    //         const response = await axios.post(`${API_URL}/api/login`, {
    //             name, password
    //         }, config)
    //         console.log(response);
    //         localStorage.setItem("token", response.data);
    //         // window.location.href = '/admin'
            
    //     } catch (error) {
    //         if (error.response && error.response.status >= 400 && error.response.status <= 500) {
    //             setError(error.response.data.message);
    //         }
    //     }
    }

   
    return (
        <div className="d-flex justify-content-center form__main">
            <div className="col-md-3 mt-5">
                <h1 className="text-center">Login</h1>
                <form className="form__login" onSubmit={formChange}>
                    <MDBInput
                        className="mb-4 form__input"
                        type="text"
                        id="form1Example1"
                        label="Name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <MDBInput
                        className="mb-4 form__input"
                        type="password"
                        id="form1Example2"
                        label="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <div className="col-12 d-flex">
                    <MDBBtn className="form__btn"  onClick={() => login(name, password)} type="submit" block>
                        Войти
                    </MDBBtn>
                    <Link to="/">
                        <button type="button" className="btn btn-danger">
                            На главную
                        </button>
                    </Link>

                    </div>
                </form>
                {/* <div className="col-2 button-click">
                    <Link to="/register">
                        <button type="button" className="btn btn-success">
                            Регистрация
                        </button>
                    </Link>
                </div> */}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        role: state.admin,
        token: state.token,
    }
}

export default connect(mapStateToProps, {admin})(Login);
