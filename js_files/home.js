let hello = document.getElementById('hello');
hello.innerHTML = localStorage.getItem("name");



let _data
$.ajax({
    url: "./home.json",
    success: (data) => {
        _data = data.games;
        console.log(_data);
        printData();
    },
    error: (e) => {
    }
});

function printData() {
    _data.map(game => {
        if (Number(localStorage.getItem("age")) >= game.age) {
            // $("#name").append(game.name);
            $("#game").append(`<a href=${game.link} class='game1'><div>${game.name}</div><img src='${game.img}'  id='game${game.name}'/></a>`);

        }

    })
}

let flag = false;
let all_games = document.getElementById('all_games');
all_games.onclick = () => {

    document.getElementById('game').innerHTML = '';
    _data.map(game => {
        $("#name").append(game.name);
        $("#game").append(`<a href=${game.link} class='game1' ><div>${game.name}</div><img src='${game.img}' id='game${game.name}'/></a>`);
    })
}


let text_search = '';

const dom = {
    form: document.querySelector('form'),
    search_inp: document.querySelector('#search_inp')
}

dom.form.onsubmit = (event) => {
    event.preventDefault();
    text_search = dom.form.search_inp.value,
        console.log(text_search);
    search();
}


let game_html = document.getElementById('game');
const search = () => {
    // console.log(text_search);
    document.getElementById('game').innerHTML = '';
    _data.map(game => {
        if (game.for_search.includes(text_search)) {
            // console.log();
            // $("#name").append(game.name);
            // $("#game").append(`<a href=${game.link}><img src='${game.img}'/></a>`)
            $("#name").append(game.name);
            $("#game").append(`<a href=${game.link} class='game1' ><div>${game.name}</div><img src='${game.img}' id='game${game.name}'/></a>`);
        }

    })
    if (game_html === '') {
        game_html.innerHTML = "לא נמצאו תוצאות"
    }
}


// const search = () => {

//     console.log(text_search);

//     document.getElementById('game').innerHTML='';
//     _data.map(game => {
//         if (game.name.includes(text_search)) {

//             console.log(text_search);

//             $("#name").append(game.name)
//             $("#game").append(`<a href=${game.link}><img src='${game.img}'/></a>`)
//         }
//     })
// }


