document.getElementById("main-form").addEventListener("submit", checkForm);

function checkForm(event) {
    
    event.preventDefault();

    let element = document.getElementById("main-form");

    let login = element.login.value;
    let password = element.password.value;
    let repassword = element.repassword.value;
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let fail = "";

    if(login == "" || password == "" || repassword == "")
        fail = "Заполните все поля";
    else if(login.length <= 1)
        fail = "Введите корректное имя";
    else if(password != repassword)
        fail = "Пароль должен быть одинаковым";
    else if(password.length < 3)
        fail = "Пароль должен содержать не менее 3 символов";
    else if(male.checked == false && female.checked == false)
        fail = "Укажите  свой пол"
    if(fail != "")
        document.getElementById("error").innerHTML = fail;
    else{
        alert("Форма заполнена корректно");
        window.location = "https://ilpatio.ru";
    }
}

