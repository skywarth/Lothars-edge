


$( document ).ready(async function() {
    actuals=getActuals();
    ghosts=getGhosts();
    pageActualsInitialize(actuals);



     let table1Data=await loadTable1();
    if(table1Data.status){
        elementLoaded(document.getElementById("tablePlaceholder"),document.getElementById("tableActual"));
    }


await sleep(1500);
    /*let tempController;
    tempController=new templateController();
    document.getElementById("tabbb").innerHTML=tempController.ghostTablev1;*/
});

