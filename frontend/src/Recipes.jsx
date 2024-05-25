import { useEffect, useState } from "react";
import axios from "axios";
import AddRecipe from "./AddRecipe.jsx";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios("http://localhost:8080/api/v1/recipes").then((result) =>
      setRecipes(result.data)
    );
  }, []);

  const submit = (title) => {
    axios
      .post("http://localhost:8080/api/v1/recipes", { title })
      .then((result) => {
        setRecipes([...recipes, result.data]);
      });
  };

  return (
    <>
      <h1>Mini-recipe-app</h1>
      <AddRecipe addToList={submit} />
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Recipes;
