let favBikes:string[] = ["Harley-Davidson Fat Boy","Ducati Diavel","Yamaha VMAX","Kawasaki Ninja H2","BMW R 1250 GS Adventure"]


//one way to do it
for (let index = 0; index < favBikes.length; index++) {
    console.log(`My favourite bike is: ${favBikes[index]}`);
}


//second way to do
    favBikes.forEach(favBikes => {
        console.log(`I would like to own: ${favBikes}`);
        
    });
    
