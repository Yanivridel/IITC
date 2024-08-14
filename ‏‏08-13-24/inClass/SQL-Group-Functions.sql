
SELECT *
FROM Employees;
-- 1
SELECT min(LastName)
FROM Employees;
-- 2
SELECT max(FirstName)
FROM Employees;
-- 3
SELECT count(*)
FROM Employees;
-- 4
SELECT count(Region)
FROM Employees;
-- 5
SELECT avg(UnitPrice)
FROM Products;
-- 6
SELECT min(UnitPrice) minPrice, max(UnitPrice) maxPrice
FROM Products;
-- 7
SELECT convert(varchar, min(BirthDate), 113) minBirth, convert(varchar, max(BirthDate), 113) minBirth
FROM Employees;
-- 8
SELECT count(CustomerID)
FROM Customers;
-- 9
SELECT count(distinct CustomerID)
FROM Orders;
-- 10
SELECT CategoryID, min(UnitPrice) minPrice, max(UnitPrice) maxPrice, avg(UnitPrice) avgPrice
FROM Products
GROUP BY CategoryID;
-- 11
SELECT SupplierID, max(UnitPrice) maxPrice
FROM Products
GROUP BY SupplierID
ORDER BY SupplierID desc;
-- 12
SELECT SupplierID, avg(UnitPrice) avgPrice
FROM Products
GROUP BY SupplierID
ORDER BY avgPrice desc;
-- 13
SELECT Country,City, count(CustomerID) numOfCustomers
FROM Customers
GROUP BY Country,City;
-- 14
SELECT CategoryID, avg(UnitPrice) avgPrice
FROM Products
WHERE UnitPrice > 40
GROUP BY CategoryID;
-- 15
SELECT City, count(CustomerID) numOfCustomers
FROM Customers
WHERE city= 'London'
GROUP BY City;
-- 16
SELECT CategoryID,SupplierID, min(UnitPrice) minPrice, max(UnitPrice) maxPrice, avg(UnitPrice) avgPrice,
count(productID) numberOfProducts
FROM Products
GROUP BY CategoryID, SupplierID;
-- 17
SELECT CategoryID, max(UnitPrice) maxPrice
FROM Products
GROUP BY CategoryID
HAVING max(UnitPrice) > 40;
-- 18
SELECT SupplierID, avg(UnitPrice) avgPrice
FROM Products
GROUP BY SupplierID
HAVING avg(UnitPrice) > 40;
-- 19
SELECT categoryName, sum(UnitsInStock) sumStock,sum(UnitsOnOrder) sumOrder
FROM Products p join Categories c on (p.CategoryID = c.CategoryID)
WHERE CategoryName LIKE '%C%'
GROUP BY c.CategoryID,categoryName
HAVING sum(UnitsOnOrder) > 100
Order BY categoryName;
-- 20
SELECT region, City, count(*) numOfCustomers
FROM Customers
WHERE city LIKE '%[ml]%' AND Region is not NULL
GROUP BY region, City
HAVING count(*) >= 2;
-- 21
SELECT LastName, count(e.EmployeeID), max(OrderDate)
FROM Employees e join Orders o on (e.EmployeeID = o.EmployeeID)
GROUP BY e.EmployeeID ,LastName
HAVING count(e.EmployeeID) > 100;