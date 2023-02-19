import React from "react";
import Container from "../../../components/Container/Container";
import styles from './Login.module.scss'
import CInput from "../../../components/FormInputs/CInput";
import MainButton from "../../../components/MainButton/Button";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  const [state, setState] = React.useState({
    username: "",
    password: ""
  })

  const headers = new Headers()
  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  headers.append('Access-Control-Allow-Credentials', 'true');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("eventtt", e)
    fetch('http://localhost:6002/www/login.php', {
      mode: 'cors',
      credentials: 'include',
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      username: state.username,
      password: state.password
    }) 
  })
    .then(response => response.json())
    .then(data => {
      navigate('/')
    }).catch((err) => console.log("Err happended", err));
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
              <div className={styles.login__text}><p>Sigin</p></div>
                <form onSubmit={onSubmit} style={{width: '100%'}}>
                          <div className={styles.login__inputs}>
                            <CInput withBorder
                              labelText="Username"
                              size="medium"
                              fullWidth
                              placeholder='username'
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
                              placeholder='password'
                        type="password"
                        name="password"
                        value={state.password}
                        onChange={handleChangeField}
                      />
                      <MainButton
                        text="Submit"
                        type="submit"
                      />
                          </div>
                </form>
            <div className={styles.registerText}>Don't have an account? <a href="/auth/registration">Registration</a></div>
            </div>
        </div>
  </Container>;
}

export default Login;
