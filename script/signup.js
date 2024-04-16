var signUpForm = document.querySelector('#sign-up-form');

var data= [];

signUpForm.addEventListener('submit',function(event){
    handleSignUp(event)
})

function handleSignUp(event) {
    event.preventDefault();
    let fullname = event.target[0].value;
    let mobile = event.target[1].value;
    let email = event.target[2].value;
    let password = event.target[3].value;
    let role = event.target[4].value;


    if (mobile.length !== 10) {
        alert("Invalid Mobile Number");
    }
    else if (!checkPasswordComplexity(password)) {
        alert("Please use a password with a combination of numbers, uppercase letters, lowercase letters, and at least one symbol");
    } else {
        let obj = {
            "fullName": fullname,
            "mobile": mobile,
            "email": email,
            "password": password,
            "role": role
        };
        let data =[];
        data.push(obj);
        saveData(data);
        event.target.reset();
    }

    console.log(fullname, mobile, email, password, role);
    console.log(data);
}

function saveData(data){
    localStorage.setItem('signUpData',JSON.stringify(data))
    reloadData()
    console.log(data)
}

function reloadData(){
    data = localStorage.getItem('signUpData')
    console.log(data)
}

reloadData()


function checkPasswordComplexity(password) {
    const minLength = password.length >=8 ? true :false;
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[^\w\s]/.test(password); // Checks for special characters
  
    const complexityScore = (
        minLength+
      hasLowerCase +
      hasUpperCase +
      hasNumber +
      hasSymbol
    );
  
    if(complexityScore > 4){
        return true
    }
    else{
        return false
    }
  }
  