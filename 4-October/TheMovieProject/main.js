
const baseApiUrl = "https://api.themoviedb.org/3";
const baseImgUrl = "https://image.tmdb.org/t/p/w500";
const bearerToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDIxNTFjOWMwYWExYmMyNzVlZmE3ZTc3NmExYmRmZCIsIm5iZiI6MTcyODU1NjEzOS41NjU5MjksInN1YiI6IjY3MDdhOWE4YzkyYzJlNTZkODYxNGQzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2UuRnwaAPc_GaKknaoQnfChFdBuTMXXxrV7H4PdLguQ";
const accountId = "21563515";

let currPage = 1;


function getMovies(page) {
    fetch(`${baseApiUrl}/discover/movie?page=${page}`,{
        headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        const movies = data.results;
        movies.forEach(movie => {
            movie.poster_path = `${baseImgUrl}${movie.poster_path}`;
            const body = document.getElementsByTagName("body");
            body.innerHTML += `<img src=${movie.poster_path}/>`
        });
        return movies;
    })
    .catch(err => console.log("Error Fetching Movies: " + err));
}

getMovies(2);

function getFavoriteMovies() {
    fetch(`${baseApiUrl}/account/${accountId}/favorite/movies`,{
        headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        return data.results;
    })
    .catch(err => console.log("Error Fetching Movies: " + err));
}

// getFavoriteMovies();

