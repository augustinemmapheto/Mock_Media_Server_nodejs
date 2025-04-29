import express from 'express';
import path from 'path';
import makeRouter from './routes.js';

const app  = express();
const PORT = 3000;

app.use(express.json());

// API routers
app.use(makeRouter('movies'));
app.use(makeRouter('series'));
app.use(makeRouter('songs'));

// Static HTML documentation
app.use('/', express.static(path.resolve('public')));

// 404 fallback
app.use((_, res) => res.status(404).send('404 Not Found'));

// Generic error handler
app.use((err, _, res, __) => {
  console.error(err);
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () =>
  console.log(`Mock‑Media server listening on http://localhost:${PORT}`)
);