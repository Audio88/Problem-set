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

getValues(user);  //___ Takes an Obj as an arguement, and returns an array full of values.
