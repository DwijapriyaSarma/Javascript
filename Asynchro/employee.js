//call back exsmple

let employees=[{id:101, name:"rahul", salary:46000},
    {id:102, name:"salo", salary:54000}
]

let createEmoployee=(emp,callback)=>{
    setTimeout(()=>{     //executing the providing function
        employees.push(emp)      //receive as a call back
        callback();
    },4000)
}
let displayData=()=>{
    setTimeout(()=>{
        let rows=""
        for(emp of employees){
            rows=rows+ `<tr>
                        <td>${emp.id}</td> 
                        <td>${emp.name}</td> 
                        <td>${emp.salary}</td> 
                       </tr>`
        }
    
        document.getElementById('abc').innerHTML=rows;
    },2000)

     
}
createEmoployee({id:103, name:"priya", salary:75000},displayData) //passing object as a perameter here

//displayData()  //passing function as an argument //callback-pasing functinon as a argument