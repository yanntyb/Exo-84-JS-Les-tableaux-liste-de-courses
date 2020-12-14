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
    let liste = Array.from(tab);
    let index = liste.indexOf(li);
    if(index - 1 >= 0){
        const buffer = tab[index];
        ul.insertBefore(buffer, tab[index - 1]);
    }
}

function down(tab,li){
    let liste = Array.from(tab);
    let index = liste.indexOf(li);
    if(index + 1 < liste.length - 1){
        const buffer = tab[index];
        ul.insertBefore(tab[index + 1], buffer);
    }
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
        let tab = document.getElementsByTagName("li");
        down(tab,li);
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
            let tab = document.getElementsByTagName("li");
            down(tab,li);
        })
        li.appendChild(button);
        li.appendChild(buttonUp);
        li.appendChild(buttonDown);
        buttonUp.addEventListener("click",function (){
            let tab = document.getElementsByTagName("li");
            up(tab,li);
        });
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




