const API_KEY = "66d8926b6065f4e136e35c38d77e7e87"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_kry=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results
}
