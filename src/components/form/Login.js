import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import React, { useState } from "react";
import {API_URL} from "../../config";
import axios from 'axios';
import { Link } from "react-router-dom";
import "./form.scss";
const Login = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const formChange = (e) => {
        e.preventDefault()
    }


    const login = async (name, password) => {
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const response = await axios.post(`${API_URL}/api/login`, {
                name, password
            }, config)
            localStorage.setItem("token", response.data);
            window.location = "/admin";
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }
        }
    }

    return (
        <div className="d-flex justify-content-center form__main">
            <div className="col-md-3 mt-5">
                <h1 className="text-center">Login</h1>
                {error && <div className="alert alert-danger">{error}</div>}
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
                    <div className="col-2">
                    <MDBBtn className="form__btn "  onClick={() => login(name, password)} type="submit" block>
                        Войти
                    </MDBBtn>
                    </div>
                </form>
                <div className="col-2 button-click">
                    <Link to="/register">
                        <button type="button" className="btn btn-success">
                            Регистрация
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
