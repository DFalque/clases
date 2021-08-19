// LIBRARY
import React from 'react'
import { render } from 'react-dom'
// COMPONENTS
import Player from './pruebas/Player/Player'
import PlayerView from './pruebas/Player/PlayerView'
import Monster from './pruebas/Monster/Monster'
import MonsterView from './pruebas/Monster/MonsterView'
import LifeBar  from './pruebas/LifeBar/life-bar'
// OTHERS
import './style.css';

export function App() {
	const player = new Player();
	const monster = new Monster();
	return (
		<>
			<h1>Game</h1>
			<div className='containerBattle'>
				<PlayerView player={ player } potion={{color:'red',lifeRecover:10}} />
				<MonsterView monster={ monster} />
				<LifeBar player={ player } />
			</div>
		
		</>
	)
}



render(<App/>, document.getElementsByTagName( 'App' )[0] )
// render(<App/>, document.getElementById( 'root' ) )
