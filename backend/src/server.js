const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./database');
const user = require('./database/models/product');
const { apiRoute } = require('./api');

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/api', apiRoute);

app.get('/health', (req,res) => {
    res.send('Okk, Working fine');
})

app.listen(PORT, async () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})