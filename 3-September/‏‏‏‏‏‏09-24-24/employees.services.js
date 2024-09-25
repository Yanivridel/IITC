import { getLocal, setLocal } from './utils.js'

function addEmployee(firstName, lastName, age, gender, startDate, department, salary) {
    const employees = getLocal("employees");
    employees.push({"id": Date.now(), firstName, lastName, age, gender, startDate, department, salary})
    setLocal("employees", employees);
}
function editEmployee(id, firstName, lastName, age, gender, startDate, department, salary) {
    const employees = getLocal("employees");
    const idx = employees.findIndex(employee => employee.id === Number(id));
    employees[idx] = {"id": Number(id), firstName, lastName, age, gender, startDate, department, salary};
    setLocal("employees", employees);
}
function removeEmployeeById(id) {
    const employees = getLocal("employees");    
    const newEmployees = employees.filter(employee => employee.id !== Number(id));
    setLocal("employees", newEmployees);
    
}

export { addEmployee, removeEmployeeById, editEmployee };