import React, { useState, useEffect } from 'react';
import PhotoCard from './components/PhotoCard';
import './app.scss';

function App() {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => setPhotos(data.slice(0, 10)))
        .catch(err => console.error(err));
  }, []);



  const filtered = photos.filter(photo =>
      photo.title.toLowerCase().includes(search.toLowerCase())
  );


  return (
      <div className="App">
        <h1>Atrax Test</h1>
        <input
            type="text"
            placeholder="Search..."

            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <div className="photo-grid">
          {filtered.map(photo => (
              <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
  );
}export default App;
