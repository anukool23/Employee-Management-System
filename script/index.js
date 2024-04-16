var loginform = document.querySelector("#login-form")


loginform.addEventListener('submit',function(event){
    handleLoginData(event)
})

function handleLoginData(event){
    event.preventDefault()
    let email = event.target[0].value;
    let password = event.target[1].value;

    console.log(email,password)

    if(email == 'anu@gmail.com' && password == 123){
        console.log("Login successful")
    }
    else{
        alert("Enterid Email or Password is incorrect")
    }
}