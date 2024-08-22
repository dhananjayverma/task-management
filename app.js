const express = require('express');
const app = express();
const mongoose = require('./config/db');

app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

module.exports = app;
