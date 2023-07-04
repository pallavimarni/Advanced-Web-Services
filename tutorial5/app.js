const express =require ("express");

const app = express();

const userRoute = require ("./api/routes/routes");

app.use(express.json());

app.use("/", userRoute);

app.use((req, res, next) => {
    res.status(404).json({ error: 'Endpoint not found' });
  });
  

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
  });

module.exports =app;