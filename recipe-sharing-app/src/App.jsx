import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import useRecipeStore from './components/recipeStore';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';


function App() {
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  return (
    <div className="App">
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <SearchBar />
      <RecipeList />
      <FavoritesList />
      <button onClick={generateRecommendations}>Generate Recommendations</button>
      <RecommendationsList />
    </div>
  );
}
