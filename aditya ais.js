function val()
{
    var number=document.getElementById("number").value
    if(number.length==10)
    {
        //alert('valid number')
    }
    else{
        alert('number must be in 10 digit')
    }
    var email = document.getElementById("email").value
    
    if(email=='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/')
    {
alert('valid email')
    }
    else{
        alert('not')
    }
    

}