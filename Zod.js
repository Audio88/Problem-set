var user = {
    name: "Zod",
    age: 1000,

}

function keysThenVals(obj) {
    var objArr = Object.keys(obj);

    for (value in obj) {
        objArr.push(obj[value]);

    }

    return objArr
}

keysThenVals(user);  //__Takes an Obj as an argument and returns an array with a list of keys followed by a list of values
