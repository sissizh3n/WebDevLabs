

let x = 5;
let y = 7;
let z = x + y;
console.log(z);

let A = "Hello ";
let B = "World!";
let C = A + B;
console.log(C);

function SumNPrint(x1, x2) {
    let x3 = x1 + x2;
    return x3
}

console.log(SumNPrint(x, y));
console.log(SumNPrint(A, B));

if (C.length > z) {
    console.log(C)
} else if (C.length < z) {
    console.log(z)
} else {
    console.log("good job!")
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function findTheBanana(L) {
//     for (let i = 0; i < L.length; i++) {
//         if (L[i] == "Banana") {
//             alert("found the Banana in " + i);}
//         }
// }

console.log(findTheBanana(L1));
console.log(findTheBanana(L2));

function findTheBanana(item, index) {
    if (item=="Banana") {
        alert("found the Banana in " + index);}
}

L1.forEach(findTheBanana);
L2.forEach(findTheBanana);

function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let greeting;

    if (h<12) {
        greeting = "Good morning";
    } else if (h<18) {
        greeting = "Good afternoon";
    } else if (h<20) {
        greeting = "Good evening";
    } else if ((20<=h && h<24) || (h>=0 && h<5)) {
        greeting = "Good night";
    }
    let userName="Sissi";
    let E = document.getElementById("greeting");
    E.innerHTML = `${greeting}, I am ${userName}`;
}

if (window.location.href.includes("index.html")) {
    window.onload = greetingFunc;
}

