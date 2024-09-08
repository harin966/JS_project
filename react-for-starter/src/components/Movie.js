import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
import Button from "../Button";

function Movie({id, coverImg, title, summary, genres}) {
    return (
    <div className={styles.movie}> 
    <img src={coverImg} alt={title} className={styles.movie__img}/>
        <div>
        <h2 className={styles.movie__title}>{title}</h2>
        <ul className={styles.movie__genres}>
            {genres.map((g) => (
                     <li key={g}>{g}</li>
            ))}
        </ul>
        <p>{summary}</p>
        </div>
        <Link to="/"><Button>Back</Button></Link>
    </div>);
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;