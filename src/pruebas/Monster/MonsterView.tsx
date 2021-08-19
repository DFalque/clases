import React,{useEffect,useState} from 'react'
import Monster from './Monster';

interface MonsterViewProps {
    monster: Monster
}



const MonsterView = (props:MonsterViewProps) => {
    const {monster} = props
    const [life, setLife] = useState(monster.life)

    useEffect(() => {
    
        return monster.subscribe(()=>setLife(monster.life)) 
            
    }, [])

    return (
        <div>
            <h3>{monster.name}</h3>
            <p>Vida: {monster.life}</p>
            <button onClick={()=> monster.receiveDamage(10) }>
                machacar
            </button>
        </div>
    )
}

export default MonsterView
