import express from 'express'
const app = express()

const port = process.env.PORT || 3000

app.use('/public', express.static(__dirname))

app.get('/hello', (req, res) => res.send('worlds'))

app.listen(port, () => console.log(`makin music on ${port}`))
