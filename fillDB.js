
//Lancer la cmd dans un terminal:  json-server --watch fillDB.js --port 3030
//puis un: npm start

module.exports = () => {

    const data = { films: [] }
    const typeTab = ["animation", "biopic", "comédie", "documentaire", "drame", "fantastique", "science-fiction", "horreur", "guerre", "histoire", "policier", "thriller", "aventure"]
    const langTab = ["français", "anglais", "espagnol"]

    const type = () => {
        let numRandom = Math.floor(Math.random() * typeTab.length)
        let typeRand = typeTab[numRandom]
        return typeRand
    }

    const lang = () => {
        let numRandom = Math.floor(Math.random() * langTab.length)
        let langRand = langTab[numRandom]
        return langRand
    }

    // Create 50 movies
    for (let i = 0; i < 50; i++) {
        data.films.push({ id: i, title: `Titre${i}`, content: "Iamque lituis cladium concrepantibus internarum non celate ut antea turbidum saeviebat ingenium a veri consideratione detortum.", author: `Réalisateur${i}`, genre: type(), language: lang() })
    }

    return data
}


