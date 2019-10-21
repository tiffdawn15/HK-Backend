const Articles = require("./models/Articles")



const articleJSonData = require("./hk.json")



const articlesSeedData = articleJSonData.map(articleJson => {
    const articleData = {};

    articleData.author = articleJson.author;
    articleData.title = articleJson.title;
    articleData.description = articleJson.description;
    articleData.url = articleJson.url;
    articleData.urlToImage = articleJson.urlToImage;
    articleData.publishedAt = articleJson.publishedAt;
    articleData.content = articleJson.content;

    return articleData;
})





Articles.deleteMany({})
    .then(() => {
        Articles.create(articlesSeedData)
        .then(articles => console.log(articles))
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))


