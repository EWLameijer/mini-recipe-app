import PropTypes from "prop-types";
import { useState } from "react";

const AddRecipeIngredient = ({
  addToIngredients,
  availableIngredients,
  availableUnits,
}) => {
  const [recipeIngredient, setRecipeIngredient] = useState({
    id: availableIngredients[0].id,
    unit: availableUnits[0],
    quantity: 0,
  });

  const submit = () => {
    const name = availableIngredients.find(
      (ingredient) => ingredient.id === recipeIngredient.id
    ).name;
    addToIngredients({ ...recipeIngredient, name });
  };

  const update = (event) => {
    const { name, value: valueAsString } = event.target;
    const value = name === "id" ? parseInt(valueAsString) : valueAsString;
    const target = { ...recipeIngredient, [name]: value };
    setRecipeIngredient(target);
  };

  return (
    <>
      <select value={recipeIngredient.id} name="id" onChange={update}>
        {availableIngredients.map((ing) => (
          <option key={ing.id} value={ing.id}>
            {ing.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="quantity"
        value={recipeIngredient.quantity}
        name="quantity"
        onChange={update}
      />
      <select value={recipeIngredient.unit} onChange={update} name="unit">
        {availableUnits.map((unit) => (
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))}
      </select>
      <input type="button" value="Add Ingredient" onClick={submit} />
    </>
  );
};

export default AddRecipeIngredient;

AddRecipeIngredient.propTypes = {
  addToIngredients: PropTypes.func,
  availableIngredients: PropTypes.array,
  availableUnits: PropTypes.array,
};
