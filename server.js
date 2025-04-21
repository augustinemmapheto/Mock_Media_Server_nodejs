const express = require('express');
const app = express();
app.use(express.json()); // For JSON request body


const movies = [
      { id: 1, title: "Inception", director: "Christopher Nolan" },
        { id: 2, title: "Interstellar", director: "Christopher Nolan" }
        ];

const series = [
          { id: 1, title: "Breaking Bad", seasons: 5 },
            { id: 2, title: "Stranger Things", seasons: 4 }
            ];

const songs = [
              { id: 1, title: "Blinding Lights", artist: "The Weeknd" },
                { id: 2, title: "Shape of You", artist: "Ed Sheeran" }
                ];

app.get('/movies', (req, res) => res.json(movies));
app.get('/series', (req, res) => res.json(series));
app.get('/songs', (req, res) => res.json(songs));

app.use((req, res) => res.status(404).send('404 Not Found'));
