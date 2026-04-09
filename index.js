import express from 'express';

const app = express();
const PORT = 3000;

// GET route
app.get('/', (req, res) => {
  res.send('Hello from GET request 🚀');
});

// POST route
app.post('/data', (req, res) => {
  res.send('Hello from POST request ');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});