

import 'dotenv/config';
import './db.js';
import cors from "cors";
import express from 'express';

const app = express()
import routes from './routes/index.js';
app.use(express.json()); 

app.use("/api/user",routes )
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true
}));
app.use(function (req, res, next) {

  res.header('Access-Control-Allow-Origin', "http://localhost:3000");
  res.header('Access-Control-Allow-Headers', true);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});
app.get("/", (req, res) => {
  res.send("api is alive hello")
})

//handle 404
app.use((req, res, next) => {
  res.status(404).send("Not found")
})
//handle 500
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send("Something broke!")
})
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server started on port 8080")
})

