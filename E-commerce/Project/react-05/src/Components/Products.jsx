import React, {useState,useEffect} from 'react';
const Products = () => {

    const [data, setData] = useState([]);
    const[filter, setFilter] = useState(data);
    const[loading, setLoading] = useState(false);
    let componentMounted =true;

    useEffect(() => {
        const getProducts = async () => {
         setLoading(true);
      const response = await fetch("https://fakestoreapi.com/Products");  
       if(componentMounted){
        setData(await response.clone().json())
        setFilter(await response.json());
        setLoading(false);
        console.log(filter)
       }

    return ()  => {
        componentMounted = false;

    }

    }
      getProducts();
    }, []);
     const Loading = () => {
        return(
            <>
            Loading....
            </>
        )
     }
     const showProducts = () => {
        return (
            <>
           <div className="buttons d-flex justify-content-center mb-5 pb-5">
            <button className="btn btn-outline-dark me-2">All</ button>
            <button className="btn btn-outline-dark me-2">Men's clothing</ button>
            <button className="btn btn-outline-dark me-2">women's clothing</ button>
            <button className="btn btn-outline-dark me-2">Jewellery</ button>
            <button className="btn btn-outline-dark me-2">Electronic</ button>
 </div>
 {filter.map((products)=>{
    return(
        <>
        <div className="col-md-3">
        <div class="card" >
  <img src={Products.image} class="card-img-top" alt=
   {products.title} />
  <div class="card-body">
    <h5 class="card-title">{Products.title}</h5>
    <p class="card-text">
        ${Products.price}
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
        </>
    )
 })}
             </>
        );
     };
    return (
        <div>
           <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bolder
                    text-center">Latest Products</h1>
                    <hr />
                </div>
            </div>
            <div className="row justfy-content-center">
                {loading  ? <loading/> : <showProduct/> }
            </div>
           </div>
        </div>
    );
}
export default Products;