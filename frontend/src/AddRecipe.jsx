import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddRecipe = () => {
  const [newTitle, setNewTitle] = useState("");
  const navigate = useNavigate();

  const updateTitle = (event) => {
    setNewTitle(event.target.value);
  };

  const addToList = (title) => {
    axios.post("http://localhost:8080/api/v1/recipes", { title }).then(() => {
      navigate("/");
    });
  };

  const submit = (event) => {
    event.preventDefault();
    addToList(newTitle);
    setNewTitle("");
  };

  return (
    <>
      <form onSubmit={submit}>
        <input value={newTitle} onChange={updateTitle} />
        <button>Add recipe</button>
      </form>
    </>
  );
};

export default AddRecipe;

AddRecipe.propTypes = {
  addToList: PropTypes.func,
};
