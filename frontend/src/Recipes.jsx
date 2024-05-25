import { useEffect, useState } from "react";
import axios from "axios";
import AddRecipe from "./AddRecipe.jsx";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios("http://localhost:8080/api/v1/recipes").then((result) => {
      console.log(result.data);
      setRecipes(result.data);
    });
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
          <li key={recipe.id}>
            <a href={`http://localhost:5173/recipes/${recipe.id}`}>
              {recipe.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Recipes;
