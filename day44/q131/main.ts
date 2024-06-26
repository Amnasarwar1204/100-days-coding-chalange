// In file: main.ts
export class person{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    
    info(){
        console.log(`Hello my name is ${this.name}`)
    }


    
}
// Exports the Person class