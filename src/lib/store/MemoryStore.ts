import { Persistent, QueryObject, StoreBase } from "./store"

type MemStore = {[ id: string ]: Persistent }

export let dataStore: MemStore = {}

export function resetStore( initialData: MemStore ) {
	dataStore = {...initialData}
}


export class MemoryStore implements StoreBase {

	 static compare: {[ operation: string ]: ( val1: unknown, val2: unknown )=>boolean } = {
		"==" : (val1, val2)=> val1 === val2,
		">=" : (val1, val2)=> val1 >= val2,
		"<=" : (val1, val2)=> val1 <= val2,
		"!=" : (val1, val2)=> val1 != val2,
		"<" : (val1, val2)=> val1 < val2,
		">" : (val1, val2)=> val1 > val2,
	} 

	save( data: Persistent ) {
		dataStore[ data.id ] = data 
		return Promise.resolve()
	}

	findByID(id: string){
			return Promise.resolve( dataStore[id] )
	}

	findByFields( pQuery: QueryObject | QueryObject[] ) {
		const query = Array.isArray( pQuery )? pQuery : [ pQuery ]
		const foundData = Object.values( dataStore ).filter((element)=> {
			return query.reduce(( accumulator, currentQuery )=>{
				const compareWithOperation = MemoryStore.compare[currentQuery.operation]
				return accumulator && compareWithOperation( element[currentQuery.field], currentQuery.value );
			}, true )
		})
		return Promise.resolve( foundData )
	}

	delete(id:string){
		delete dataStore[id]
		return Promise.resolve()
	}	

}

