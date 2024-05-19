function describe_city(cities:string[]){

    cities.forEach(cities => {
        console.log(`${cities} is in Pakistan. `)
        
    });
} 
let city: string[] = ["Karachi", "lahore", "Multan"]
describe_city(city)

//Default value

city = ["Japan","Paris"]
describe_city(city)