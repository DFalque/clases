
export interface Persistent {
	id: string
	[ key: string ]: any 
}

type QueryObject = {
	field:string
	operation:string
	value: unknown
}

type MemStore = {[ id: string ]: Persistent }

export let dataStore: MemStore = {}

export function resetStore( initialData: MemStore ) {
	dataStore = {...initialData}
}

export class Store {

	static compare: {[ operation: string ]: ( val1: unknown, val2: unknown )=>boolean } = {
		"==" : (val1, val2)=> val1 === val2,
		">=" : (val1, val2)=> val1 >= val2,
		"<=" : (val1, val2)=> val1 <= val2,
		"!=" : (val1, val2)=> val1 != val2,
		"<" : (val1, val2)=> val1 < val2,
		">" : (val1, val2)=> val1 > val2,
	} 

	static save( data: Persistent ) {
		dataStore[ data.id ] = data 
	}

	static findByID(id: string){
			return dataStore[id]
	}

	// static findByFields<T extends Persistent>( pQuery: QueryObject<T> | QueryObject<T>[] ) {
	static findByFields( pQuery: QueryObject | QueryObject[] ) {
		const query = Array.isArray( pQuery )? pQuery : [ pQuery ]
		return Object.values( dataStore ).filter((element)=> {
			return query.reduce(( accumulator, currentQuery )=>{
				const compareWithOperation = Store.compare[currentQuery.operation]
				return accumulator && compareWithOperation( element[currentQuery.field], currentQuery.value );
			}, true )
		})
	}

	static delete(id:string){
			return delete(dataStore[id])
	}
	

}

