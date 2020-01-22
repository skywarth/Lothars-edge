import {templateController} from '../src/ghost-templates/templateController.js';
import {subTemplateController} from "../src/ghost-templates/templateController.js";


//let prom=document.getElementById("myBtn").onclick = loadTable1();


$(document).ready( function() {
    actuals= getActuals();
    ghosts=getGhosts();
    pageActualsInitialize(actuals);
    document.getElementById("loadBarChart").addEventListener("click", async function (){
        let ret= await loadTable1();
        if(ret.status){
            elementLoaded(document.getElementById("barChartGhost"),document.getElementById("barChartActual"));
        }


    });

    /*let table1Data=await loadTable1();
    if(table1Data.status){
        elementLoaded(document.getElementById("tablePlaceholder"),document.getElementById("tableActual"));
    }*/


    //document.getElementById("tabbb2").innerHTML=subTemplateController.wavyLine;




});

