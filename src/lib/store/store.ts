
interface Persistent {
	id: string
	[ key: string ]: any 
}

type MemStore = {[ id: string ]: Persistent }

export let dataStore: MemStore = {}

export function resetStore( initialData: MemStore ) {
	dataStore = {...initialData}
}

export class Store {
	static save( data: Persistent ) {
		dataStore[ data.id ] = data 
	}

    static findByID(id: string){
        return dataStore[id]
    }

    static delete(id:string){
        return delete(dataStore[id])
    }
}


