import { useState } from "react";
import PropTypes from "prop-types";

const AddRecipe = ({ addToList }) => {
  const [newTitle, setNewTitle] = useState("");

  const updateTitle = (event) => {
    setNewTitle(event.target.value);
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
