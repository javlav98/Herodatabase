import React from 'react';
import { Link } from 'react-router-dom';

function SuperheroResults({ superheroes }) {
  // Check if superheroes is undefined or empty
  if (!superheroes || superheroes.length === 0) {
    return (
      <div>
        <h1>Search Results</h1>
        <Link to="/">Back to Search</Link>
        <p>No superheroes found.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Search Results</h1>
      <Link to="/">Back to Search</Link>
      {superheroes.map((superhero) => (
        <div key={superhero.id}>
          <h2>{superhero.name}</h2>
          <img src={superhero.image.url} alt={superhero.name} />
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
}

export default SuperheroResults;
