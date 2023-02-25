
let audio = new Audio("beep2.mp3")

function ff() {
    audio.load();
    audio.play();
}


function Shift() {
    let xx = document.querySelectorAll(".btn");
    xx.forEach((btn)=>{
          btn.classList.toggle('is-flipped');

        });
        Keyboardinp.focus();
}
    
function St() {
    Keyboardinp.value = Keyboardinp.value + "<";
    Keyboardinp.focus();
}
function Ke() {
    Keyboardinp.value = Keyboardinp.value + ">";
    Keyboardinp.focus();
}
function Backbtn() {

    let x = document.getElementById("Keyboardinp").value;
    x = x.split('');
    if (x.length != 0) {
        x.pop();
    }else {
        return 0;
    }
    if (x.length != 1) {
        x = x.join('');
    }else{
        Keyboardinp.value = x
    }
    
    Keyboardinp.value = x
    Keyboardinp.focus();

}

function Enterbtn() {
    Keyboardinp.value = "";
}

function Space() {
    Keyboardinp.value +=  " "
    Keyboardinp.focus();
}

function ColorChange() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    document.getElementsByClassName("Keyboard")[0].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    Keyboardinp.focus();
}

let arr = document.querySelectorAll(".btn2")

for (let i of arr) {
    i.addEventListener('click' , () => {
        Keyboardinp.value += i.innerHTML;
        Keyboardinp.focus();
    })
}

function KeyboardShow() {
    keybord.classList.toggle("keyhide");
    btnn.classList.toggle("btnf");
}
function KeyboardHide() {
    keybord.classList.toggle("keyhide");
    btnn.classList.toggle("btnf");
}
function NumberChange() {
    if (qbtn.innerHTML == "q" || qbtn.innerHTML == "🤣"){
        qbtn.innerHTML = 1
        wbtn.innerHTML = 2
        ebtn.innerHTML = 3
        rbtn.innerHTML = 4
        tbtn.innerHTML = 5
        ybtn.innerHTML = 6
        ubtn.innerHTML = 7
        ibtn.innerHTML = 8
        obtn.innerHTML = 9
        pbtn.innerHTML = 0

    }else{
        qbtn.innerHTML = "q"
        wbtn.innerHTML = "w"
        ebtn.innerHTML = "e"
        rbtn.innerHTML = "r"
        tbtn.innerHTML = "t"
        ybtn.innerHTML = "y"
        ubtn.innerHTML = "u"
        ibtn.innerHTML = "i"
        obtn.innerHTML = "o"
        pbtn.innerHTML = "p"

    }
}

function SmileChange() {
    if (qbtn.innerHTML == "q" || qbtn.innerHTML == 1 || qbtn.innerHTML == "Q"){
        qbtn.innerHTML = "🤣"
        wbtn.innerHTML = "😄"
        ebtn.innerHTML = "😑"
        rbtn.innerHTML = "😭"
        tbtn.innerHTML = "😐"
        ybtn.innerHTML = "😅"
        ubtn.innerHTML = "😎"
        ibtn.innerHTML = "👍"
        obtn.innerHTML = "🤔"
        pbtn.innerHTML = "🥶"

    }else{
        qbtn.innerHTML = "q"
        wbtn.innerHTML = "w"
        ebtn.innerHTML = "e"
        rbtn.innerHTML = "r"
        tbtn.innerHTML = "t"
        ybtn.innerHTML = "y"
        ubtn.innerHTML = "u"
        ibtn.innerHTML = "i"
        obtn.innerHTML = "o"
        pbtn.innerHTML = "p"

    }
}