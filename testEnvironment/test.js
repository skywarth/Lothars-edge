import {templateController} from '../src/ghost-templates/templateController.js';
import {subTemplateController} from "../src/ghost-templates/templateController.js";


//let prom=document.getElementById("myBtn").onclick = loadTable1();



document.getElementById("lineChartGhost").innerHTML=templateController.ghostLineChartv1;
document.getElementById("tableGhost").innerHTML=templateController.ghostTablev1;

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

    document.getElementById("loadLineChart").addEventListener("click", async function (){
        let ret= await loadTable1();
        if(ret.status){
            elementLoaded(document.getElementById("lineChartGhost"),document.getElementById("lineChartActual"));
        }


    });

    document.getElementById("loadTable").addEventListener("click", async function (){
        let ret= await loadTable1();
        if(ret.status){
            elementLoaded(document.getElementById("tableGhost"),document.getElementById("tableActual"));
        }


    });







    /*let table1Data=await loadTable1();
    if(table1Data.status){
        elementLoaded(document.getElementById("tablePlaceholder"),document.getElementById("tableActual"));
    }*/


    //document.getElementById("tabbb2").innerHTML=subTemplateController.wavyLine;




});

