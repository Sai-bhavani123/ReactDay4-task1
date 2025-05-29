import React, { useEffect, useState } from 'react';
import './Data.css'; // Import external CSS

function Data() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching recipes:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading-text">Loading...</p>;

  return (
    <div className="container">
      <h1 className="title">Recipe Cards</h1>
      <div className="card-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="card">
            <img src={recipe.image} alt={recipe.name} className="card-image"/>
            <div className="card-content">
              <h2 className="card-title">{recipe.name}</h2>
              <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
              <p><strong>Meal Type:</strong> {recipe.mealType.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Data;
