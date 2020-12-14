let ul = document.getElementById("listeCourse");
let input = document.getElementsByTagName("input")[0];
let button = document.getElementById("add");
let buttonSupp = document.getElementById("suppLast");

function afficherDiv(div,tab){
    let tabInner = [];
    for(let item of tab){
        let add = item.innerHTML.split("<")[0];
        tabInner.push(add);
    }
    div.innerHTML = tabInner;
}

function up(tab,li){
    let liste = Array.from(Array(tab)[0]);
    let index = liste.indexOf(li);
    console.log('up')
   /* if(index - 1 >= 0){
        let tampon = tab[index - 1].innerHTML;
        console.log(tampon)
        tab[index - 1].innerHTML = tab[index].innerHTML;
        tab[index].innerHTML = tampon;
    }
    let buttonUp = document.getElementById("up")
    buttonUp.addEventListener("click",function (){
        let tab = document.getElementsByTagName("li");
        up(tab,li);
    });*/
}


// Inutile de modifier le code suivant
let articles = [
    "Orangina",
    "Creme Fraiche",
    "Tartiflette",
    "Emmental",
    "Bananes",
    "Chips",
    "Bieres",
    "Pizza"
];

// Votre code à partir d'ici :

for(let item of articles){
    let li = document.createElement("li");
    li.innerHTML = item;
    let button = document.createElement("button");
    button.innerHTML = "supp";
    button.addEventListener("click",function (){
        li.remove();
    });
    let buttonUp = document.createElement("button");
    let buttonDown = document.createElement("button");

    buttonUp.innerHTML = "up";
    buttonUp.id = "up";
    buttonDown.innerHTML = "down";
    buttonDown.id = "down"

    buttonDown.addEventListener("click",function (){
        down(Array.from(tab));
    })
    li.appendChild(button);
    li.appendChild(buttonUp);
    li.appendChild(buttonDown);
    buttonUp.addEventListener("click",function (){
        let tab = document.getElementsByTagName("li");
        up(tab,li);
    });
    ul.appendChild(li);

}

button.addEventListener("click",function (){
    let divAfficher = document.getElementById("afficher");
    let li = document.createElement("li");
    let tab = document.getElementsByTagName("li");
    if(input.value.length > 0){
        li.innerHTML = input.value;
        ul.appendChild(li);
        afficherDiv(divAfficher, tab)
    }

})

buttonSupp.addEventListener("click",function (){
    let divAfficher = document.getElementById("afficher");
    let tab = document.getElementsByTagName("li");
    let lastLi = document.getElementsByTagName("li")[document.getElementsByTagName("li").length - 1];
    console.log(lastLi);
    lastLi.remove();
    if(tab.length > 0){
        afficherDiv(divAfficher, tab)
    }
})




