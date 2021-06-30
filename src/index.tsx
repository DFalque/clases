import React from 'react'
import { render } from 'react-dom'
import Player from './pruebas/Player/Player'

export function App() {
	return (
		<>
			<h1>Hello world</h1>
			<Player/>
		</>
	)
}



render(<App/>, document.getElementsByTagName( 'App' )[0] )
// render(<App/>, document.getElementById( 'root' ) )
