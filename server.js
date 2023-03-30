require('dotenv').config()
const express = require('express')
const connectDB = require('./db/connect')

const outputRouter = require('./routes/k6output')

const app = express()
app.use(express.json())


app.get('/', (req, res) => {
    res.json("Homepage")
})

app.use('/output', outputRouter)


const port = process.env.PORT || 3000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server running at port ${port}...`))
    }
    catch (err) {
        console.log(err)
    }
}
start()