async function loadTable1(){



await sleep(2000);
let data=new dataPack('some data',true);
return data;



}


async function loadTable2(){



    await sleep(1500);
    let data=new dataPack('some data',true);
    return data;



}


/*
async function testProm(){

let val=false;
let myFirstPromise = new Promise(async(resolve, reject) => {
    await sleep(3000);
if(val){
    resolve('i done done it');
}
else{
    reject('shame');
}

});
return myFirstPromise;
}


async function qq(){


let prom2=testProm();
while(true){

    console.log(prom2);
    await sleep(200);
}


}
qq();*/