const menu = [{
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "../images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "../images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "../images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "../images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "../images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "../images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "../images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "../images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "../images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "steak dinner",
        category: "dinner",
        price: 39.99,
        img: "../images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

let menuSection = document.querySelector(".menu-section");
let btnContainer =document.querySelector(".btn-container");



window.addEventListener("DOMContentLoaded", ()=>{
    displayItem(menu);
    displayButtonCategory();
});










function displayItem(menuItem){
    let itemDisplay = menuItem.map((item)=>{
        return `<div class="item-container">
        <img class="img-item" src=${item.img} alt=${item.title}>
        <div class="info-item">
            <div class="title-item">
                <h3 class="item-name">${item.title}</h3>
                <h3 class="price">$${item.price}</h3>
            </div>
            <article class="desc-item">
                ${item.desc}
            </article>
        </div>
    </div>`;
    }).join("");

    menuSection.innerHTML = itemDisplay;
}

function displayButtonCategory(){
    let categories = menu.reduce((value,item)=>{
        if (!value.includes(item.category)){
            value.push(item.category);
        }
        return value;
    },["all"]);
    let categoryBtns = categories.map((item)=>{
        return `<button class="btn-category" type="button" data-id=${item}>${item}</button>`;
    }).join("");
    btnContainer.innerHTML =categoryBtns;
    let btnCategory = btnContainer.querySelectorAll(".btn-category");
    btnCategory.forEach((btn)=>{
        btn.addEventListener("click",(event)=>{
            let category = event.currentTarget.dataset.id;
            let menuCategory = menu.filter((itemMenu)=>{
                if (category === itemMenu.category)
                    return itemMenu;
            });
            if (category == "all")
                displayItem(menu);
            else
                displayItem(menuCategory);
        });
    });
}