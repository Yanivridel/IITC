-- 1
SELECT ProductName
FROM Products
WHERE UnitPrice < (SELECT UnitPrice FROM Products WHERE ProductID=8)
-- 2
SELECT ProductName
FROM Products
WHERE UnitPrice > (SELECT UnitPrice FROM Products WHERE ProductName='Tofu')
-- 3
SELECT FirstName, HireDate 
FROM Employees
WHERE HireDate > (SELECT HireDate FROM Employees WHERE EmployeeID=6)
-- 4
SELECT ProductID, ProductName, UnitPrice
FROM Products
WHERE UnitPrice > (SELECT avg(UnitPrice) FROM Products)
-- 5
SELECT ProductName, UnitsInStock
FROM Products
WHERE UnitsInStock < (SELECT min(UnitsInStock) FROM Products WHERE CategoryID=5)
-- 
SELECT *
FROM Products
WHERE CategoryID = (SELECT categoryID FROM Products WHERE ProductName='Chai')
AND ProductName <> 'Chai';
-- 7
SELECT ProductName, UnitPrice, CategoryID
FROM Products
WHERE UnitPrice = ANY (SELECT UnitPrice FROM Products WHERE CategoryID=5)
-- 8
SELECT ProductName, UnitPrice, CategoryID
FROM Products
WHERE UnitPrice > ANY (SELECT UnitPrice FROM Products WHERE CategoryID=5)
-- 9
SELECT ProductName, UnitPrice, CategoryID
FROM Products
WHERE UnitPrice > ALL (SELECT UnitPrice FROM Products WHERE CategoryID=5)
-- 10
SELECT  OrderID, OrderDate
FROM Orders
WHERE  CustomerID IN (SELECT CustomerID FROM Customers WHERE Country IN ('France','Sweden','Germany'))
AND OrderDate BETWEEN '1997' AND '1998';
-- 11
SELECT ProductName, ProductID
FROM Products
WHERE UnitPrice > (SELECT avg(UnitPrice) FROM Products WHERE UnitsInStock > 50);
-- 12
SELECT ProductName
FROM Products
WHERE CategoryID IN (SELECT CategoryID FROM Categories WHERE CategoryName IN ('Condiments','Beverages'))
AND SupplierID IN (SELECT SupplierID FROM Suppliers WHERE Region is NULL);
-- 13
SELECT CompanyName
FROM Suppliers
WHERE SupplierID IN (SELECT SupplierID FROM Products
                     WHERE CategoryID IN (SELECT CategoryID FROM Categories
										  WHERE CategoryName='Beverages'));