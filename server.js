import express from 'express'
import Router  from './router.js'
const app = express()
const port = 3001


app.use(express.json())
app.use(Router)

app.get('/', (req, res) => {
  res.send('OK!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})