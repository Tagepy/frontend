import { useEffect } from "react";
import CreatePorductForm from "../Components/CreatePorductForm";

const CreatePostPage = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage("/create");
  }, []);

  return (
    <div className="d-flex j-center">
      <CreatePorductForm />
    </div>
  );
};

export default CreatePostPage;
