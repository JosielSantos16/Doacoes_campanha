require("dotenv").config();

const db = require('./src/database/db.js');
const express = require("express");
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Backend funcionando"

    })
})

app.get("/campanhas", async (req, res) => {
    const campanha = await db.selectCampanha();
    res.json(campanha)
})

app.post("/campanhas", async (req, res) => {
    await db.insertCampanha(req.body);
    res.sendStatus(201);
})

app.patch("/campanhas/:id", async (req, res) => {
    await db.updateCampanha(req.params.id, req.body);
    res.sendStatus(200);
})

app.delete("/campanhas/:id", async (req, res) => {
    await db.deleteCampanha(req.params.id);
    res.sendStatus(204);
})


app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`);
})