describe('Electrons around the Cores', function() {
	beforeEach(function() {
		electrons = new Electrons();
	});

	it('should return 6 for [ 1, 2, 3, 4, 5 ]', function() {
		let list = [ 1, 2, 3, 4, 5 ];
		expect(electrons.add(list)).toEqual(6);
	});
});
