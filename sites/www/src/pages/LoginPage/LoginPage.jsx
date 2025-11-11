import React from "react";
import PageLogin from "../../components/Login/PageLogin";

const LoginPage = ({ onLogin }) => {
  return (
    <>
      <PageLogin onLogin={onLogin} />
    </>
  );
};

export default LoginPage;
