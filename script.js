function checkFirst() {
    let first = document.getElementById("first").value;
    let regex = /^^[а-яА-Я\s]{2,20}$/;

    if (regex.test(first)) { // if testing of first is true
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = "✓";
        return true;
    }
    else {// if it's not
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = "✘";
        return false;
    }
}
function checkLast() {
    let last = document.getElementById("last").value;
    let regex = /^[а-яА-Я\s]{2,20}$/;

    if (regex.test(last)) { // if testing of first is true
        document.getElementById("last_Check").style.color = "green";
        document.getElementById("last_Check").innerHTML = "✓";
        return true;
    }
    else {// if it's not
        document.getElementById("last_Check").style.color = "red";
        document.getElementById("last_Check").innerHTML = "✘";
        return false;
    }
}
function checkPhone() {
    let phone = document.getElementById("phone").value;
    let regex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

    if (regex.test(phone)) { // if testing of first is true
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "✓";
        return true;
    }
    else {// if it's not
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "✘";
        return false;
    }
}
function checkDate() {
    let date = document.getElementById("date").value;
    
    if (date) { 
        document.getElementById("date_Check").style.color = "green";
        document.getElementById("date_Check").innerHTML = "✓";
        return true;
    }
    else {
        document.getElementById("date_Check").style.color = "red";
        document.getElementById("date_Check").innerHTML = "✘";
        return false;
    }
}
function checkEmail() {
    let email = document.getElementById("email").value;
    let regex = /^([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})$/;

    if (regex.test(email)) { // if testing of first is true
        document.getElementById("email_Check").style.color = "green";
        document.getElementById("email_Check").innerHTML = "✓";
        return true;
    }
    else {// if it's not
        document.getElementById("email_Check").style.color = "red";
        document.getElementById("email_Check").innerHTML = "✘";
        return false;
    }
}

function outputData() {
    let first = document.getElementById("first").value;
    let last = document.getElementById("last").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let email = document.getElementById("email").value;


    if (first != "" && last != ""  && phone != "" && date != ""&& email != "" ) {
        alert("Проверьте, пожалуйста, свои данные!\n" + 
            "Ваше имя: " + first + "\n" + 
            "Ваша фамилия: " + last + "\n" + 
            "Ваш номер телефона: " + phone + "\n" + 
            "Ваша дата рождения: " + date + "\n" + 
            "Ваш e-mail: " + email);
    }
    else {
        alert("Пожалуйста, заполните все поля.");
    }
}

let footerText = document.querySelector('.footer_text');
let isClicked = false;
footerText.onclick = function() {
    if (!isClicked) {
        footerText.innerHTML = "Ваши данные в полной безопасности!";
        footerText.style.color = 'black';
        isClicked = true;
    } else {
        footerText.innerHTML = "© Все на этом сайте защищено";
        footerText.style.color = ''; 
        isClicked = false;
    }
};

let image = document.querySelector('.img');
image.addEventListener('mouseover', function() {
  image.style.transform = 'scale(0.7)'; 
});
image.addEventListener('mouseout', function() {
    image.style.transform = 'scale(1)'; 
  });
