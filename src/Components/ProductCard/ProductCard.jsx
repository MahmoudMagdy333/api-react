import { Link } from "react-router-dom";

export default function ProductCard(props) {
    return(
        <div className="card col-md-6 col-lg-3">
             <img src={props.img} className="card-img-top" alt="..."/>
             <div className="card-body">
               <h5 className="card-title">{props.title}</h5>
               <Link to={`/details/${props.id}`} className="btn btn-primary">Product Details</Link>
             </div>
        </div>
    )
}