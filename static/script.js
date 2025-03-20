if (window.location.href.includes("index.html")) {
    greetingFunc();
    console.log("readLess/More jQuery is running");
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
} else if (window.location.href.includes("contact.html")) {
    initMap();
}

function greetingFunc() {
    console.log("greetingFunc is running");
    let d = new Date();
    let h = d.getHours();
    let greeting;

    if (h>=5 && h<12){
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

// greetingFunc();

// if (window.location.href.includes("index.html")) {
//     window.onload = greetingFunc;
// }
function addYear() {
    console.log("addYear is running");
    var currentYear = new Date().getFullYear();
    document.getElementById("copyYear").innerHTML = currentYear;
}

// function showList() {
//     console.log("showList is working")
//     document.getElementById("funList").style.display = "block";
//     document.getElementById("funButton").style.display = "none";
// }

function validate() {
    console.log("validate is running")
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

function getAdvice() {
    console.log("getAdvice is running");
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            document.getElementById("adviceText").innerText = data.slip.advice;
        })
        .catch(error => {
            console.error("Error fetching advice:", error);
            document.getElementById("adviceText").innerText = "Oops! Something went wrong. Try again.";
        });
}

let map;

async function initMap() {
  const position = { lat: 40.443490, lng: -79.941643 };
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 10,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Pittsburgh",
  });
}