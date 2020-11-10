let person = [{
        id: 1,
        name: "Anna Johnson",
        job: "WEB DESIGNER",
        desc: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        image: "./images/anna.jpg"
    },
    {
        id: 2,
        name: "Peter Jones",
        job: "INTERN",
        desc: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
        image: "./images/peter.jpg"
    },
    {
        id: 3,
        name: "Bill Anderson",
        job: "THE BOSS",
        desc: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
        image: "./images/bill.jpg"
    },
    {
        id: 4,
        name: "Susan Smith",
        job: "WEB DEVELOPER",
        desc: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        image: "./images/susan.jpg"
    }
]
let btnBar = document.getElementById("btn-bar");
let btnToggle = document.getElementById("btn-bar");
let btnLeftBar = document.getElementById("btn-left-bar");
let btnClose = document.getElementById("btn-close");
let img = document.getElementById("img");
let name = document.querySelector(".name");
let job = document.querySelector(".job");
let desc = document.getElementById("desc");
let btnPrev = document.getElementById("prev");
let btnNext = document.getElementById("next");
let btnRandom = document.getElementById("random");
let showLinks = document.getElementById("show-links");
let showHeader = document.getElementById("show-header");
let btnCloseModal = document.getElementById("btn-close-modal");
let modal = document.querySelector(".modal");
let modalContentProfile = document.querySelector(".modal-content-profile");
let btnMoreInfo = document.getElementById("more-info");
let btnLessInfo=document.getElementById("less-info");
let descProfile=document.querySelector(".desc-profile");
let switchBtn = document.querySelector(".switch-btn");
let slideSwitch = document.querySelector(".slide-switch");
let video=document.querySelector(".video-container");
let preloader = document.querySelector(".preloader");



btnToggle.addEventListener("click", funcToggle);
btnLeftBar.addEventListener("click", funcLeftBar);
btnClose.addEventListener("click", funcClose);
btnPrev.addEventListener("click", funcPrev);
btnNext.addEventListener("click", funcNext);
btnRandom.addEventListener("click", funcRandom);
img.addEventListener("click", funcShowModal);
btnCloseModal.addEventListener("click", funcCloseModal);
btnMoreInfo.addEventListener("click",funcMoreInfo);
btnLessInfo.addEventListener("click",funcLessInfo);
switchBtn.addEventListener("click",funcVideo);


let count = 0;









window.addEventListener("load",()=>{
    preloader.classList.add("hide-preloader");
});
function funcVideo(){
    if(slideSwitch.classList.contains("move-slide")){
        slideSwitch.classList.remove("move-slide");
        video.play();
    }else{
        slideSwitch.classList.add("move-slide");
        video.pause();
    }
}

function funcToggle() {
    //showLinks.classList.toggle("show-links");
    if (showLinks.classList.contains("show-links")) {
        showLinks.classList.remove("show-links");
        btnToggle.style.transform = "rotate(90deg)"
    } else {
        showLinks.classList.add("show-links");
        btnToggle.style.transform = "rotate(0deg)"
    }

}

function funcLeftBar() {
    if (showHeader.classList.contains("show-header")) {
        showHeader.classList.remove("show-header");
        btnLeftBar.style.transform = "rotate(90deg)"
    } else {
        showHeader.classList.add("show-header");
        btnLeftBar.style.transform = "rotate(0deg)"
    }
}

function funcClose() {
    showHeader.classList.add("show-header");
}


function funcShowModal() {

    modal.classList.add("show-modal");
    modalContentProfile.textContent = person[count].name;
}

function funcCloseModal() {
    modal.classList.remove("show-modal");
}
function funcMoreInfo(){
    descProfile.textContent= person[count].desc;
    descProfile.style.display ="block";
    btnMoreInfo.style.display ="none";
    btnLessInfo.style.display ="block";
}
function funcLessInfo(){
    descProfile.textContent= person[count].desc;
    descProfile.style.display ="none";
    btnLessInfo.style.display ="none";
    btnMoreInfo.style.display ="block";
}









function funcPrev() {
    count--;
    if (count < 0) {
        count = person.length - 1;
    }
    changeInfo();
    funcLessInfo();
}

function funcNext() {
    count++;
    if (count > person.length - 1) {
        count = 0;
    }
    changeInfo();
    funcLessInfo();
}

function funcRandom() {
    let randomNum = Math.floor(Math.random() * person.length);
    while (randomNum == count) {
        randomNum = Math.floor(Math.random() * person.length);
    }
    count = randomNum;
    changeInfo();
}

function changeInfo() {
    img.src = person[count].image;
    name.textContent = person[count].name;
    job.textContent = person[count].job;
    desc.textContent = person[count].desc;
}