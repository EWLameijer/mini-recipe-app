import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios("http://localhost:8080/api/v1/recipes").then((result) =>
      setRecipes(result.data)
    );
  }, []);

  const createNewRecipe = () => {
    navigate(`/create-recipe`);
  };

  return (
    <>
      <h1>Mini-recipe-app</h1>
      <button onClick={createNewRecipe}>Create Recipe</button>
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
