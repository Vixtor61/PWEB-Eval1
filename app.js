const express = require('express')
const incidenciasRoutes = require('./routes/incidenciasRouter')

const app = express()
const port = 3000
app.use(express.json());
app.use('/api/incidencias', incidenciasRoutes)


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`)
})
