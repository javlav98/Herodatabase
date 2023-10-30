import React, { useState } from 'react';
import axios from 'axios';
import './Superherosearch.css';

function SuperheroSearch() {
  const [superheroName, setSuperheroName] = useState('');
  const [superheroes, setSuperheroes] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      setError(null); // Clear any previous errors
      const response = await axios.get(`http://localhost:3000/search/name?name=${superheroName}`);
      setSuperheroes(response.data);
    } catch (error) {
      setError('An error occurred while searching for superheroes');
      console.error('An error occurred while searching for superheroes', error);
    }
  };

  return (
    <div>
      <h1>Superhero Search</h1>
      <input
        type="text"
        placeholder="Enter a superhero name"
        value={superheroName}
        onChange={(e) => setSuperheroName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
      <div>
        {superheroes.map((superhero) => (
          <div className="superhero-card" key={superhero.id}>
            <h2>{superhero.name}</h2>
            <img src={superhero.image.url} alt={superhero.name} />
            <p>Full name: {superhero.biography['full-name']}</p>
            <p>Alter egos: {superhero.biography['alter-egos']}</p>
            <p>Aliases: {superhero.biography.aliases.join(', ')}</p>
            <p>Place of birth: {superhero.biography['place-of-birth']}</p>
            <p>First appearance: {superhero.biography['first-appearance']}</p>
            <p>Publisher: {superhero.biography.publisher}</p>
            <p>Alignment: {superhero.biography.alignment}</p>
            <p>Intelligence: {superhero.powerstats.intelligence}</p>
            <p>Strength: {superhero.powerstats.strength}</p>
            <p>Speed: {superhero.powerstats.speed}</p>
            <p>Durability: {superhero.powerstats.durability}</p>
            <p>Power: {superhero.powerstats.power}</p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default SuperheroSearch;
