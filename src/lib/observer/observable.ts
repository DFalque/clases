// Creamos el tipo Callback
export type Callback<Event> = ( event: Event )=>void

// Abstracción, que los tipos validos como eventos sean los de la propia clase
export type PropChangeEvent<T> = {
	[ key in keyof T ]?: T[key] extends Function ? never : T[key]
}

// Creamos el Observable de tipos generico Event
export class Observable<Event> {
	// Tendremos un array con todos los Callbacks que estarán
	// suscritos al Observable
	private subscribers: Callback<Event>[] = []


	// Guardamos el la función 
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









