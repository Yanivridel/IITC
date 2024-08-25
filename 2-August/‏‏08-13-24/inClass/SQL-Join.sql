
-- 1
SELECT productName, c.CategoryID
FROM Products p join Categories c on (p.CategoryID = c.CategoryID)
-- 2
SELECT productName, s.CompanyName
FROM Products p join Suppliers s on (p.SupplierID = s.SupplierID)
-- 3
SELECT OrderID,  CompanyName
FROM Orders o join Customers c on (o.CustomerID = c.CustomerID)
WHERE CompanyName LIKE 'A%';
-- 4
SELECT RegionDescription, TerritoryDescription
FROM Region r join Territories t on (r.RegionID = t.RegionID)
-- 5
SELECT productName, UnitPrice, CategoryName
FROM Products p join Categories c on (p.CategoryID = c.CategoryID)
WHERE UnitPrice > 50;
-- 6
SELECT ProductID, UnitPrice,SupplierID, CategoryName
FROM Products p join Categories c on (p.CategoryID = c.CategoryID)
WHERE SupplierID = 3;
-- 7
SELECT ProductID, UnitPrice,SupplierID, CategoryName
FROM Products p join Categories c on (p.CategoryID = c.CategoryID)
WHERE CategoryName LIKE '%a%';
-- 8
SELECT ProductName, CategoryName, s.City
FROM Products p join Categories c on (p.CategoryID = c.CategoryID)
     join Suppliers s on (s.SupplierID = p.SupplierID)
-- 9
SELECT ProductName, c.Description, s.City
FROM Products p join Categories c on (p.CategoryID = c.CategoryID)
     join Suppliers s on (s.SupplierID = p.SupplierID)
WHERE s.City in ('Tokyo','London')
-- 10
SELECT ProductName, c.Description, s.Country
FROM Products p join Categories c on (p.CategoryID = c.CategoryID)
     join Suppliers s on (s.SupplierID = p.SupplierID)
WHERE Country LIKE 'A%';
-- 11
SELECT c.CompanyName, o.OrderID
FROM Customers c left join Orders o on (c.CustomerID = o.CustomerID)
-- 12
SELECT o.OrderID, o.OrderDate, o.ShipAddress, c.CustomerID, c.CompanyName, c.Phone
FROM Customers c left join Orders o on (c.CustomerID = o.CustomerID)
WHERE o.OrderDate > '1996' AND c.CustomerID LIKE '[CA]%';
-- 13
SELECT e.LastName, e.FirstName, o.OrderID, o.OrderDate, o.ShipAddress, c.CustomerID, c.CompanyName, c.Phone
FROM Customers c left join Orders o on (c.CustomerID = o.CustomerID)
     join Employees e on (o.EmployeeID = e.EmployeeID)
WHERE o.OrderDate > '1996' AND c.CustomerID LIKE '[CA]%'
ORDER BY o.OrderDate desc;

