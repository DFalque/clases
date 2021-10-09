
export interface Persistent {
	id: string
	[ key: string ]: any 
}

export type QueryObject = {
	field:string
	operation:string
	value: unknown
}

export interface StoreBase {
	save( data: Persistent ): Promise<void>
	findByID(id: string): Promise<Persistent>
	findByFields( pQuery: QueryObject | QueryObject[] ): Promise<Persistent[]>
	delete(id:string): Promise<void>
}

export class Store {
	private static storeInstance: StoreBase

	static useConcreteStore( instance: StoreBase ) {
		this.storeInstance = instance
	}

	static save( data: Persistent ): Promise<void> {
		if ( !this.storeInstance ) throw new Error('You should assign a concrete store instance by using the useConcreteStore method')
		return this.storeInstance.save(data)
	}

	// findByFields<T extends Persistent>( pQuery: QueryObject<T> | QueryObject<T>[] ) {
	static findByID(id: string): Promise<Persistent> {
		if ( !this.storeInstance ) throw new Error('You should assign a concrete store instance by using the useConcreteStore method')
		return this.storeInstance.findByID(id)
	}

	static findByFields( pQuery: QueryObject | QueryObject[] ): Promise<Persistent[]> {
		if ( !this.storeInstance ) throw new Error('You should assign a concrete store instance by using the useConcreteStore method')
		return this.storeInstance.findByFields( pQuery)
	}

	static delete(id:string): Promise<void> {
		if ( !this.storeInstance ) throw new Error('You should assign a concrete store instance by using the useConcreteStore method')
		return this.storeInstance.delete(id)
	}

}

