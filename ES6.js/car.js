let cars=[
    {model:'swift', brand:"Maruthi",price:900000, color:"White"},
    {model:'Xuv300', brand:"Mahindra",price:1400000, color:"Red"},
    {model:'Xuv700', brand:"Mahindra",price:2900000, color:"Red"},
    {model:'Baleno', brand:"Maruthi",price:900000, color:"White"},
    {model:'Evoqe', brand:"RR",price:6900000, color:"Blue"},
    {model:'X1', brand:"BMW",price:5900000, color:"Blue"},
    {model:'Nexon', brand:"Tata",price:1200000, color:"Yellow"},
    {model:'santro', brand:"Hyndai",price:900000, color:"Black"},
    {model:'Create', brand:"Hyndai",price:1900000, color:"gray"},
    {model:'Seltos', brand:"KIA",price:2400000, color:"White"},
]
    ///create and print only white color cars


let white_Cars=cars.filter((car)=>{
    return car.color=="White"
})
console.log(white_Cars)