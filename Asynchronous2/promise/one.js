//promise
let GoToGoa=(success,failure)=>{  //success and promise are two functions
let acc_bal=5000;
if(acc_bal>10000){
    success("Go to Goa")
}else{
    failure("go to prostack and do study")
}
}
GoToGoa((msg)=>{console.log(msg)},(err)=>{console.log(err)})  //passing function as a argument