
-- 1
SELECT LastName, FirstName
FROM Employees
where EmployeeID = 3;
-- 2
SELECT ProductName, UnitPrice
FROM Products
where ProductID = 4;
-- 3
SELECT ProductName, UnitPrice
FROM Products
where UnitPrice > 20
ORDER BY UnitPrice asc;
-- 4
SELECT employeeID, (FirstName + ' ' + LastName) as 'FullName', BirthDate, ReportsTo
FROM Employees
where employeeID = 8
-- 5
SELECT employeeID, (FirstName + ' ' + LastName) as 'FullName', BirthDate
FROM Employees
where City = 'London';
-- 6
SELECT *
FROM Products
where UnitPrice NOT BETWEEN 50 AND 100;
-- 7
SELECT *
FROM Products
where UnitPrice BETWEEN 21.35 AND 43.9
ORDER BY UnitPrice desc;
-- 8
SELECT employeeID, (FirstName + ' ' + LastName) as 'FullName', HireDate
FROM Employees
where City in ('London','TACOMA');
-- 9
SELECT employeeID,FirstName, LastName
FROM Employees
where employeeID in (1,2,5);
-- 10
SELECT employeeID, (FirstName + ' ' + LastName) as 'FullName', BirthDate
FROM Employees
where employeeID not in (4,5,7);
-- 11
SELECT ProductID ,ProductName, CategoryID
FROM Products
where ProductID in (1,2,7)
ORDER BY CategoryID;
-- 12
SELECT EmployeeID ,Region
FROM Employees
where Region is NULL;
-- 13
SELECT TOP 3 ProductName, UnitPrice
FROM Products
ORDER BY UnitPrice desc;
-- 14
SELECT OrderID, OrderDate, RequiredDate
FROM Orders
WHERE RequiredDate > '1996-10-01 00:00:00:000'
-- 15
SELECT EmployeeID ,LastName, ReportsTo
FROM Employees
where ReportsTo is not NULL
ORDER BY EmployeeID;
-- 16
SELECT *
FROM Categories
where CategoryName LIKE '%o%'
-- 17
SELECT CompanyName, Country
FROM Customers
where CompanyName LIKE '%a'
-- 18
SELECT CompanyName, Country
FROM Customers
where CompanyName LIKE '%a_'
-- 19
SELECT OrderID, CustomerID, EmployeeID
FROM Orders
where OrderDate BETWEEN '1997-04-01' AND '1997-05-31'
ORDER BY OrderDate asc, CustomerID desc;
-- 20
SELECT CustomerID, CompanyName, Country, Phone, Region
FROM Customers
where Country LIKE '[FGM]%' AND Region is NULL;
-- 21
SELECT EmployeeID, (FirstName + ' ' + LastName) as 'FullName', BirthDate, Country
FROM Employees
where BirthDate LIKE '%[DK]%' OR BirthDate BETWEEN '1963-01-01' AND '1964-01-01'
-- 22
SELECT ProductName, UnitPrice, SupplierID
FROM Products
where UnitPrice > 30 AND SupplierID in (1,3);
-- 23
SELECT OrderID, EmployeeID, OrderDate, RequiredDate, ShipName
FROM Orders
where EmployeeID = 7 AND
ShipName in ('QUICK-Stop','Du mond entire', 'Eastern Connection') AND
RequiredDate - OrderDate > 20;
-- 24
SELECT ProductID, ProductName
FROM Products
where (SupplierID in (16,8,21) OR UnitPrice < 10) AND (UnitsInStock NOT BETWEEN 10 and 100)
ORDER BY unitPrice asc;