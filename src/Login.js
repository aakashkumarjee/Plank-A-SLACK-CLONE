import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login-container">
        <img
          src="https://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Pepsi-Logo-PNG-Transparent.png"
          alt=""
        />
        <h1>Sign In to Planck</h1>
        <p>by Inquisitive Coder</p>
        <Button onClick={signIn}> Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
