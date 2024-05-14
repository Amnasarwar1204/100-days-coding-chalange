let guestList : string[] = ["Uncle Zafar","miss Rana","Sonia"];


for (let index = 0; index < guestList.length; index++) {
    console.log(`${ guestList[index]} : i would like to invite for dinner at my place`);
    
}


guestList.forEach(guestList => {
    console.log(`\nI would like to invite for dinner ${ guestList}`);
});