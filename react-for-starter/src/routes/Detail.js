import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Movie from "../components/Movie";
import Button from "../Button";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [theMovie, setMovie] = useState([]);
    const {id} = useParams();
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json.data.movie);
        console.log(json);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            {loading ? <h1>Loading...</h1> : 
            <div>
                <Movie
                    key={theMovie.id} // map 함수를 사용할 때 key를 사용해야 함
                    id={theMovie.id}
                    coverImg={theMovie.medium_cover_image} 
                    title={theMovie.title} 
                    summary={theMovie.description_full}
                    genres={theMovie.genres}
                />
            </div>}
        </div>
    )
}

export default Detail;