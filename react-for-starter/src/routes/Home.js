import {useState, useEffect} from 'react';
import Movie from '../components/Movie';
import PropTypes from "prop-types";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const json = await(await fetch(
            //'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
            'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
        )).json();
        setMovies(json.data.movies);
        setLoading(false);
    } // then 사용하는 방법과 동일한 효과 (then 대신 await 를 사용함)
    useEffect ( () => {
        getMovies()
    }, []);
    console.log(movies);
    return (
    <div>
        {loading ? <h1>Loading...</h1>: 
        <div>
            {movies.map(movie => ( 
            <Movie 
                key={movie.id} // map 함수를 사용할 때 key를 사용해야 함
                coverImg={movie.medium_cover_image} 
                title={movie.title} 
                summary={movie.summary}
                genres={movie.genres}
             />))}
        </div>}
    </div>);
}

Home.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default Home;