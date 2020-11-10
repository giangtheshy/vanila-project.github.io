let date = document.querySelector(".date");
let navCenter = document.querySelector(".nav-center");
let btnNavBar = document.getElementById("nav-bar");
let linksContainer = document.querySelector(".links-container");
let links = document.querySelector(".links");
let moveTop = document.querySelector(".move-top");

let scrollLinks = document.querySelectorAll(".scroll-link");




let heightLinks = links.getBoundingClientRect().height;



btnNavBar.addEventListener("click",funcShowLinks);



date.innerHTML = new Date().getFullYear();


window.addEventListener("scroll",()=>{
    let heightNavCenter = navCenter.getBoundingClientRect().height;
    let heightWindow =window.pageYOffset;
    if (heightWindow > heightNavCenter){
        navCenter.classList.add("show-fixed");
       
    }else{
        navCenter.classList.remove("show-fixed");
        
    }
    if (heightWindow > 400){
        moveTop.classList.add("show-move-top");
    }else{
        moveTop.classList.remove("show-move-top");
    }
})


function funcShowLinks(){
    let linksHeight = links.getBoundingClientRect().height;
    let linksContainerHeight = linksContainer.getBoundingClientRect().height;
    if (linksContainerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
        document.getElementById("banner").style.paddingTop="20px";
        btnNavBar.style.transform="rotate(0deg)";
    }else{
        linksContainer.style.height = "0px";
        document.getElementById("banner").style.paddingTop="30vh";
        btnNavBar.style.transform="rotate(90deg)";
    }
}

let nav = document.getElementById("nav");
scrollLinks.forEach((link)=>{
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        let id = e.currentTarget.getAttribute("href").slice(1);
        let element = document.getElementById(id);
        let heightNav = navCenter.getBoundingClientRect().height;
        let fixed = navCenter.classList.contains("show-fixed");
        let heightContainer = linksContainer.getBoundingClientRect().height;
        let heightFixed = document.querySelector(".show-fixed");
        let position = element.offsetTop -heightNav; 
        let navHeader = document.querySelector(".nav-header");
        let heightNavHeader = navHeader.getBoundingClientRect().height;
        if(heightContainer > 182){
            position = position + heightContainer ;
        }
        window.scrollTo({
            left:0,
            top:position,
        });
        linksContainer.style.height =0;
        
    })
})