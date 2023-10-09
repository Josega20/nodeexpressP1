const express = require("express");
const cors = require('cors')
const { agregarPost, obtenerPost } = require("./consultas");
const app = express();
app.use(cors())
const PORT = 3000;
app.listen(PORT, console.log(`¡Servidor ${PORT} encendido!`));
app.use(express.json())
app.get("/posts",cors(), async (req, res) => {
  const postRealizados = await obtenerPost();
  res.json(postRealizados);
});

app.post("/posts", async (req, res) => {
  const {titulo, url, descripcion} = req.body;
  console.log(req.body);
  await agregarPost(titulo, url, descripcion);
  res.send("Post agregado con éxito");
});
