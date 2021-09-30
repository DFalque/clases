import { dataStore, Persistent, resetStore, Store } from "./store";


interface Person extends Persistent {
	name:string
	age: number
	address?: {
		street: string
		city: string
	}
}

describe( 'Store', ()=> {

	describe( 'Generic operations', ()=> {
		const person1: Person = { id: 'keyPerson1', name: 'Pepe', age: 30 }
		const person2: Person = { id: 'keyPerson2', name: 'Maria', age: 20 }

		beforeEach( ()=> {
			resetStore({
				initTest1:{
					id: 'initTest1',
					data: {
						value: 'testInitString', 
						moreData: 90
					}
				}
			})
		});

		it( 'should save data', ()=>{
			Store.save({ 
				id: 'test1',
				data: {
					value: 'testString', 
					moreData: 34
				}
			});
			
			expect( dataStore[ 'test1' ] ).toEqual({
				id: 'test1',
				data: {
					value: 'testString', 
					moreData: 34
				}
			});
		})

		it( 'should find by id', ()=>{
			const result = Store.findByID('initTest1');
      expect(result).toEqual({
				id: 'initTest1',
				data: {
					value: 'testInitString', 
					moreData: 90
				}
			})
		})

		describe( 'should find by fields', ()=>{
			beforeEach(()=>{
				Store.save( person1 );
				Store.save( person2 );
			})

			it( 'should find equal person by name', ()=>{
				const result = Store.findByFields({ field: 'name', operation: '==', value: 'Pepe' })
				expect(result[0]).toEqual({ ...person1 })
			})

			it( 'should find equal person by name and age', ()=>{
				const result = Store.findByFields([
					{ field: 'name', operation: '==', value: 'Pepe' },
					{ field: 'age', operation: '==', value: 30 }
				])
				expect(result[0]).toEqual({ ...person1 })
			})

			it( 'should find elements greater than value', ()=>{
				const result = Store.findByFields({ field: 'age', operation: '>=', value: 20 })
				expect( result.length ).toBe( 2 )
				expect(result[0]).toEqual({ ...person1 })
			})
		})
		
		it( 'should delete data', ()=>{
			const result = Store.delete("initTest1")
			expect(result).toEqual(true)
			expect(dataStore["initTest1"]).toBeUndefined()
           
		})

	})

})