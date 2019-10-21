
const express = require('express');
const controllerRouter = express.Router();
const articlesControllers = require("../controllers/articles")

controllerRouter.get("/", articlesControllers.index)
controllerRouter.get("/title/:title", articlesControllers.show)
controllerRouter.post("/", articlesControllers.create)
controllerRouter.put("/update/:title", articlesControllers.update)
controllerRouter.delete("/delete/:title", articlesControllers.destroy)


module.exports = controllerRouter;
