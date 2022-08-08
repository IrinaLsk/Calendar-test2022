const input = document.querySelector("#input");
// const prevMonth = document.querySelector(".btn-prev");
// const nextMonth = document.querySelector(".btn-next");


input.addEventListener("keydown", enter);

function enter(e) {
    if(e.keycode === 13){
        getInfo(input.value);
    }
    console.log('Hey!')
}

const box = document.querySelectorAll("td");

box.forEach (function (td) {
    td.addEventListener('click', () => {
        td.classList.add(".open-popup")
    })
})


let popupBg = document.querySelector('.popup__bg'); 
let popup = document.querySelector('.popup'); 
let openPopupButtons = document.querySelectorAll('.open-popup'); 
let closePopupButton = document.querySelector('.close-popup'); 

openPopupButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        popupBg.classList.add('active'); 
        popup.classList.add('active'); 
    })
});

closePopupButton.addEventListener('click',() => { 
    popupBg.classList.remove('active'); 
    popup.classList.remove('active'); 
});

document.addEventListener('click', (e) => { 
    if(e.target === popupBg) { 
        popupBg.classList.remove('active'); 
        popup.classList.remove('active'); 
    }
});


let create = document.querySelector('.create'); 
let createForm = document.querySelector('.create-form'); 
let openCreateButtons = document.querySelectorAll('.open-create'); 
let closeCreateButton = document.querySelector('.close-create'); 

openCreateButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        create.classList.add('active'); 
        createForm.classList.add('active'); 
    })
});

closeCreateButton.addEventListener('click',() => { 
    create.classList.remove('active'); 
    createForm.classList.remove('active'); 
});

document.addEventListener('click', (e) => { 
    if(e.target === create) { 
        create.classList.remove('active'); 
        createForm.classList.remove('active'); 
    }
});



















    
    


