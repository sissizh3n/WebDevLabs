// let x = 5;
// let y = 7;
// let z = x + y;
// console.log(z);

// let A = "Hello ";
// let B = "World!";
// let C = A + B;
// console.log(C);

// function SumNPrint(x1, x2) {
//     let x3 = x1 + x2;
//     return x3
// }

// console.log(SumNPrint(x, y));
// console.log(SumNPrint(A, B));

// if (C.length > z) {
//     console.log(C)
// } else if (C.length < z) {
//     console.log(z)
// } else {
//     console.log("good job!")
// }

// let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
// let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function findTheBanana(L) {
//     for (let i = 0; i < L.length; i++) {
//         if (L[i] == "Banana") {
//             alert("found the Banana in " + i);}
//         }
// }

// console.log(findTheBanana(L1));
// console.log(findTheBanana(L2));

// function findTheBanana(item, index) {
//     if (item=="Banana") {
//         alert("found the Banana in " + index);}
// }

// L1.forEach(findTheBanana);
// L2.forEach(findTheBanana);

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

greetingFunc();

// if (window.location.href.includes("index.html")) {
//     window.onload = greetingFunc;
// }

function addYear() {
    console.log("addYear is working");
    var currentYear = new Date().getFullYear();
    document.getElementById("copyYear").innerHTML = currentYear;
}

function showList() {
    console.log("showList is working")
    document.getElementById("funList").style.display = "block";
    document.getElementById("funButton").style.display = "none";
}

// function toggleBio() {
//     console.log("toggleBio is working");
//     var shortBio = document.getElementById("shortBio");
//     var longBio = document.getElementById("longBio");
//     var readMore = document.getElementById("readMore");
//     var readLess = document.getElementById("readLess");

//     if (longBio.style.display == "none") { // when the longBio is not there before the click, make it appear
//         shortBio.style.display = "none";
//         longBio.style.display = "block";
//         readMore.style.display = "none";
//         readLess.style.display = "block";
//     } else { // when the longBio is there before the click, make it disappear
//         shortBio.style.display = "block"; 
//         longBio.style.display = "none";
//         readMore.style.display = "block";
//         readLess.style.display = "none";
//     }
// }

$("#readLess").click(function() {
    $("#longBio").hide();
    $("#readLess").hide();
    $("#readMore").show();
});

$("#readMore").click(function() {
    $("#longBio").show();
    $("#readLess").show();
    $("#readMore").hide();
});


function validate() {
    console.log("validate is working")
    var inputName = document.getElementById("name");
    var inputEmail = document.getElementById("email");
    var inputComment = document.getElementById("comment");
    var messenge = document.getElementById("inputInvalidMsg");

    if (!inputName.checkValidity()||!inputEmail.checkValidity()||!inputComment.checkValidity()) {
        messenge.innerHTML = "Please fill out the form correctly so I can get back to you :)";
        messenge.style.display = "block";
        // return false;
    } else {
        messenge.style.display = "none";
        // return true;
    }
}

if (window.location.href.includes("index.html")) {
    // window.onload = addYear();
    window.onlond = function () {
        greetingFunc();
    }
}
// if (window.location.href.includes("fun.html")) {
//     window.onload = addYear();
// }
// if (window.location.href.includes("cv.html")) {
//     window.onload = addYear();
// }
// if (window.location.href.includes("contact.html")) {
//     window.onload = addYear();
// }