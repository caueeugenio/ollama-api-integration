import express from 'express'
import axios from 'axios'
import cors from 'cors'
const app = express()
app.use(express.json(), cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))

app.post('/ia', async (req, res) => {
  const { text } = req.body
  const response = await axios.post('http://localhost:11434/api/generate', {
    model: 'llama3',
    prompt: text,
    stream: false,
  })
  const responseData = response.data.response.toString()
  res.send(responseData)
})

app.listen(3001, () => {
  console.log('Server running on port 3001')
})
