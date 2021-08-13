import React from "react";
import SignIn from "../../sing-in/sign-in.component";
import "./sign-in-and-sign-up.styles.scss";
import SignUp from "../../sing-up/sing-up.component";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
