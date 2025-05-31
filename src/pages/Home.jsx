import MovieCard from "../components/MovieCard"

function Home() {
    const movies = [
        {id: 1, title: "Interstellar", release_date: "2015"},
        {id: 2, title: "Inception", release_date: "2019"},
        {id: 3 , title: "The Matrix", release_date: "1999"},
    ]

    const handleSearch = () => {

    }

    return ( <div className="home">
        <form onSubmit={handleSearch} className="search-form">
        <input type = "text" placeholder="Search for Movies..." className="search-input" />
        <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movie-grid">
        {movies.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />
        })}
        </div>
        </div>
    );
}

export default Home
