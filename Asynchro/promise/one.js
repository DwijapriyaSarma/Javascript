let goToGoa=(success, failure)=>{
    let bank_bal=23800;
    if(bank_bal>10000){
        success("Go to goa")
    }else{
        failure("Do study and make money")
    }
}
    goToGoa((msg)=>{console.log(msg)},(err)=>{console.log(err)})

