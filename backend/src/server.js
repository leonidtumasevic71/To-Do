require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const pool = require('./db');

// тест
app.get('/test', async (req, res) => {
  const result = await pool.query('SELECT * FROM tasks');
  res.json(result.rows);
});

// GET задачи
app.get('/tasks', async (req, res) => {
  const result = await pool.query('SELECT * FROM tasks');
  res.json(result.rows);
});

// POST задача
app.post('/tasks', async (req, res) => {
  const { title } = req.body;

  const result = await pool.query(
    'INSERT INTO tasks (title) VALUES ($1) RETURNING *',
    [title]
  );

  res.json(result.rows[0]);
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});