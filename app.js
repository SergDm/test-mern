const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const auth = require('./routes/auth.routes')

const app = express()

app.use('/api/auth', auth)

const PORT = config.get('port') || 5000

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useUnifiedTopology: true, 
      useNewUrlParser: true, 
      useCreateIndex: true, 
      useFindAndModify: false
    })
    app.listen(PORT, () => console.log(`App started on port ${PORT}!`))
  } catch(e) {
    console.log(e.message)
    process.exit(1)
  }
}

start()