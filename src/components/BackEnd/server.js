const express = require('express')
const app = express()
const port = 4000

//allows users to access data
const cors = require('cors');
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(cors());
//allows us to access data
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//gets request for links
app.get('/', (req, res) => {
  res.send('Hello World!')
  //response ^^
})

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://Kaif370Z:Kaif@cluster0.l6qrxkt.mongodb.net/?retryWrites=true&w=majority');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

const bookSchema = new mongoose.Schema({
  title:String,
  author:String,
  cover:String
});

const bookModel = mongoose.model('my Books', bookSchema);

//link to page datarep
app.get('/datarep', (req, res)=>{
    res.send("Welcome to data representation and querying")
})

//link to name but also adds any name you wish 
app.get('/hello/:name', (req, res)=>{
    res.send('Hello '+req.params.name);
})

app.post('/api/books', (req, res)=>{
    console.log(req.body);

    bookModel.create({
      title:req.body.title,
      author:req.body.author,
      cover:req.body.URL
    })

    res.send('Data Recieved');
})

app.get('/api/books', (req, res)=>{
  bookModel.find((error,data) =>{
    res.json(data);
  })
  
})


//linking to a sendfile response
app.get('/test', (req, res)=>{
  res.sendFile(__dirname+'/index.html')
})

// gets first name and second name 
app.get('/name', (req, res)=>{
  res.send('Hello '+req.query.Fname + ' '+ req.query.Sname);
})

//POST version of the above
app.post('/name', (req, res)=>{
  console.log(req.body)
  res.send('Hello POST'+ req.body.Fname + ' '+ req.body.Sname);
})

app.get('/api/book/:id', (req, res)=>{
  console.log(req.params.id);
//find a book
bookModel.findById(req.params.id,(error, data)=>{
  res.json(data);
})
})
//update a book
app.put('/api/book/:id', (req,res)=>{
  console.log('Update: '+req.params.id)
  bookModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
    (error, data)=>{
      res.send(data);
    })
})
//delete a book
app.delete('/api/book/:id', (req,res)=>{
  console.log("Deleting: "+req.params.id);
  bookModel.findByIdAndDelete({_id:req.params.id},(error,data)=>{
    res.send(data);
  })
})

// get the server up and running
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})