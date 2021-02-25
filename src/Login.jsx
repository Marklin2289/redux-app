import React from "react";
import { useStateValue } from "./StateProvider";

const Login = () => {
  const [state, dispatch] = useStateValue();

  const loginToApp = () => {
    // login to app
    dispatch({
      type: "SET_USER",
      user: "Mark Lin",
    });
  };
  return (
    <div>
      <h1>I am login component</h1>
      <button onClick={loginToApp}>login</button>
    </div>
  );
};

export default Login;
