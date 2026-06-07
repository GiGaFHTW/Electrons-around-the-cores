describe('Electrons around the Cores', function() {
	beforeEach(function() {
		electrons = new Electrons();
	});

	it('should return 6 for [ 1, 2, 3, 4, 5 ]', function() {
		let list = [ 1, 2, 3, 4, 5 ];
		expect(electrons.add(list)).toEqual(6);
	});

	it('should return 4 for [ 2, 2, 3, 3 ]', function() {
		let list = [ 2, 2, 3, 3 ];
		expect(electrons.add(list)).toEqual(4);
	});

	it('should return 2 for [ 6, 6, 4, 4, 1, 3 ]', function() {
		let list = [ 6, 6, 4, 4, 1, 3 ];
		expect(electrons.add(list)).toEqual(2);
	});
});