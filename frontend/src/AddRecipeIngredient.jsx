import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const AddRecipeIngredient = ({
  addToIngredients,
  availableIngredients,
  availableUnits,
}) => {
  const [ingredient, setIngredient] = useState(availableIngredients[0]);
  const [unit, setUnit] = useState(availableUnits[0]);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setIngredient(availableIngredients[0]);
    console.log("setting", availableIngredients[0]);
  }, [availableIngredients]); // [] sets once, but that is not enough

  // const updateName = (event) => {
  //   setNewName(event.target.value);
  // };

  const submit = () => {
    console.log("ingredient:", ingredient);
    console.table(ingredient);
    console.log("unit:", unit);
    console.log("quanti:", quantity);
    addToIngredients({
      name: ingredient.name,
      id: ingredient.id,
      unit,
      quantity,
    });
    setIngredient(availableIngredients[0]);
  };

  const updateIngredient = (event) => {
    const targetId = event.target.value;
    const newIngredient = availableIngredients.find(
      (elem) => elem.id == targetId
    );
    setIngredient(newIngredient);
  };

  const updateUnit = (event) => {
    setUnit(event.target.value);
  };

  console.log("avin", availableIngredients);
  //console.log("in", ingredient);
  // setIngredient(availableIngredients[0]);
  // console.log("in2", ingredient);

  // hmmm... what if the value cannot be an object?

  return (
    <>
      <select value={ingredient.id} onChange={updateIngredient}>
        {availableIngredients.map((ing) => (
          <option key={ing.id} value={ing.id}>
            {ing.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="quantity"
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
      />
      <select value={unit.name} onChange={updateUnit}>
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
