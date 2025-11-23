import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('Delete this recipe?')) {
      deleteRecipe(id);
      navigate('/'); // go back to list
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteRecipeButton;
