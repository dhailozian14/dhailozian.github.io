console.log("Daniel's Collatz")
	var x = 59
	var length = 0
	console.log(x);
	while(x > 1){
		if(x % 2 == 0){
			x = x / 2;
		}
		else{
			x = 3*x + 1}
		console.log(x);
		length++;
		}

	return(length);

var start = 59
var length = collatz(start)

console.log('\ncollatz(%d) has %d items' , start, length);