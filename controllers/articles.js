const Article = require("../models/Articles")


module.exports = {
    index: (req, res) => {
      Jobs.find({})
      .populate("onet")
      .then(jobs => {
        res.json(jobs);
      });
    },
    //Show an individual Job record based off of the title
    show:(req,res) => {
        Jobs.find({title: req.params.title}).then(jobs => {
            res.json(jobs)
        })
    },
    //Create a new Job record at root (using Post method)
    create:(req,res) => {
        const newJobs = req.body
        Jobs.create(newJobs).then(job => res.json(job));
        
    }, 
    //Update an existing Job record referncing the title
    update:(req,res) => {
        const updatedJobs = req.body

        Jobs.findOneAndUpdate({title: req.params.title}, updatedJobs, {
            new: true
        })
        .then(jobs => res.json(jobs))
    },
    //Delete a job record referencing the title 
    destroy: (req,res) => {
        Jobs.findOneAndDelete({title: req.params.title})
        .then(jobs => res.json(jobs))
    }

  };