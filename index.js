// Write your solution in this file!
const employee = {
    name: "John",
    streetAdress: "123 Street"
}
function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}
const updateEmployee = updateEmployeeWithKeyAndValue(
    employee, "James", "456 New Street"
)
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value
    return obj;
}
const destructivelyUpdateEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "Kelly", "789 Main Ave.");
function deleteFromEmployeeByKey(obj, key, value){
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}
const deleteEmployeeKey = deleteFromEmployeeByKey(employee, key)
delete destructivelyUpdateEmployee.name;
function destructivelyDeleteFromEmployeeByKey(obj, key, value){
    obj[key] = value;
    return obj;
}
const destructivelyDeleteKey = destructivelyDeleteFromEmployeeByKey(employee, "Kate", "1011 New Main St.");
