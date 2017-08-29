$(document).ready(function() {

	$('form').submit(function calculateNums() {
		var dirtyUserInput, cleanUserInput, arrayOfStrings, arrayOfNums,
			quantityOfNums, sumOfNums, result;

		dirtyUserInput = getInputData();

		cleanUserInput = cleanUnnecessarySpaces(dirtyUserInput);

		if (checkForEmptyField(cleanUserInput)) { return alert('Field should be filled up!') };

		arrayOfStrings = createArrayOfStrings(cleanUserInput);

		arrayOfNums = makeArrayOfNums(arrayOfStrings);

		quantityOfNums = arrayOfNums.length;	

		sumOfNums = sumNums(arrayOfNums, quantityOfNums);

		result = sumOfNums / quantityOfNums;

		showResult(result);

		return false;
	});

	function getInputData() {
	return $('input[type=text]').val();
	}

	function cleanUnnecessarySpaces(userString) {
		return userString.trim();
	}

	function checkForEmptyField(userString) {
		if (userString === '') { return true };
	}

	function createArrayOfStrings(userString) {
		return userString.split(' ');
	}

	function makeArrayOfNums(array) {
		return array.map(function(item) {return Number(item)} );
	}

	function sumNums(array, end) {
		var sum = 0;
		for(var i = 0; i < end; i++) {
			if( isNaN(array[i]) ) { return alert('Please, write only numbers!') };
			sum = sum + array[i];
		}

		return sum;
	}

	function showResult(result) {
		$('#result').html('Result: ' + result);
	}
});
