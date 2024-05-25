import Recipes from "./Recipes.jsx";
import Ingredients from "./Ingredients.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Recipes />} />
      <Route path="/ingredients" element={<Ingredients />} />
    </Routes>
  </Router>
);

export default App;
