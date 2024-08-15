
const title = document.getElementsByTagName("h1");
// tagmane = h1, div... 이런것들
//console.log(title);

//queryselector - 
const title1 = document.querySelector(".hello h1");
// hello 라는 class 안에 h1 을 찾아줘 
// 하나만 찾아준다. 

const titles = document.querySelectorAll(".hello h1");
const firstTitles = document.querySelector(".hello h1:first-child");

console.log(titles);
console.log(firstTitles);

firstTitles.innerText = "hello";

const title2 = document.querySelector("div.hello:first-child h1");
console.dir(title2);

// Event

function handleTitleClick() {
    title2.style.color = "blue";
}

//title2.addEventListener("click", handleTitleClick);
// click 이라는 event가 실행 되었을 때 실행하는 함수를 전달 
// (하지만 실행시지키는 않기 위해() 붙이지 않음)
// 실행하는 event 는 console.dir -> "on" 이 붙어있는 것이 event 
title2.onclick = handleTitleClick;
// 위와 같은 코드 

function handelMouseEnter() {
   title2.innerText = "mouse is here!";
}

function handelMouseLeave() {
    title2.innerText = "gone now";
}

title2.addEventListener("mouseenter", handelMouseEnter);
title2.addEventListener("mouseleave", handelMouseLeave);

// window event
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowOffline() {
    alert("SOS help");
}

function handleWindowOnline() {
    alert("All Goooood");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);


//const title3 = querySelector("div .hello:nth-child(2) h1");

const title3 = document.querySelector("div.hello:nth-child(2) h1");

function handleTitle3Click2() {
    const currentColor = title3.style.color;
    let newColor;
    if(currentColor === "blue") {
        //title3.style.color = "tomato";
        newColor = "tomato";
    }
    else {
        //title3.style.color = "blue";
        newColor = "blue";
    }
    title3.style.color = newColor;
}

function handleTitle3Click3() {
    const clickedClass = "clicked";
    if(title3.className === clickedClass) {
        title3.className = "";
    }
    else {
        title3.className = clickedClass;
    }
    console.log(title3.className);
}
// class 이름 자체를 replace 해버리는 문제가 발생

function handleTitle3Click4() {
    const clickedClass = "clicked";
    if(title3.classList.contains(clickedClass)) {
        title3.classList.remove(clickedClass);
    }
    else {
        title3.classList.add(clickedClass);
    }
    console.log(title3.className);
}

function handleTitle3Click() {
    title3.classList.toggle("clicked");
}
// clicked 가 classlist 에 있으면 삭제, 없으면 추가

title3.addEventListener("click", handleTitle3Click);