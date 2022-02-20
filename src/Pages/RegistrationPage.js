import { useEffect } from "react";
import RegisterUser from "../Components/RegisterUser";

const RegistrationPage = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("/register");
  }, []);

  return (
    <div className="d-flex j-center">
      <RegisterUser />
    </div>
  );
};

export default RegistrationPage;
