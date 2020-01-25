async function elementLoaded(placeholder, actual) {
    actual.classList.remove("d-none");
    //$(placeholder).addClass('d-none');
    placeholder.remove();
    //$(placeholder).addClass('successfully-saved');
    
}

//was non-async
async function pageActualsInitialize(actuals/*placeholders*/) {
    for (let i = 0; i < actuals.length; i++) {
        //$(actuals[i]).addClass('d-none');
        actuals[i].classList.add("d-none");
    }
}

//pageActualsInitialize($('[data-actuality="actual"]'));



function getActuals(){
    //return $('[data-actuality="actual"]');
    return document.querySelectorAll("[data-actuality='actual']");
}



function getGhosts() {
    return document.querySelectorAll("[data-actuality='ghost']");
}