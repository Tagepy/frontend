import React, { useEffect } from "react";
import LoginUser from "../Components/LoginUser";

const LoginPage = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("/login");
  }, []);

  return (
    <div className="d-flex j-center">
      <LoginUser />
    </div>
  );
};

export default LoginPage;
