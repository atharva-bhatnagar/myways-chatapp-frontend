import React from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const nav=useNavigate()

    const register = async (e) => {
      e.preventDefault();
      const email = document.getElementById("email");
      const name = document.getElementById("username");
      const password = document.getElementById("password");
  
      try {
        await axios
          .post("http://localhost:4000/user", {
            name: name.value,
            email: email.value,
            password: password.value,
            todos:[]
          })
          .then((res) => {
            console.log(res);
            alert("User added successfully");
            nav("/login");
          });
      } catch (err) {
        console.log(err);
      }
    };
  return (
    <div>
      <div className="form-container">
        <form className="form" onSubmit={register}>
          <h1>Register</h1>
          <div className="form-seg">
            <label>Email : </label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form-seg">
            <label>Username : </label>
            <input type="text" name="username" id="username" />
          </div>
          
          <div className="form-seg">
            <label>Password : </label>
            <input type="password" name="password" id="password" />
          </div>
          <p>
            Already Have an account? Go to the{" "}
            <em
              className="link"
              onClick={() => {
                nav("/login");
              }}
            >
              login
            </em>{" "}
            page.
          </p>
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register