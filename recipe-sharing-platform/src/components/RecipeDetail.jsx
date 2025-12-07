import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Load data from data.json
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((r) => r.id === parseInt(id));
        setRecipe(found);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!recipe) {
    return (
      <div className="p-6 text-center text-gray-700">Loading recipe...</div>
    );
  }

  return (
    <div className="px-6 py-10 max-w-3xl mx-auto">
      {/* Back link */}
      <Link
        to="/"
        className="text-blue-600 font-medium mb-6 inline-block hover:underline"
      >
        ← Back to Home
      </Link>

      {/* Recipe card container */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        {/* Recipe image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

          {/* Summary */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Summary</h2>
            <p className="text-gray-700">{recipe.summary}</p>
          </section>

          {/* Ingredients */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-700">
              {recipe.ingredients && recipe.ingredients.length > 0 ? (
                recipe.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              ) : (
                <li>Ingredient details not available</li>
              )}
            </ul>
          </section>

          {/* Instructions */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal list-inside text-gray-700">
              {recipe.instructions && recipe.instructions.length > 0 ? (
                recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))
              ) : (
                <li>Cooking steps not available</li>
              )}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
