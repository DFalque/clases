export type Callback<Event> = ( event: Event )=>void

export type PropChangeEvent<T> = {
	[ key in keyof T ]?: T[key] extends Function ? never : T[key]
}

export class Observable<Event> {

	private subscribers: Callback<Event>[] = []

	subscribe( callback: Callback<Event> ) {
		this.subscribers.push( callback )
		return ()=>this.unsubscribe( callback )
	}

	unsubscribe( callback: Callback<Event> ) {
		this.subscribers = this.subscribers.filter( s => s !== callback )
	}

	notify( event: Event ) {
		this.subscribers.forEach((callback)=>callback( event ))
	} 
}






