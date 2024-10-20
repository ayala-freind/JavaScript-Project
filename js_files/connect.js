// const { json } = require("stream/consumers");

const dom = {
    password: document.querySelector('#password_input'),
    form: document.querySelector('#enterForm'),
    name: document.querySelector('#first_name_input')
}
dom.form.onsubmit = (event) => {

    event.preventDefault();
    if (!(localStorage[dom.password.value])) {
        alert("סיסמא" + dom.password.value + " אינה רשומה במערכת הינך צריך להצטרף");
        window.location.replace("./Enrollment.html")
    }
    else {
        const pass = document.getElementById("password_input").value;
        const userstr = localStorage.getItem(pass);
        const usert = JSON.parse(userstr);
     let n=dom.name.value;
        console.log(n);
        localStorage.setItem("name",n);
        window.location.replace("./home.html")
    }

}

