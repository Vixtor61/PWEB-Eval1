const express = require('express')

const app = express()
const port = 3000
app.use(express.json());
app.use('/api/paquetes')

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`)
})
