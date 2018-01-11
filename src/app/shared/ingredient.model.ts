export class Ingredient {
    constructor(public name: string, public amount: number){
    }
}

//above same as below, ts feature by only adding the accessor infront of the property name
// export class Ingredient {
//     public name: string;
//     public amount: number;

//     constructor(name: string, amount:number){
//         this.name = name;
//         this.amount = amount;
//     }
// }