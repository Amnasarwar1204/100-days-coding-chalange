function cars(manufacturer:string , model:string , ...keyword : [string,any][]){
    let info = {
        manufacturer,model
 };
 keyword.forEach(([key, value]) => (info[key] = value));
  return info;
}

console.log(cars("Toyota", "Carolla", ["color", "red"], ["year", 2020]));
console.log(cars("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));

