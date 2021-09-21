import { dataStore, resetStore, Store } from "./store";

describe( 'Store', ()=> {

	describe( 'Generic operations', ()=> {

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

		it( 'should find by fields', ()=>{
            Store.save({ 
				id: 'test1',
				data: {
					value: 'testString', 
					moreData: 90
				}
			});
            Store.save({ 
				id: 'test2',
				data: {
					value: 'testString', 
					moreData: 30
				}
			});
            console.log(dataStore)
            // const result = Store.findByFields()
		    //expect(result).toContain()
		})
		
		it( 'should delete data', ()=>{
			const result = Store.delete("initTest1")
            expect(result).toEqual(true)
            expect(dataStore["initTest1"]).toBeUndefined()
           
		})

	})
})