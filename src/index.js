const express = require('express');
const cors = require('cors');
const indexRouter = require('./routes/index');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(indexRouter);

app.listen(process.env.LISTEN_PORT || 3001 , () => {
    console.log(process.env.LISTEN_PORT);
})