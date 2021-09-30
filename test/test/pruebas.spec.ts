describe( 'Cosas varias', ()=>{
	it('demonstrate use of filter (return odd numbers)', ()=>{
		const a = [ 3, 5, 7, 8, 0 ]

		const newArray = a.filter( element => {
			return element % 2
		})

		expect( newArray ).toContain( 3 )
		expect( newArray ).not.toContain( 8 )

	})

	it( 'demonstrate reduce use by calculating mean in an array', ()=>{
		const ages = [ 12, 20, 34 ]

		const mean = ages.reduce((acum,currentValue)=> {
			return acum + currentValue
		}, 0) / ages.length

		expect( mean ).toBe( 22 )
	})
})


