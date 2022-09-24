const API_KEY = process.env.API_KEY

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
        query: 'trending'
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
        query: 'top-rated'
    },
    fetchActionMovies: {
        title: 'Action',
        url: `/discover/movie?api_key=${API_KEY}&with_genre=28`,
        query: 'action'
    },
    fetchComedyMovies: {
        title: 'Comedy',
        url: `/discover/movie?api_key=${API_KEY}&with_genre=35`,
        query: 'comedy'
    },
    fetchHorrorMovies: {
        title: 'Horror',
        url: `/discover/movie?api_key=${API_KEY}&with_genre=27`,
        query: 'horror'
    },
    fetchRomanceMovies: {
        title: 'Romance',
        url: `/discover/movie?api_key=${API_KEY}&with_genre=10749`,
        query: 'romance'
    },
    fetchMysteryMovies: {
        title: 'Mystery',
        url: `/discover/movie?api_key=${API_KEY}&with_genre=9648`,
        query: 'mystery'
    },
    fetchSciFiMovies: {
        title: 'Sci-Fi',
        url: `/discover/movie?api_key=${API_KEY}&with_genre=878`,
        query: 'sci-fi'
    },
    fetchWesternMovies: {
        title: 'Western',
        url: `/discover/movie?api_key=${API_KEY}&with_genre=37`,
        query: 'western'
    },
    fetchAnimationMovies: {
        title: 'Animation',
        url: `/discover/movie?api_key=${API_KEY}&with_genre=16`,
        query: 'animation'
    },
    fetchTvMovies: {
        title: 'TV Movie',
        url: `/discover/movie?api_key=${API_KEY}&with_genre=10770`,
        query: 'tv-movie'
    }
}