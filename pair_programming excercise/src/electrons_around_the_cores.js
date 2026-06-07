// StringCalculator.js
function Electrons() {}
Electrons.prototype.add = function(list) {
	let result = 0;
	let listLength = list.length;
	
	for (let i = 0; i < listLength; i++) {
		if (list[i] % 2 != 0) {
			continue;
		}
		
		result += list[i];
	}

	return result;
}
