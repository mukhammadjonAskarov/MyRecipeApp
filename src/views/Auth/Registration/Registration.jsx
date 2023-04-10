import React from "react";
import Container from "../../../components/Container/Container";
import styles from '../Login/Login.module.scss'
import CInput from "../../../components/FormInputs/CInput";
import MainButton from "../../../components/MainButton/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Registration() {
  const navigate = useNavigate()
  const [state, setState] = React.useState({
    name: "",
    username: "",
    email: "",
    password: "",
    password2: ""
  })

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("eventtt", e)
    axios
      .post(`http://localhost:3000/api/register`, {
        username: state.username,
        password: state.password,
        confirm_password: state.password2,
        email: state.email
      })
      .then(function (response) {
        console.log(response);
        if (response.data.status === 200) 
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
        navigate("/");
      });
  }

   const handleChangeField = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return <Container>
        <div className={styles.login}>
            <div className={styles.login__box}>
              <div className={styles.login__text}><p>Sign Up</p></div>
                <form onSubmit={onSubmit} style={{width: '100%'}}>
                          <div className={styles.login__inputs}>
                            <CInput withBorder
                              labelText="Username"
                              size="medium"
                              fullWidth
                              placeholder='Name'
                              type="text"
                              name="name"
                              value={state.name}
                              onChange={handleChangeField}
                            />
                            <CInput withBorder
                              labelText="Username"
                              size="medium"
                              fullWidth
                              placeholder='Username'
                              type="text"
                              name="username"
                              value={state.username}
                              onChange={handleChangeField}
                            />
                            <CInput withBorder
                              labelText="Username"
                              size="medium"
                              fullWidth
                              placeholder='Email'
                              type="mail"
                              name="email"
                              value={state.email}
                              onChange={handleChangeField}
                            />
                            <CInput
                              withBorder
                              labelText="Username"
                              size="medium"
                              fullWidth
                              placeholder='password'
                              type="password"
                              name="password"
                              value={state.password}
                              onChange={handleChangeField}
                                />
                            <CInput
                              withBorder
                              labelText="Username"
                              size="medium"
                              fullWidth
                              placeholder='Repeat password'
                              type="password"
                              name="password2"
                              value={state.password2}
                              onChange={handleChangeField}
                                />
                      <MainButton
                        text="Submit"
                        type="submit"
                      />
                          </div>
                </form>
            <div className={styles.registerText}>Already have an account? <a href="/auth/login">Registration</a></div>
            </div>
        </div>
  </Container>;
}

export default Registration;
