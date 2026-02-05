const express = require(`express`)
const app = express()
const port = 3000

app.get(`/`, (req, res) => {
    // Creo l'oggetto JS che rappresenta la lista post
    const articleList = {
        articleTitle: "test"

    }

    res.json(articleList);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    
})