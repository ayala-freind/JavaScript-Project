
const squares = Array.from(document.querySelectorAll('.square'));

const htmlScore = document.getElementById('score');
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');


let score = 0;

op2.onclick = function () {
    squares[0].classList.add('blue')
    squares.forEach(handleSquare);
    function handleSquare(square) {
        square.onclick = function () {
            if (square.classList.contains('blue')) {
                handleScoreChanged(20);
            }
            else {
                if (square.classList.contains('red')) {
                    handleScoreChanged(10);
                }

                else {
                    handleScoreChanged(-5);
                }
            }


            removeRed();

            generateRedElement();

            removeBlue();
            generateBlueElement();
        }
    }

    function handleScoreChanged(value) {
        score += value;
        htmlScore.innerHTML = score;
    }

    function removeRed() {
        squares.forEach(function (square) {
            square.classList.remove('red');
        })
    }
    function removeBlue() {
        squares.forEach(function (square) {
            square.classList.remove('blue');
        })
    }


    function generateRedElement() {
        const randEl = random(0, squares.length)
        squares[randEl].classList.add('red');
    }
    function generateBlueElement() {
        const randEl = random(0, squares.length)
        squares[randEl].classList.add('blue');
    }

    // פונקציית random
    // Math.random() - פונקציית מערכת המחזירה מספר רנדומלי בין 0 ל 1
    // Math.floor - עיגול כלפי מטה
    function random(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}
op1.onclick = function () {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].classList.contains('blue')) {
            squares[i].classList.remove('blue');
        }
    }
    squares.forEach(handleSquare);
    function handleSquare(square) {
        square.onclick = function () {

            if (square.classList.contains('red')) {
                handleScoreChanged(10);
            }

            else {
                handleScoreChanged(-5);
            }
            removeRed();
            generateRedElement();
        }
    }
    function handleScoreChanged(value) {
        score += value;
        htmlScore.innerHTML = score;
    }

    function removeRed() {
        squares.forEach(function (square) {
            square.classList.remove('red');
        })
    }

}
function generateRedElement() {
    const randEl = random(0, squares.length)
    squares[randEl].classList.add('red');
}
// פונקציית random
// Math.random() - פונקציית מערכת המחזירה מספר רנדומלי בין 0 ל 1
// Math.floor - עיגול כלפי מטה
function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

setTimeout(function () {
    alert("הזמן נגמר, השגת  "+score+"  נקודות"  );
    // alpha_list('reset');
  }, 8000);




