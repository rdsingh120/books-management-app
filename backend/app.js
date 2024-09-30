import express from 'express'
import path from 'path'
import 'dotenv/config'
import connectDB from './database/connectDB.js'
import router from './routes/book.routes.js'

const app = express()
const port = process.env.PORT
const __dirname = path.resolve()
console.log('Hello ' + (process.env.NODE_ENV))

app.use(express.json())
app.use('/api/books', router)

 
if (process.env.NODE_ENV == 'production') {
  console.log('getting static files')
  app.use(express.static(path.join(__dirname, '../frontend/dist')))
  app.get('*', (req, res) => {
    res
      .status(200)
      .sendFile(path.resolve(__dirname, '../fronted', 'dist', 'index.html'))
  })
}

const startServer = async () => {
  try {
    await connectDB()
    app.listen(port, () => {
      console.log(`server is listening to port ${port}...`)
    })
  } catch (error) {
    console.log(`Error in startServer: ${error}`)
  }
}

startServer()
