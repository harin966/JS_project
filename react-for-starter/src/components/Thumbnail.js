import { Link } from "react-router-dom";

function Thumbnail({ id, title, image, alt }) {
  return (
    <div>
        <img src={image} alt={alt}/>
        <br/>
        <Link to={`Movie/${id}`}>{title}</Link>
    </div>
  )
}

export default Thumbnail;