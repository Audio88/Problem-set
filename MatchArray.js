var user = {
    name: "Zod",
    age: 1000,
}

var arr = ["name", "age"]

function matchArray(obj, array){
	objKeys = Object.keys(obj);
	if(objKeys.length != array.length){
		return false;
	}
	for(var i = 0;i<array.length;i++){
		if (objKeys[i] != array[i]){
			return false;
		} else {
			return true;
		}
	}
}

matchArray(user, arr);