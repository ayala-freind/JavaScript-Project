
let alphabets_list = document.querySelector('.alphabets_list');
const hint_div = document.querySelector('.hint_div');
let hint_txt = document.getElementById("hint_txt")
const build_the_word = document.getElementById('build_the_word');
const number_of_tries = document.querySelector('.number_of_tries');
const reset_btn = document.querySelector('.reset_btn');
let lives = document.querySelector('.lives');

//בניית מאגר מילים
const words = new Map([
  ['מורה', 'בית ספר'],
  ['אריה', 'מלך החיות'],
  ['מטוס', 'כלי תחבורה'],
  ['מטריה', 'חורף'],
  ['דולפין', 'ים'],
  ['שולחן','רהיטים'],
  ['עגילים', 'תכשיטים'],
  ['פיצה', 'איטליה'],
  ['פירות-קיץ', 'קיץ'],
  ['גלגל-ים','בריכה'],
  
])
let letters;
let index;
let ab = "-אבגדהוזחטיכךלמםנןסעפףצץקרשת";
let line_word_list;
// שליפת רק הרמזים מהמפה מהאוצר מילים
const the_hints = [...words.values()];
// שליפת רק המילים מהמפה מהאוצר מילים
const the_words = [...words.keys()];
//הגרלת מילה
const randomWord = function () {
  let index = Math.floor(Math.random() * the_words.length);
  return index;
};

//ופסים להשלמת המילה בניית לחצני האותיות
alpha_list = (status) => {
  if (status === 'start') {
    for (const i of ab) {
      const btnab = document.createElement("button");
      btnab.classList.add("one_ab");
      btnab.textContent = i.toUpperCase();
      alphabets_list.appendChild(btnab);
    }
    letters = document.querySelectorAll(".one_ab");
  }
  else {
    if (status === 'reset') {
      // for (const i of ab) {
      letters.forEach((btn) => {
        btn.classList.remove('active');
        //  btn.classList.add('one_ab');
      });
      line_word_list.forEach((element) => {
        element.classList.remove('line_word');
        element.innerHTML = '';
      });
      lives.innerHTML = '5';
      document.getElementById("hint_txt").innerHTML = '';
    }
  }
  //הפעלת פונקציה להגרלת מילה
  index = randomWord();
  letters.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.add("active");
    });
  });
  //יצירת קוים למילה חדשה
  for (let i = 0; i < the_words[index].length; i++) {
    const line_word = document.createElement("span");
    line_word.classList.add("line_word");
    line_word.textContent = "___";
    build_the_word.appendChild(line_word);
  }
  line_word_list = document.querySelectorAll('.line_word');
}


//הדפסה והצבת הרמז בעת לחיצה
document.getElementById('hint_btn').onclick = function () {
  document.getElementById("hint_txt").innerHTML = the_hints[index];
}

//פונקציה שבודקת את הכפתור שנלחץ  
//ומפעילה פונקציה נוספת בעת לחיצה לבדוק האם האות נמצאת במילה
let ab_click = () => {
  letters.forEach((btn) => {
    btn.onclick = (event) => {
      IfletterExsist(event.target.innerHTML);
    }
  });
}
//בודקת האם האות נמצאת במילה ומורידה את הנסיונות שנשארו
let IfletterExsist = (ind) => {
  let flag = false;
  for (let i = 0; i < the_words[index].length; i++) {

    if (the_words[index][i] === ind) {
      line_word_list[i].innerHTML = ind;
      flag = true;
      checkWon();
    }
  }
  if (!flag)
    lives.innerHTML--;
  //בדיקה האם המשחק הסתיים בכשלון 
  if (lives.innerHTML === '0') {
    alert("the game over try again");
    alpha_list('reset');
    randomWord();
  }
}

//בודקת נצחון ומציגה הודעה מתאימה
let checkWon = () => {
  let flag2 = true;
  line_word_list.forEach((letter) => {
    if (letter.innerHTML === "___")
      flag2 = false;
  });
  if (flag2) {
    alert("you won!!!!!!");
    alpha_list('reset');
  }

}

document.getElementById('reset_btn').onclick = function () {
  alpha_list('reset');
}

alpha_list('start');
ab_click();

setTimeout(function () {
  alert("הזמן נגמר");
  alpha_list('reset');
}, 1800000);

