const GenerationEngine = require("../app/generation/engine");
const express = require('express');
const dragonRouter = require('./api/dragon')
const generationRouter = require('./api/generation')

const app = express();

const port = process.env.PORT || 3000

const engine = new GenerationEngine();

app.locals.engine = engine;

app.use("/dragon", dragonRouter)
app.use("/generation", generationRouter)

engine.start();


app.listen(port, ()=> console.log(`Listning on Port ${port}`))

module.exports = app;