import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import {API_URL} from "../../config";
const Register = () => {
	const [data, setData] = useState({
		name: "",
		password: "",
	});
    // const [success, setSuccess] =  useState("")
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = `${API_URL}/api/register`;
			const { data: res } = await axios.post(url, data);
            if(res) {
                // setSuccess(res.message);
                navigate("/login");
            }
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Войти в логин</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Войти
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Создать новый акаунт</h1>
						
						<input
							type="Name"
							placeholder="имя"
							name="name"
							onChange={handleChange}
							value={data.name}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="пароль"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						{/* {success && <div className={styles.success_msg}>{success}</div>} */}
						<button type="submit" className={styles.green_btn}>
							создать
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;