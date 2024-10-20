const dom = {
    name: document.querySelector('#name'),
    password: document.querySelector('#paaword'),
    approvalPaaword: document.querySelector('#approvalPaaword'),
    id: document.querySelector('#id'),
    form: document.querySelector('form'),
    age: document.querySelector('#age')
}
var age;
dom.form.onsubmit = (event) => {
    event.preventDefault();
    console.log(event);
    
    const user = {
        name: dom.form.name.value,
        age: dom.form.age.value,
        password: dom.form.password.value,
        id: dom.form.id.value,
    }
    if (localStorage[user.password]) {
        alert("שמך שמור במערכת")
        window.location.replace("./Connect.html")
    }
    else {
        const stringUser = JSON.stringify(user);
        localStorage.setItem(user.password, stringUser);
        localStorage.setItem("age", user.age);
        localStorage.setItem("name",user.name);
        alert(" !נרשמת בהצלחה ברוך הבא");
        window.location.replace("./home.html")
    }
}

