

import 'dotenv/config';
// import './db/index.js'; //connect to db
import './db.js';

import express from 'express';
const app = express()
import routes from './routes/index.js';

app.use("/api",routes )

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

