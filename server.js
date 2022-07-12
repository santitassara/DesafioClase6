const express = require("express")

const contenedor = require("./EjercicioProductos/index.js")

const app = express()

const PORT = process.env.PORT || 8080

let miContenedor = new contenedor(`./EjercicioProductos/productos.txt`)



app.get("/", (req, res) => {
  res.send("<h1>Ejercicio Servidor con Express </h1>")
})

app.get(`/productos`, (req, res) => {
   (async () => {
      try {
          let data = await miContenedor.getAll();
          res.send(data);
      } catch (err) {
          console.error(err);
      }
  })();
});

app.get(`/productoRandom`, (req, res) => {
  ; (async () => {
      try {
          let allData = await miContenedor.getAll();
          let random = Math.trunc(Math.random() * ((allData.length) - 0) + 0);
          let dataRandom = await miContenedor.getById(random);
          //res.send(dataRandom);
          res.send(`<h4>Producto random: ${JSON.stringify(dataRandom)}</h4>`);
      } catch (err) {
          console.error(err);
      }
  })();
});



const server = app.listen(PORT, () => {
 console.log(`Servidor corriendo en puerto : ${PORT}`)
})

server.on("Error", error=>{console.log(`Hubo un error : ${error}`)})