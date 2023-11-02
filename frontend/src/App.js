import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SuperheroSearch from './components/SuperheroSearch';
import SuperheroResults from './components/SuperheroResults';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SuperheroSearch />} />
        <Route path="results" element={<SuperheroResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
