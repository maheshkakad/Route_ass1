import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
;

const Products = () => {
    
    const [products , setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
          let r = await  fetch("http://localhost:9090/products")
           let d = await r.json();
            setProducts(d);
                            
        };
        fetchProducts();
    } , []);

    const oknot =()=>{
        if(products.id  == null){
            
        }
    }

    return (
    <div>
     produsts: {" "}
    <div>
        {products.map((p) => (
             <div key={p.id}>
              <Link to={`/products/${p.id}`}>
                   <h2>{p.name}</h2>
                  <button onChange={oknot} >More Details</button></Link>
            </div>
        ))}
    </div>

    </div>
    );
};

export default Products;