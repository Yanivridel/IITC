function initDB() {
    const employees = [
        {
            id: Date.now() + 1,
            firstName: "Alice",
            lastName: "Smith",
            gender: "Female",
            age: 28,
            startDate: "2020-06-15",
            department: "Marketing",
            salary: 50000
        },
        {
            id: Date.now() + 2,
            firstName: "John",
            lastName: "Doe",
            gender: "Male",
            age: 35,
            startDate: "2018-01-25",
            department: "Sales",
            salary: 60000
        },
        {
            id: Date.now() + 3,
            firstName: "Emma",
            lastName: "Johnson",
            gender: "Female",
            age: 42,
            startDate: "2015-03-12",
            department: "IT",
            salary: 70000
        },
        {
            id: Date.now() + 4,
            firstName: "Michael",
            lastName: "Brown",
            gender: "Male",
            age: 30,
            startDate: "2019-07-01",
            department: "Finance",
            salary: 55000
        },
        {
            id: Date.now() + 5,
            firstName: "Sophia",
            lastName: "Williams",
            gender: "Female",
            age: 26,
            startDate: "2021-05-20",
            department: "HR",
            salary: 45000
        },
        {
            id: Date.now() + 6,
            firstName: "David",
            lastName: "Taylor",
            gender: "Male",
            age: 39,
            startDate: "2017-09-14",
            department: "Operations",
            salary: 64000
        },
        {
            id: Date.now() + 7,
            firstName: "Laura",
            lastName: "White",
            gender: "Female",
            age: 32,
            startDate: "2016-11-03",
            department: "Logistics",
            salary: 50000
        },
        {
            id: Date.now() + 8,
            firstName: "John",
            lastName: "Doe",
            gender: "Male",
            age: 45,
            startDate: "2015-07-21",
            department: "Finance",
            salary: 72000
        },
        {
            id: Date.now() + 9,
            firstName: "Emily",
            lastName: "Clark",
            gender: "Female",
            age: 29,
            startDate: "2019-03-12",
            department: "HR",
            salary: 54000
        },
        {
            id: Date.now() + 10,
            firstName: "Michael",
            lastName: "Brown",
            gender: "Male",
            age: 51,
            startDate: "2010-01-15",
            department: "IT",
            salary: 85000
        },
        {
            id: Date.now() + 11,
            firstName: "Jessica",
            lastName: "Johnson",
            gender: "Female",
            age: 34,
            startDate: "2018-06-27",
            department: "Marketing",
            salary: 60000
        },
        {
            id: Date.now() + 12,
            firstName: "Mark",
            lastName: "Wilson",
            gender: "Male",
            age: 43,
            startDate: "2013-02-11",
            department: "Operations",
            salary: 68000
        },
        {
            id: Date.now() + 13,
            firstName: "Sophia",
            lastName: "Miller",
            gender: "Female",
            age: 26,
            startDate: "2021-04-05",
            department: "Customer Support",
            salary: 45000
        },
        {
            id: Date.now() + 14,
            firstName: "Daniel",
            lastName: "Davis",
            gender: "Male",
            age: 38,
            startDate: "2017-08-10",
            department: "Sales",
            salary: 63000
        },
        {
            id: Date.now() + 15,
            firstName: "Olivia",
            lastName: "Martinez",
            gender: "Female",
            age: 30,
            startDate: "2016-09-20",
            department: "Product Management",
            salary: 67000
        },
        {
            id: Date.now() + 16,
            firstName: "James",
            lastName: "Garcia",
            gender: "Male",
            age: 50,
            startDate: "2008-12-01",
            department: "Logistics",
            salary: 70000
        },
        {
            id: Date.now() + 17,
            firstName: "Isabella",
            lastName: "Rodriguez",
            gender: "Female",
            age: 27,
            startDate: "2022-01-08",
            department: "Customer Success",
            salary: 48000
        }
        

    ];
    if(getLocal("employees").length===0) setLocal("employees", employees);
}

const getLocal = (key) => JSON.parse(localStorage.getItem(key)) || [];
const setLocal = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const clearStorage = () => localStorage.clear();
// clearStorage();
export { initDB, getLocal, setLocal, clearStorage };