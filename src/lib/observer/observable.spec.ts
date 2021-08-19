import { Observable } from "./observable"

describe( 'Observable', ()=>{
    interface PlayerEvent {
        life?: number;
        armor?: number;
    }
	let observable: Observable<PlayerEvent>

	beforeEach(()=>{
		observable = new Observable()
	})

	it( 'should notify subscribers', ()=>{
		let called = false
		const observer = ()=>called = true

		observable.subscribe( observer )
		observable.notify( {life:10} )	

		expect( called ).toBe( true )
	})

	it( 'should notify all subscribers', ()=>{
		const spy1 = jest.fn()
		const spy2 = jest.fn()

		observable.subscribe( spy1 )
		observable.subscribe( spy2 )
		observable.notify( {life:10} )	

		expect( spy1 ).toHaveBeenCalled()
		expect( spy2 ).toHaveBeenCalled()
	})

	it( 'should notify subscribers with arguments', ()=>{
		const spy = jest.fn()

		observable.subscribe( spy )
		observable.notify( {life:10} )	

		expect( spy ).toHaveBeenCalledWith( { life: 10 } )
	})
	
})