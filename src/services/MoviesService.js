export const MoviesService = {
    async getMovies(page) {
        return await fetch(`https://yts.mx/api/v2/list_movies.json?page=${page}&limit=5`);
    },

    async getOneMovie(randomId) {
        return await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${randomId}&limit=20`);
    },

    async getMovieDetails(İd) {
        return await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${İd}`)
    }
}

