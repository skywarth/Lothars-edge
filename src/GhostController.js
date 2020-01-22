async function elementLoaded(placeholder, actual) {
    $(actual).removeClass('d-none');
    //$(placeholder).addClass('d-none');
    $(placeholder).remove();


    //$(placeholder).addClass('successfully-saved');
    
}

//was non-async
async function pageActualsInitialize(actuals/*placeholders*/) {
    for (var i = 0; i < actuals.length; i++) {
        $(actuals[i]).addClass('d-none');
    }
}
//pageActualsInitialize($('[data-actuality="actual"]'));



function getActuals(){
    return $('[data-actuality="actual"]');
}



function getGhosts() {
    return $('[data-actuality="ghost"]');
}