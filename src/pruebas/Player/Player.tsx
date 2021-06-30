import React, {useState} from 'react';

interface Items {
    pocima: string
    coraza: string
}

function Player() {
    const [name, setName] = useState(defaultName())
    const [ lifePoints, setLifePoints ] = useState(100)
    const [ items, setItems ] = useState({
        pocima: 'verde',
        coraza: 'Malla'
    } as Items)

    function changeState(event, type: keyof Items ){
        setItems({...items ,[type]: event.target.value})
    }



    function defaultName (){
         return 'Desconocido'
    }

    return (
        <div>
            <p>{name}</p>
            <input 
                value={ items.pocima }
                onChange={ event => changeState(event, '')}
            />
            <p>{items.pocima}</p>
            <p>{items.coraza}</p>
            <p>{lifePoints}</p>
            <button onClick={ ()=>setLifePoints( lifePoints - 5 )}>
                machacar
            </button>


        </div>
    )

}

export default Player;