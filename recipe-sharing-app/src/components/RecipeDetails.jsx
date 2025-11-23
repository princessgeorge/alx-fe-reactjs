import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <h3>Edit</h3>
      <EditRecipeForm recipe={recipe} />

      <DeleteRecipeButton id={id} />

      <div>
        <Link to="/">Back to list</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
