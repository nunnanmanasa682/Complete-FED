let cars=[{name:"jeep",brand:"maruthi",model:"tata",price:2500000, color:"white"},
{name:"jeep",brand:"maruthi",model:"tata",price:500000,color:"red"},
{name:"jeep",brand:"maruthi",model:"tata",price:250000,color:"white"}]

let new_cars_data=cars.filter(car=>{
    return car.color=="white"&&car.price>=250000
});
console.log(new_cars_data);