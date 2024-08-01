const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Optional: Only if you want to use other environment variables

const app = express();

app.use(cors());
app.use(express.json());

// Hard-coded MongoDB URI
const mongoURI = `mongodb+srv://magiakshay98:CatDog@magiakshay.k3bhicf.mongodb.net/?retryWrites=true&w=majority&appName=MagiAkshay`;

mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
app.use('/auth', require('./routes/authRoutes')); //for handling auth routes 


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});