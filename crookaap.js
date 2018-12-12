var plaatjes = [1,2,3];
var teller = 0;
var crookappGezicht = document.getElementById("crookappGezicht");
crookappGezicht.style.backgroundImage = "url(img/gezicht1.jpg)";

crookappGezicht.addEventListener("click" , function () {
    getAap();
    crookappGezicht.style.backgroundImage = "url(img/gezicht" + getAap() + ".jpg)";
});

function getAap() {
    if (teller >= plaatjes.length){
        teller = 1;
    } else {
        teller++;
    }
    console.log(teller);
    return teller;
}

var plaatjes1 = [1,2,3];
var teller1 = 0;
var crookappNeus = document.getElementById("crookappNeus");
crookappNeus.style.backgroundImage = "url(img/neus1.jpg)";

crookappNeus.addEventListener("click" , function () {
    getAap1();
    crookappNeus.style.backgroundImage = "url(img/neus" + getAap1() + ".jpg)";
});

function getAap1() {
    if (teller1 >= plaatjes1.length){
        teller1 = 1;
    } else {
        teller1++;
    }
    return teller1;
}

var plaatjes2 = [1,2,3];
var teller2 = 0;
var crookappMonden = document.getElementById("crookappMonden");
crookappMonden.style.backgroundImage = "url(img/monden1.jpg)";

crookappMonden.addEventListener("click" , function () {
    getAap2();
    crookappMonden.style.backgroundImage = "url(img/monden" + getAap2() + ".jpg)";
});

function getAap2() {
    if (teller2 >= plaatjes2.length){
        teller2 = 1;
    } else {
        teller2++;
    }
    return teller2;
}