import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios("http://localhost:8080/api/v1/recipes").then((result) =>
      setRecipes(result.data)
    );
  }, []);
  return (
    <>
      <h1>Mini-recipe-app</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
