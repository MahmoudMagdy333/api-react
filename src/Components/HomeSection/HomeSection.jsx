import { useEffect, useState } from "react"
import ProductCard from "../ProductCard/ProductCard"
export default function HomeSection () {

    const [Products , SetProducts] = useState([])
    async function FetchData () {
        let res = await fetch('https://dummyjson.com/products')
        let data = await res.json()
        let productinfo = await data.products
        SetProducts(productinfo)
    }

    useEffect(()=>{
        FetchData()
    },[])
    return (
        <div className="row">
            {
                Products.map((product)=>{

                    return(
                        <ProductCard img={product.thumbnail} title={product.title} id={product.id}/>
                    )
                })
            }

        </div>
    )
}