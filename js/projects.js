let date = document.querySelector(".date");
let navCenter = document.querySelector(".nav-center");
let btnNavBar = document.getElementById("nav-bar");
let linksContainer = document.querySelector(".links-container");
let links = document.querySelector(".links");
let moveTop = document.querySelector(".move-top");

let scrollLinks = document.querySelectorAll(".scroll-link");




let heightLinks = links.getBoundingClientRect().height;



btnNavBar.addEventListener("click", funcShowLinks);



date.innerHTML = new Date().getFullYear();


window.addEventListener("scroll", () => {
    let heightNavCenter = navCenter.getBoundingClientRect().height;
    let heightWindow = window.pageYOffset;
    if (heightWindow > heightNavCenter) {
        navCenter.classList.add("show-fixed");

    } else {
        navCenter.classList.remove("show-fixed");

    }
    if (heightWindow > 400) {
        moveTop.classList.add("show-move-top");
    } else {
        moveTop.classList.remove("show-move-top");
    }
})


function funcShowLinks() {
    let linksHeight = links.getBoundingClientRect().height;
    let linksContainerHeight = linksContainer.getBoundingClientRect().height;
    if (linksContainerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
        document.getElementById("banner").style.paddingTop = "20px";
        btnNavBar.style.transform = "rotate(0deg)";
    } else {
        linksContainer.style.height = "0px";
        document.getElementById("banner").style.paddingTop = "30vh";
        btnNavBar.style.transform = "rotate(90deg)";
    }
}

let nav = document.getElementById("nav");
scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        let id = e.currentTarget.getAttribute("href").slice(1);
        let element = document.getElementById(id);
        let heightNav = navCenter.getBoundingClientRect().height;
        let fixed = navCenter.classList.contains("show-fixed");
        let heightContainer = linksContainer.getBoundingClientRect().height;
        let heightFixed = document.querySelector(".show-fixed");
        let position = element.offsetTop - heightNav;
        let navHeader = document.querySelector(".nav-header");
        let heightNavHeader = navHeader.getBoundingClientRect().height;
        if (heightContainer > 182) {
            position = position + heightContainer;
        }
        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;

    })
})


// DeadeLine Section

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

let toDay = new Date();
let tempYears = toDay.getFullYear();
let tempMonths = toDay.getMonth();
let tempDays = toDay.getDate();
let tempHours = toDay.getHours();
let tempMinutes = toDay.getMinutes();

let deadlineDay = new Date(tempYears, tempMonths+1, tempDays , tempHours, tempMinutes);

let futureYear = deadlineDay.getFullYear();
let futureMonths = deadlineDay.getMonth();
let futureDay = deadlineDay.getDate();
let futureHours = deadlineDay.getHours();
let futureMinutes = deadlineDay.getMinutes();
let futureTime = deadlineDay.getTime();

let week = weekdays[deadlineDay.getDay()];
let month = months[futureMonths];

let deadline = document.querySelector(".deadline");

deadline.innerHTML = `Deadline On ${week}, ${futureDay} ${month} ${futureYear} ${futureHours}:${futureMinutes}am`;



function remainingTime() {
    let toDay=new Date();
    let todayTime = toDay.getTime();
    let remTime = futureTime - todayTime;
    let Day = 24 * 60 * 60 * 1000;
    let Hour = 60 * 60 * 1000;
    let Minute = 60 * 1000;
    let Second = 1000;
    let days = Math.floor(remTime / Day);
    let hours = Math.floor((remTime % Day) / Hour);
    let minutes = Math.floor((remTime % Hour) / Minute);
    let seconds = Math.floor((remTime % Minute) / Second);
    let arrRemainTime = [days, hours, minutes, seconds];
    let timeBox = document.querySelectorAll(".time");

    function formatTime(time){
        if (time <10){
            return `0${time}`;
        }
        return time;
    }


    timeBox.forEach((item,index)=>{
        item.innerHTML = `${formatTime(arrRemainTime[index])}`;
        
    })
    let deadlineCenter = document.querySelector(".deadline-center");
    if (remTime <= 0){
        deadlineCenter.innerHTML = `<h3 class="alert-deadline-end">Deadline ended ! Can't Submission -.-</h3>`
    }

}
let countDown = setInterval(remainingTime,1000);