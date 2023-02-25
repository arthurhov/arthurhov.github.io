btn3.style.display = "none";
div1.style.display = "none";
div2.style.display = "none";
p2.style.display = "none";
p3.style.display = "none";
p4.style.display = "none";

img1.addEventListener('click' , () => {

        btn3.style.display = "block";
        div1.style.display = "flex";
        div2.style.display = "flex";
        p2.style.display = "block";
        p3.style.display = "block";
        p4.style.display = "block";

})
btn3.addEventListener('click' , () => {
    btn3.style.display = "none";
    div1.style.display = "none";
    div2.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";
    p4.style.display = "none";
})
let x = Math.floor(Math.random() * 100);
h1_1.style.display = "block";
console.log(x);
btn2.style.display = 'none';

let y = +document.getElementById("inp1").value;
    let z = document.getElementById('p1').innerHTML;

    let i = z.split(" ");
    
btn2.addEventListener('click' , () => {
    window.location.reload();
})

inp1.addEventListener('keypress' , (event) => {

    if (i.length < 10 && x != y) {

        if (event.key == "Enter") {

            document.getElementById("btn1").click();
            inp1.value = '';

        }
    }

})

btn1.addEventListener('click', () => {

    y = +document.getElementById("inp1").value;
    let z = document.getElementById('p1').innerHTML;
    if (!isNaN(y)) {
        p1.innerHTML = z + ' ' + y;
    }
    else {
        h1_1.innerHTML = "Type only Numbers";
    }

    i = z.split(" ");

    if (i.length == 10) {
        h1_1.innerHTML = "Try again You Lose";
        btn1.style.display = "none";
        btn2.style.display = "inline-block";
    }
    
    else{
        if ( x > y) {
            h1_1.innerHTML = "Number is Small";
            h1_1.style.color = "red";
        }
        if ( x < y) {
            h1_1.innerHTML = "Number is Big";
            h1_1.style.color = "red";
        }
        if (x == y){
            btn2.style.display = "inline-block"
            btn1.style.display = "none"
            h1_1.innerHTML = "Correct";
            h1_1.style.color = "lime";
        }
    }
    
});
