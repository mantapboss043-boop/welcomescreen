const menu =
document.querySelectorAll(".item");

let current=0;

function updateMenu(){

    menu.forEach(
        x=>x.classList.remove("active")
    );

    menu[current]
        .classList.add("active");
}

document.addEventListener(
"keydown",
function(e){

    if(e.keyCode==22){

        current++;

        if(current>5)
            current=5;

        updateMenu();
    }

    if(e.keyCode==21){

        current--;

        if(current<0)
            current=0;

        updateMenu();
    }

    if(e.keyCode==23){

        openMenu();
    }

    if(e.keyCode==4){

        current=0;

        updateMenu();
    }
});

function openMenu(){

    switch(current){

        case 0:
            location.href=
            "tv.html";
            break;

        case 1:
            location.href=
            "hotelinfo.html";
            break;

        case 2:
            location.href=
            "service.html";
            break;

        case 3:
            location.href=
            "restaurant.html";
            break;

        case 4:
            location.href=
            "weather.html";
            break;

        case 5:
            location.href=
            "settings.html";
            break;
    }
}

let idle=0;

setInterval(()=>{

    idle++;

    if(idle>=30){

        current=0;

        updateMenu();

        idle=0;
    }

},1000);

document.addEventListener(
"keydown",
function(){

    idle=0;

});

if(e.keyCode==4){

    window.location=
    "welcome.html";
}