import { Persistent, QueryObject, StoreBase } from "./store";

export class SqlStore implements StoreBase {
	save( data: Persistent ) {
		return Promise.resolve()
	}

	findByID(id: string){
			return Promise.resolve( {} as Persistent )
	}

	findByFields( pQuery: QueryObject | QueryObject[] ) {
		return Promise.resolve( [] )
	}

	delete(id:string){
		return Promise.resolve()
	}

}