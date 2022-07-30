const connectToMongo = require('./db');
const express = require('express')
const dotenv = require('dotenv');
var cors = require('cors')

connectToMongo();

const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(PORT, () => {
    console.log(`ibook backend listening at http://localhost:${PORT}`)
}) 