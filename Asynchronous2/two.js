//with call back
let createEmployee=(callback)=>{  
    setTimeout(()=>{
        console.log("GM")
    },4000)
}
let getEmployee=()=>{
    setTimeout(()=>{
        console.log("GA")
    },2000)
}

createEmployee(getEmployee)  //passing function as a argument ->call back
