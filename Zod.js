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

console.log(keysThenVals(user));