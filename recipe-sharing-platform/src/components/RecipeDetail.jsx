import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
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
      <Link
        to="/"
        className="text-blue-600 font-medium mb-4 inline-block hover:underline"
      >
        ← Back to Home
      </Link>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Summary</h2>
        <p className="text-gray-700">{recipe.summary}</p>
      </section>

      {/* Example ingredients & instructions */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-700">
          <li>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
        </ol>
      </section>
    </div>
  );
};

export default RecipeDetail;
