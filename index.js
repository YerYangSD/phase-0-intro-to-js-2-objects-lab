const employee = {
    name: "John",
    streetAddress: "123 Street"
}
//first function
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value;
    return newObj;
}
const updateEmployee = updateEmployeeWithKeyAndValue(
    employee, "name2", "James"
)
updateEmployee["streetAddress2"] = "456 New Street";
console.log(updateEmployee);
//second function
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj;
}
const destructivelyUpdateEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "789 Street");
console.log(destructivelyUpdateEmployee);
//third function
function deleteFromEmployeeByKey(obj, key) {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
}
const deleteEmployeeKey = deleteFromEmployeeByKey(employee, "name");
console.log(deleteEmployeeKey);
//fourth function
function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}
const destructivelyDeleteKey = destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
console.log(destructivelyDeleteKey);
