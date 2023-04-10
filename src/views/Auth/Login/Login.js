import React from "react";
import Container from "../../../components/Container/Container";
import styles from "./Login.module.scss";
import CInput from "../../../components/FormInputs/CInput";
import MainButton from "../../../components/MainButton/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    username: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("eventtt", e);
    axios
      .post(`http://localhost:3000/api/login`, {
        username: state.username,
        password: state.password,
      })
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        navigate("/");
      })

      .catch(function (error) {
        console.log(error);
        navigate("/");
      });
  };

  const handleChangeField = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Container>
      <div className={styles.login}>
        <div className={styles.login__box}>
          <div className={styles.login__text}>
            <p>Sigin</p>
          </div>
          <form onSubmit={onSubmit} style={{ width: "100%" }}>
            <div className={styles.login__inputs}>
              <CInput
                withBorder
                labelText="Username"
                size="medium"
                fullWidth
                placeholder="username"
                type="text"
                name="username"
                value={state.username}
                onChange={handleChangeField}
              />
              <CInput
                withBorder
                labelText="Username"
                size="medium"
                fullWidth
                placeholder="password"
                type="password"
                name="password"
                value={state.password}
                onChange={handleChangeField}
              />
              <MainButton text="Submit" type="submit" />
            </div>
          </form>
          <div className={styles.registerText}>
            Don't have an account? <a href="/auth/registration">Registration</a>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Login;
