import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    else if (ingredients.split("\n").length < 2)
      newErrors.ingredients = "Please enter at least 2 ingredients";
    if (!instructions.trim())
      newErrors.instructions = "Preparation steps are required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("Recipe submitted successfully!");
      // Here you can handle the actual submission (e.g., post to API or local state)
      setTitle("");
      setIngredients("");
      setInstructions("");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h2>

      {success && (
        <div className="mb-4 text-green-600 font-medium">{success}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="title">
            Recipe Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="ingredients">
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="instructions">
            Preparation Steps (one per line)
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.instructions && (
            <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
