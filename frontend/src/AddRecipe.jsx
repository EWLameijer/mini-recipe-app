import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RecipeIngredients from "./RecipeIngredients";
import AddRecipeIngredient from "./AddRecipeIngredient";

const AddRecipe = () => {
  const [newTitle, setNewTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [availableIngredients, setAvailableIngredients] = useState([]);
  const [availableUnits, setAvailableUnits] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios("http://localhost:8080/api/v1/ingredients").then((result) =>
      setAvailableIngredients(result.data)
    );
    axios("http://localhost:8080/api/v1/units").then((result) =>
      setAvailableUnits(result.data)
    );
  }, []);

  const updateTitle = (event) => {
    setNewTitle(event.target.value);
  };

  const addToList = () => {
    axios
      .post("http://localhost:8080/api/v1/recipes", {
        title: newTitle,
        ingredients,
      })
      .then(() => {
        navigate("/");
      });
  };

  const addToIngredients = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
    console.log([...ingredients, ingredient]);
  };

  const submit = (event) => {
    event.preventDefault();
    addToList();
    setNewTitle("");
    setIngredients([]);
  };

  return (
    availableIngredients.length * availableUnits.length && (
      <>
        <form onSubmit={submit}>
          <input value={newTitle} onChange={updateTitle} />
          <ol>
            <RecipeIngredients ingredients={ingredients} />
          </ol>
          <AddRecipeIngredient
            availableUnits={availableUnits}
            availableIngredients={availableIngredients}
            addToIngredients={addToIngredients}
          />
          <button
            style={{ display: "block" }}
            disabled={!newTitle.trim()}
            onClick={submit}
          >
            Add recipe
          </button>
        </form>
      </>
    )
  );
};

export default AddRecipe;

AddRecipe.propTypes = {
  addToList: PropTypes.func,
};
