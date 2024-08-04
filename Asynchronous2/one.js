//without Call back

let createEmployee=()=>{  
    setTimeout(()=>{
        console.log("GM")
    },4000)
}
let getEmployee=()=>{
    setTimeout(()=>{
        console.log("GA")
    },2000)
}

createEmployee()
getEmployee()