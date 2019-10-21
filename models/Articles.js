const mongoose = require("../connection")
const Schema = mongoose.Schema

const sourceSchema = new Schema({
    id: String, 
    name: String
})

const articleSchema = new Schema({
           

    source: [sourceSchema],
    author: String, 
    title: String, 
    description: String, 
    url: String, 
    urlToImage: String, 
    publishedAt:  Date, 
    content: String

   
})


const Article = mongoose.model("Article", articleSchema);

 module.exports = Article;

// Tiff Note: 
// Make sure that the URL data type is correct. Along with the publishedAt date
