let state={
    product:{
        id:102,
        Name:"real me",
        price:10000,
        color:{
            color1:"gray",
            color2:"blue"
        }
    }
}
console.log(state.product.Name);
let  {product}=state
 let {Name,color}=product
console.log(Name);
console.log(color);