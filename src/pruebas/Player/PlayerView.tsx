import React, { useEffect, useState } from 'react';
import { PropChangeEvent } from '../../lib/observer/observable';
// COMPONENTES
import Player from './Player';
import {Potion} from './Potion'

// INTERFACES
interface PlayerViewProps {
    player: Player
    potion: Potion
}

function PlayerView(props: PlayerViewProps) {
    const { player, potion } = props
    const [ lifePoints, setLifePoints ] = useState( player.life )
    //-----------------------------//
    
    const _life: number=player.life;
    const _armor: number=player.armor;

    const [states, setStates] = useState({
        life : _life,
        armor : _armor
    } as PropChangeEvent<Player>)

    const handleState = (event: PropChangeEvent<Player> ) => {
            setStates({ ...states, ...event})
    }
    //-----------------------------//
    console.log(states);

    useEffect(()=>{
       return  player.subscribe((event)=>handleState(event))
    },[])

    return (
        <div>
            <h3>{player.name}</h3>
            {/* <input 
                value={ items.pocima }
                onChange={ event => changeState(event, 'pocima')}
            />
            <p>{items.pocima}</p>
            <p>{items.coraza}</p>
            <p>Desde el Player: {lifePoints}</p> */}
            <p>Vida: {lifePoints}</p>
            <p>Armadura: {lifePoints}</p>
            <p>Vida states: {states.life}</p>
            <button onClick={()=> player.receiveDamage(10) }>
                Machacar
            </button>
            <button onClick={()=> player.drinkPotion(potion) } >
                Beber Poción
            </button>
            <button onClick={()=> player.addPotion({color:'red',lifeRecover:10}) }>
                Poción encontrada
            </button>
        </div>
    )

}

export default PlayerView;