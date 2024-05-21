let prize1 = [1200, 1500, 1100];
let prize2 = [1000, 1300, 1600];

let conbine = [...prize1,...prize2.sort((a, b) => a - b)];
console.log(conbine);
