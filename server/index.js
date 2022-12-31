
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

app.get('/', (req, res) => {
  res.send('Hello to Memories API');
});

const CONNECTION_URL = 'mongodb://javascriptmastery:javascriptmastery123@ac-3me5awg-shard-00-00.gjrucfn.mongodb.net:27017,ac-3me5awg-shard-00-01.gjrucfn.mongodb.net:27017,ac-3me5awg-shard-00-02.gjrucfn.mongodb.net:27017/?ssl=true&replicaSet=atlas-v52wvj-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));