import { generatePath, Link } from "react-router-dom";
import styles from "./Thumbnail.module.css";

function Thumbnail({ id, title, image, alt, year, genres }) {
  return (
    <div className={styles.thumbnail}>
        <img src={image} alt={alt} className={styles.thumbnail__img}/> 
        <div>
            <h3 className={styles.thumbnail__year}>{year}</h3>
            <Link to={`Movie/${id}`} className={styles.thumbnail__title}>{title}</Link>
            <ul className={styles.thumbnail__genres}>
                {genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
           </ul>
        </div>
    </div>
  )
}

export default Thumbnail;