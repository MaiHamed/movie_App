import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({movie}){
    const {isFavorite, addToFavorites , removeFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)

    function FavoriteClicked(e){
        e.preventDefault()
        if(favorite) removeFavorites(movie.id)
            else addToFavorites(movie)
        
    }
    return(<dive className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
        </div>
        <div className="movie-overlay">
            <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={FavoriteClicked}>
  {favorite ? '♥️' : '🤍'}
</button>

        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
        </dive>
    );
}

export default MovieCard