const Articles = require("../models/Articles")


module.exports = {
    index: (req, res) => {
      Articles.find({})
      .populate("article")
      .then(article => {
        res.json(articles);
      });
    },
    //Show an individual Job record based off of the title
    show:(req,res) => {
        Article.find({title: req.params.title}).then(articles => {
            res.json(articles)
        })
    },
    //Create a new Job record at root (using Post method)
    create:(req,res) => {
        const newarticle = req.body
        Articles.create(newarticle).then(article => res.json(article));
        
    }, 
    //Update an existing Job record referncing the title
    update:(req,res) => {
        const updateArticle = req.body

        Articles.findOneAndUpdate({title: req.params.title}, updateArticle, {
            new: true
        })
        .then(articles => res.json(articles))
    },
    //Delete a job record referencing the title 
    destroy: (req,res) => {
        Articles.findOneAndDelete({title: req.params.title})
        .then(articles => res.json(articles))
    }

  };