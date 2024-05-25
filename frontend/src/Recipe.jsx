import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    axios(`http://localhost:8080/api/v1/recipes/${id}`).then((result) => {
      console.log(result.data);
      setRecipe(result.data);
    });
  }, []);

  return <>{recipe && <h1>{recipe.title}</h1>}</>;
};

export default Recipe;
