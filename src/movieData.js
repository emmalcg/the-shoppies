const movie = {}

movie.apiUrl = 'http://www.omdbapi.com/?apikey=e5f2ee09&'

fetch(move.apiUrl, {
    method: 'GET',
    type: 'movie'
})
.then((res) => {
    return res.json()
})
.then((jsonResult) => {
    console.log(jsonResult)
})