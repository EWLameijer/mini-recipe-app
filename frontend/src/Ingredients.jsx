import { useEffect, useState } from "react";
import axios from "axios";
import AddIngredient from "./AddIngredient";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    axios("http://localhost:8080/api/v1/ingredients").then((result) =>
      setIngredients(result.data)
    );
  }, []);

  const submit = (name) => {
    axios
      .post("http://localhost:8080/api/v1/ingredients", { name })
      .then((result) => {
        setIngredients([...ingredients, result.data]);
      });
  };

  return (
    <>
      <h1>Ingredients</h1>
      <AddIngredient addToList={submit} />
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Ingredients;
