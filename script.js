function mySetTimeout(delay){
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    })
}
 
mySetTimeout(2000).then(() => {
    console.log('after 2 secondes');
})

//<---------------------------------------------------->

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} 

async function makeToys() {
    console.log("wait for answear");
    await delay(3000); 
    if (Math.random() > 0.1) {
        return "Undefected";
    } else {
        return "Defected";
    }
}

async function sellToys() {
    await delay(1000); 

    if (Math.random() > 0.7) {
        return "has been sold";
    } else {
        return "noone bought it";
    }
}

async function deliverToys(status, result) {
    await delay(2000);
    
    if(result === "has been sold"){
        return `Toy with status ${status}, ${result} and was delivered`;
    }else{
        return `Toy with status ${status}, ${result} and was not delivered`;
    }
} 

async function promisify() {
    try {
        const status = await makeToys();
        const result = await sellToys();
        const deliverall = await deliverToys(status, result);
        console.log(deliverall);
    }catch(error){
        console.error(error);
    }
}

promisify();

//<---------------------------------------------------->

