import { Link } from "react-router-dom";

<div key={recipe.id}>
  <h3>
    <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
  </h3>
  <p>{recipe.description}</p>
</div>
