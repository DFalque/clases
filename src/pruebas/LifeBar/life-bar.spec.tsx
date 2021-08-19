import React from 'react'
import {act, render, screen} from '@testing-library/react'
import LifeBar from './life-bar'
import Player from '../Player/Player';


describe('testing life bar', () => {
	let player: Player;

	beforeEach(()=>{
		player = new Player();
		
		render(
			<LifeBar player={player}/>
		)

		// await screen.findByText('dfg')
	})

	it('should change the life bar point when player life points change', () => {
		act(() => {
			player.receiveDamage(10)
		})
		expect( screen.getByText( '90%' ) ).toBeInTheDocument()
	})
})

