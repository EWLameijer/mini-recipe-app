import { useState } from "react";
import PropTypes from "prop-types";

const AddIngredient = ({ addToList }) => {
  const [newName, setNewName] = useState("");

  const updateName = (event) => {
    setNewName(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    addToList(newName);
    setNewName("");
  };

  return (
    <>
      <form onSubmit={submit}>
        <input value={newName} onChange={updateName} />
        <button>Add ingredient</button>
      </form>
    </>
  );
};

export default AddIngredient;

AddIngredient.propTypes = {
  addToList: PropTypes.func,
};
