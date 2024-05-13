import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MovieList from './components/MovieList/MovieList';
import Fire from './assets/fire.png';
import Star from './assets/glowing-star.png';
import Party from './assets/partying-face.png';

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <MovieList type="popular" title="Popular" emoji={Fire} />
        <MovieList type="top_rated" title="Top Rated" emoji={Fire} />
        <MovieList type="upcoming" title="Upcoming" emoji={Fire} />
      </main>
    </div>
  );
}

export default App;
