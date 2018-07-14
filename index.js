const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');


// DB Setup
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });


// App Setup
const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));