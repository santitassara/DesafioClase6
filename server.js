const express = require("express")
const app = express()

app.get("/", (req, res) => {
  throw new Error("Error")
  res.send("Bienvenidos a la ruta raiz")
})

const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
 console.log(`Servidor corriendo en puerto : ${PORT}`)
})

server.on("error", error=>{console.log(`Hubo un error : ${error}`)})