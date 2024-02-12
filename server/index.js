import DatabaseRouts from './Routs/DatabaseRouts.js';
import AuthRouts from './Routs/AuthRouts.js'

import express from "express";
const app = express()
const port = 3000


app.use("/api/v1/auth", AuthRouts);
app.use("/api/v1/database", DatabaseRouts);
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});