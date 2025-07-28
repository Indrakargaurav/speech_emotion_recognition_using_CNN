const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios'); // Import axios for making requests
const connectDB = require('./config');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({ 
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000', 
  credentials: true 
}));
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'yourSecretKey',
    resave: false,
    saveUninitialized: false,
    cookie: { 
      secure: process.env.COOKIE_SECURE === 'true', // Set to true in production with HTTPS
      httpOnly: process.env.COOKIE_HTTPONLY === 'true',
      sameSite: process.env.COOKIE_SAMESITE || 'lax'
    },
  })
);

// Routes
app.use('/api/auth', authRoutes);

// /api/analyze-emotion route

const PORT = process.env.PORT || process.env.NODE_PORT || 4000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
