var user = {
    name: "Zod",
    age: 1000
}

function getValues(obj) {
    var arr = []
	for (val in obj) {
		arr.push(obj[val]);
	}
	return arr;
}

console.log(getValues(user));