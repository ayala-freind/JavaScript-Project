const continer = document.getElementById('continer');
const level_one = 9;
const level_two = 49;
const level_three = 100;
var curentLevel;
let arr = [];
var examplesContainer = document.getElementById("examples");
const btn_one = document.getElementById('btn_one').onclick = () => {

    const imgs = examplesContainer.querySelectorAll('img');
    imgs.forEach(img => {
        img.remove();
    });
    DrawBoard(level_one);
}
const btn_two = document.getElementById('btn_two').onclick = () => {
    const imgs = examplesContainer.querySelectorAll('img');
    imgs.forEach(img => {
        img.remove();
    });
    DrawBoard(level_two);
}
const btn_three = document.getElementById('btn_three').onclick = () => {
    const imgs = examplesContainer.querySelectorAll('img');
    imgs.forEach(img => {
        img.remove();
    });
    DrawBoard(level_three);
}
let DrawBoard = (level) => {
    const squres = document.querySelectorAll('.squre');
    squres.forEach(squre => {
        squre.remove();

    });

    for (let j = 0; j < level; j++) {
        const squre = document.createElement("span");
        switch (level) {
            case 9:
                squre.classList.add("squre_one");
                curentLevel = 1;
                break;
            case 49:
                squre.classList.add("squre_two");
                curentLevel = 2;
                break;
            case 100:
                squre.classList.add("squre_three");
                curentLevel = 3;
                break;
        }
        continer.appendChild(squre);
        squre.classList.add("squre");
    }
    arr = document.querySelectorAll('.squre');
    arr.forEach((s) => {

        s.ondragenter = (event) => {
            event.preventDefault();
        };
        s.ondrop = (event) => {
            event.preventDefault();
            console.log(event);
        };
        s.ondragover = (event) => {
            event.preventDefault();
            s.style.backgroundColor = color;

        }
    });

}
const dom = {
    squreColor: Array.from(document.getElementsByClassName('squre-color')),
    eraser: document.getElementById('eraser'),
    colorCoise: document.getElementById('colorCoise'),
    squreColorWhite: document.querySelector('squre-color-white')
}

dom.squreColor.forEach((M) => {
    M.draggable = true;
    M.ondragstart = () => {
        color = M.value;
    };
});

dom.eraser.value = '#ffffff';


var examples = {
    "level_1":
    {
        0: "./ציורים/7.png",
        1: "./ציורים/8.png",
        2: "./ציורים/9.png"
    },
    "level_2":
    {
        0: "./ציורים/4.png",
        1: "./ציורים/5.png",
        2: "./ציורים/6.png"
    },
    "level_3":
    {
        0: "./ציורים/1.png",
        1: "./ציורים/2.png",
        2: "./ציורים/3.png"
    }
};

document.getElementById('jobs').onclick = () => {

    switch (curentLevel) {
        case 1:
            var tt = examples["level_1"];

            for (let x in tt) {
                img = document.createElement("img");
                img.setAttribute("src", tt[x]);
                examplesContainer.appendChild(img);
            }
            break;

        case 2:
            var tt = examples["level_2"];

            for (let x in tt) {
                img = document.createElement("img");
                img.setAttribute("src", tt[x]);
                examplesContainer.appendChild(img);
            }
            break;
        case 3:
            var tt = examples["level_3"];

            for (let x in tt) {
                img = document.createElement("img");
                img.setAttribute("src", tt[x]);
                examplesContainer.appendChild(img);
            }
            break;



            break;

        default:
            break;
    }
};









