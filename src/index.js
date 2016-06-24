import express from 'express'
const app = express()

app.use('/public', express.static(__dirname))

app.get('/hello', (req, res) => res.send('worlds'))

app.listen(3000, () => console.log('makin music on 3000'))
