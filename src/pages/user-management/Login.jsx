import React, { useState } from "react";
import Header from "../../components/common/Header";
import { useNavigate } from "react-router-dom";


function Login({ navigation }) {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [isAuth, setAuth] = useState(false);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const handleSubmitClick = (event) => {
    event.preventDefault();
    if (state.email && state.password) {
      // const loginRequest = {
      //     "email": "jonsnow@westeros.com",
      //     "password": "G@me0fthr0ne5"
      // }
      const loginRequest = {
        email: state.email,
        password: state.password,
      };
      fetch("https://tutorial4-api.herokuapp.com/api/users/login", {
        method: "POST",
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(loginRequest),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log("isAuth", isAuth);
          if (data) {
            if (data.status === true) {
              console.log("routing");
              setAuth((isAuth) => ({ isAuth: data.status }));
              console.log(isAuth);
              navigate("/userlist");
            }
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-center card col-12 col-lg-4 col-md-offset-4">
          <form className="d-flex justify-content-center flex-column p-6 ">
            <div className="form-group text-left">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={state.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group text-left">
              <label
                htmlFor="exampleInputPassword1"
                style={{ marginTop: "1em" }}
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Password"
                value={state.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group text-center">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginTop: "2em" }}
                onClick={handleSubmitClick}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
