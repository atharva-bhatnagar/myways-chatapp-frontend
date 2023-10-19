import React from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


const Login = ({ setLogin, setUser }) => {

    const nav=useNavigate()

    const login = async (e) => {
      e.preventDefault();
      const email = document.getElementById("email");
      const password = document.getElementById("password");
  
      let userRes = null;
      await axios
        .get("http://localhost:4000/user", {
          params: { email: email.value },
        })
        .then((res) => {
          console.log(res.data);
          userRes = res.data;
        });
      if (userRes.password === password.value) {
        setLogin(true);
        setUser(userRes);
        alert("SUCCESSFULLY LOGGED IN !!!");
        nav("/");
      } else {
        alert("WRONG email or password!!!");
      }
    };

  return (
    <div>
      <div className="form-container">
        <form className="form" onSubmit={login}>
          <h1>Login</h1>
          <div className="form-seg">
            <label>Email : </label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form-seg">
            <label>Password : </label>
            <input type="password" name="password" id="password" />
          </div>
          <p>
            Don't Have an account? Go to the{" "}
            <em
              className="link"
              onClick={() => {
                nav("/register");
              }}
            >
              Register
            </em>{" "}
            page.
          </p>
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login