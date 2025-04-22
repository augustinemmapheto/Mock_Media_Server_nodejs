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

// POST
app.post('/movies', (req, res) => {
  movies.push(req.body);
    res.json(movies);
    });

// DELETE
app.delete('/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
    const index = movies.findIndex(m => m.id === id);
      if (index !== -1) movies.splice(index, 1);
        res.json(movies);
        });

  // PUT
app.put('/series/:id', (req, res) => {
  const id = parseInt(req.params.id);
    const index = series.findIndex(m => m.id === id);
      if (index !== -1) series[index] = req.body;
        res.json(series);
        });

// POST
app.post('/series', (req, res) => {
  series.push(req.body);
    res.json(series);
    });

// DELETE
app.delete('/series/:id', (req, res) => {
  const id = parseInt(req.params.id);
    const index = series.findIndex(m => m.id === id);
      if (index !== -1) series.splice(index, 1);
        res.json(series);
        });

  // PUT
app.put('/series/:id', (req, res) => {
  const id = parseInt(req.params.id);
    const index = series.findIndex(m => m.id === id);
      if (index !== -1) series[index] = req.body;
        res.json(series);
        });


// POST
app.post('/songs', (req, res) => {
  movies.push(req.body);
    res.json(songs);
    });

// DELETE
app.delete('/songs/:id', (req, res) => {
  const id = parseInt(req.params.id);
    const index = songs.findIndex(m => m.id === id);
      if (index !== -1) songs.splice(index, 1);
        res.json(songs);
        });

  // PUT
app.put('/songs/:id', (req, res) => {
  const id = parseInt(req.params.id);
    const index = songs.findIndex(m => m.id === id);
      if (index !== -1) songs[index] = req.body;
        res.json(songs);
        });


