const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const flightRoutes = require('./Routes/FlightRoutes');
require('dotenv').config();
const connectWithDb = require('./Config/database');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1', flightRoutes);


connectWithDb();
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
