import 'dotenv/config';
import './db.js';
import cors from "cors";
import express from 'express';

const app = express()
import routes from './routes/index.js';
app.use(cors({
  origin: ['http://localhost:3000', 'https://github.com/kgonchuk','https://kgonchuk.github.io'], credentials: true}));
app.use(express.json()); 

app.use("/api",routes )

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
  console.log(`Server started on port ${PORT}...`)
})

