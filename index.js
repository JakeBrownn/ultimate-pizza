const express = require('express');
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/Player');

// Database Setup
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

// App Setup
const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Routes Setup
const playerRoutes = require('./routes/playerRoutes');
app.use('/api/player', playerRoutes);