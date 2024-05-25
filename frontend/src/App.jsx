import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    axios("http://localhost:8080/api/v1/recipes").then((result) =>
      setRecipes(result.data)
    );
  }, []);

  const submit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/v1/recipes", { title: newTitle })
      .then((result) => {
        setRecipes([...recipes, result.data]);
        setNewTitle("");
      });
  };

  const updateTitle = (event) => {
    setNewTitle(event.target.value);
  };

  return (
    <>
      <h1>Mini-recipe-app</h1>
      <form onSubmit={submit}>
        <input value={newTitle} onChange={updateTitle} />
        <button>Add recipe</button>
      </form>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
