import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ProductDetails() {
    const params = useParams()
    const [Products , SetProducts] = useState({})
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${params.productid}`)
        .then(res => res.json())
        .then(data => SetProducts(data));
    },[])
    console.log(Products)
    return(
        <div className="container-md">
            <div className="row">
                <div className="col-md-5"><img src={Products.thumbnail} alt="" /></div>
                <div className="col-md-5">
                    <p>{Products.title}</p>
                    <p>{Products.price}</p>
                    <p>{Products.rating}</p>
                </div>
            </div>
        </div>
    )
}