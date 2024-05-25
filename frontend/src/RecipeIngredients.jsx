import PropTypes from "prop-types";

const RecipeIngredients = ({ ingredients }) => (
  <>
    {ingredients.map((ingredient) => (
      <li key={ingredient.id}>
        {ingredient.quantity} {ingredient.unit} {ingredient.name}
      </li>
    ))}
  </>
);

RecipeIngredients.propTypes = {
  ingredients: PropTypes.array,
};

export default RecipeIngredients;
