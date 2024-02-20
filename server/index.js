import DatabaseRouts from './Routs/DatabaseRouts.js';
import AuthRouts from './Routs/AuthRouts.js'
import cors from "cors"
import { json } from 'express';

import express from "express";
const app = express()
const port = 3000

app.use(cors())
app.use(json())
app.use("/api/v1/auth", AuthRouts);
app.use("/api/v1/database", DatabaseRouts);
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});