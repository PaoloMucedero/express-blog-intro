const express = require(`express`)
const app = express()
const port = 3000

// attivazione cartella public
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.send("<h1>Home Route app Blog</h1>")
})

app.get("/bacheca", (req, res) => {
    // Creo l'oggetto JS che rappresenta la lista post
    const articleList = [
        {   
            id: 1,
            articleTitle: "test",
            articleBody: "Test corpo articolo",
            img: "/images/ciambellone.jpeg",
            tags: ["", ""]
        },
       {    
            id: 2,
            articleTitle: "test",
            articleBody: "Test corpo articolo",
            img: "/images/cracker_barbabietola.jpeg",
            tags: ["", ""]
        },
        {   
            id: 3,
            articleTitle: "test",
            articleBody: "Test corpo articolo",
            img: "/images/pane_fritto_dolce.jpeg",
            tags: ["", ""]
        },
        {   
            id: 4,
            articleTitle: "test",
            articleBody: "Test corpo articolo",
            img: "/images/pasta_barbabietola.jpeg",
            tags: ["", ""]
        },
        {   
            id: 5,
            articleTitle: "test",
            articleBody: "Test corpo articolo",
            img: "/images/torta_paesana.jpeg",
            tags: ["", ""]
        },
]
    
    res.json(articleList);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    
})