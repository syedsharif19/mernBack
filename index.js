const mongoose = require('mongoose');
const express = require('express')
var cors = require('cors') 
const app = express()
const port =3000;
app.use(cors())
const mongoURI = 'mongodb+srv://nagursharifsd:sharif2244@cluster0.7znl75x.mongodb.net/?retryWrites=true&w=majority';
async function connectToMongo() {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB successfully!');
  } catch (error) {
    console.log(error);
  }
}
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.use(express.json())

// Available Routes
// app.use('./api/auth', require('../routes/auth'))
app.use('/api/auth',require('./Routes/auth'))
app.use('/api/notes',require('./Routes/notes'))
// app.use('./api/notes', require('../routes/notes'))

connectToMongo()
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
