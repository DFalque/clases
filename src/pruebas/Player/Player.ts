import { Callback, Observable, PropChangeEvent } from '../../lib/observer/observable';
import {Potion} from './Potion'

// interface PlayerEvent {
//     life: number;
//     armor: number;
//     potions: Potion[];
// }

type PlayerEvent = PropChangeEvent<Player>;

const totalLife: number = 100

export default class Player {
    private _life: number = totalLife
    private _armor: number = 100
    private _name: string = 'Goku'
    private _potions: Potion[]
    private _onChange: Observable<PlayerEvent> = new Observable()

    drinkPotion (potion: Potion ) {
        if(this._life === totalLife){
            console.log('Vida llena')
        }else{
            this._life += potion.lifeRecover;
            this._onChange.notify({ life: this._life })
        }
    }
    
    receiveDamage(value: number){
        if(this._life <=0){console.log('Ya esta muerto')}else{        
            this._life -= value
            this._onChange.notify({ life: this._life })}
    }

   putArmor(){
       console.log('Armadura colocada');
       this._armor += 100; 
       this._onChange.notify({ armor: this._armor })
   }

    get life() {
        return this._life
    }

    get name() {
        return this._name
    }

    // set life( val: number ) {
    //     this._life = val
    // }

    get armor() {
        return this._armor
    }

    subscribe( cb: Callback<PlayerEvent> ) {
            return this._onChange.subscribe( cb )
    }

    addPotion(potion: Potion) {
        this._potions.push(potion)
        this._onChange.notify({ potions: this._potions })
    }

    get potions(): readonly Potion[] {
        return Object.freeze( [...this._potions] )
    }

 }
