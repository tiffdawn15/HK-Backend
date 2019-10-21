const mongoose = require('mongoose')


//THis connects our db to our application 




//Tells program to use ES6 promises 
mongoose.Promise = Promise;

let mongoURI = ""

if(process.env.NODE_ENV === "production"){
  mongoURI = process.env.DB_URL
} else{
  mongoURI = 'mongodb://localhost/article'
}

mongoose
  .connect(mongoURI, {useNewUrlParser: true})
  .then(instance => console.log(`Connected to db: ${instance.connections[0].name}`))
  .catch(error => console.log('Connection failed!', error))

//Tells us the state of our connection with a number 2 (if it works) 0 (if it doesn't work)
console.log(mongoose.connection.readyState)

//Exporting the files we create to mongoose. Module is  a nodeJS thing
module.exports = mongoose;
 