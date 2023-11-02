const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());

// Search for a superhero by name
app.get('/search/name', async (req, res) => {
  try {
    const apiKey = process.env.SUPERHERO_API_KEY;
    const superheroName = req.query.name;

    if (!superheroName) {
      return res.status(400).json({ error: 'Please provide a superhero name for the search' });
    }

    const response = await axios.get(`https://superheroapi.com/api/${apiKey}/search/${superheroName}`);
    const superheroes = response.data.results;

    res.json(superheroes);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Get superhero information by ID
// Get superhero information by ID
app.get('/id/:id', async (req, res) => {
  try {
    const apiKey = process.env.SUPERHERO_API_KEY;
    const superheroId = req.params.id;

    const response = await axios.get(`https://superheroapi.com/api/${apiKey}/${superheroId}`);
    const superhero = response.data;

    res.json(superhero);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});


// Add more routes for /powerstats, /biography, /appearance, /work, /connections, /image as needed

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
