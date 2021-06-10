console.log('Hello')

const pikachu = (a: number, b: number) => a + b;

console.log(10,20);

// define object data type with interface.
interface PokemonObj{
    name?: string,
    age: number,
    skill: string
  }
  // assign data type to object.
  const pokemon: PokemonObj = {
    name: "pikachu",
    age: 25,       // change 
    skill: "Electric Shock!"
  }


const pokemonArray: string[] = ["pikachu", "Raichu", "Charizard"];

const pokemonArray2: Array<string> = ["pikachu", "Raichu", "Charizard"];

// defined array with generics data type.
type Pokemonn<T> = T[];
// After defined generics type, we can define specific data type.
const pokemon01: Pokemonn<string> = ["pikachu", "Raichu", "Charizard"];
const pokemon02: Pokemonn<number> = [6, 14, 16];
const pokemon03: Pokemonn<boolean> = [true, true, false];


interface Point {
    readonly x: number; // readonly solo lectura
    readonly y: number;
  }


  // clases 

  interface User {
    name: string;
    id: number;
  }
  
  class UserAccount {
    name: string;
    id: number;
  
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  }
  
  const user: User = new UserAccount("Murphy", 1);
  

