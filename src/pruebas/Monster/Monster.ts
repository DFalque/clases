import { Observable, Callback } from "../../lib/observer/observable";

interface MonsterEvent {
    life:number
}

export default class Monster {
    private _life: number = 100;
    private _name: string = 'Boo';
    private _onChange: Observable<MonsterEvent>= new Observable();


    receiveDamage(value){
        this._life -= value
        this._onChange.notify({life: this._life});
    }

    get name(){
        return this._name
    }
    get life(){
        return this._life
    }

    subscribe (cb:Callback<MonsterEvent>) {
        this._onChange.subscribe(cb)
    }



}