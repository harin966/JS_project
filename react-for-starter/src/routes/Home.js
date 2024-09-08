import {useState, useEffect} from 'react';
import Thumbnail from '../components/Thumbnail';
import styles from "./Home.module.css";
import PropTypes, { checkPropTypes } from "prop-types";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const json = await(await fetch(
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
    <div className={styles.container}>
        {loading ? <h1>Loading...</h1>: 
        <div className={styles.movies}>
            {movies.map(movie => ( 
            <Thumbnail 
                key={movie.id} // map 함수를 사용할 때 key를 사용해야 함
                id={movie.id}
                image={movie.medium_cover_image} 
                title={movie.title} 
                year={movie.year}
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