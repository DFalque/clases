import { MemoryStore } from "../../lib/store/MemoryStore"
import { Store } from "../../lib/store/store"
import Player from "./Player"

describe( 'Player', ()=>{
	let player: Player
    
	beforeEach(()=>{
		Store.useConcreteStore( new MemoryStore() )
		player = new Player
	})

	afterEach(()=>{
		//tearDown
	})

	it( 'should be saved in Store', async ()=>{
		player.receiveDamage( 2 )
		await Store.save( player )
		const loadedPlayer = await Store.findByID( player.id )

		expect( loadedPlayer ).not.toBe( player )
		expect( loadedPlayer.life ).toBe( player.life )
	})
})

