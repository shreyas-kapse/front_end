import React, { useState } from 'react';
import '../addmovie.css';
export default function Addmovie() {
  const [movieName, setMovieName] = useState('');
  const [watched, setWatched] = useState(false);
  const [file, setFile] = useState(null);

  const handleMovieNameChange = (event) => {
    setMovieName(event.target.value);
  };

  const handleWatchedToggle = () => {
    setWatched(!watched);
  };

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = () => {
    
    console.log('Movie Name:', movieName);
    console.log('Watched:', watched);
    console.log('File:', file);

    
    alert('Movie submitted successfully');
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="movieName" className="form-label">
          Movie Name
        </label>
        <input
          type="text"
          className="form-control"
          id="movieName"
          placeholder="Enter movie name"
          value={movieName}
          onChange={handleMovieNameChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Watched</label>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="watchedToggle"
            checked={watched}
            onChange={handleWatchedToggle}
          />
          <label className="form-check-label" htmlFor="watchedToggle">
            {watched ? 'Watched' : 'Unwatched'}
          </label>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="fileUpload" className="form-label">
          Upload File
        </label>
        <input
          type="file"
          className="form-control"
          id="fileUpload"
          onChange={handleFileUpload}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
