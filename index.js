

import 'dotenv/config';
// import './db/index.js'; //connect to db
import './db.js';
import cors from "cors";

import express from 'express';

const app = express()
import routes from './routes/index.js';
app.use(express.json()); 

app.use("/api",routes )
app.use(cors({
  origin: ['http://localhost:8080', 'http://127.0.0.1:8080'],
  credentials: true
}));
app.use(function (req, res, next) {

  res.header('Access-Control-Allow-Origin', "http://localhost:8080");
  res.header('Access-Control-Allow-Headers', true);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

//handle 404
app.use((req, res, next) => {
  res.status(404).send("Not found")
})
//handle 500
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send("Something broke!")
})

app.listen(8080, () => {
  console.log("Server started on port 8080")
})

