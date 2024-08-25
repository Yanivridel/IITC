
SELECT *
FROM Orders
WHERE shipCountry = 'USA';

SELECT ProductID, ProductName, UnitPrice
FROM products
WHERE productName LIKE '%C%';

SELECT CategoryID, [Description]
FROM Categories
WHERE CategoryID > 3
ORDER BY CategoryID desc;

SELECT max(Freight) as 'MAX',
min(Freight) as 'MIN',
count(Freight) as 'COUNT',
avg(Freight) as 'AVG',
sum(Freight) as 'SUM'
FROM Orders;

SELECT max(UnitPrice) as 'MAX',
min(UnitPrice) as 'MIN',
count(UnitPrice) as 'COUNT',
avg(UnitPrice) as 'AVG',
sum(UnitPrice) as 'SUM'
FROM [Products];

SELECT FirstName, LastName, City, e.EmployeeID, OrderID, OrderDate 
FROM Orders o join Employees e on (o.EmployeeID = e.EmployeeID)
WHERE o.EmployeeID in (3,5,6)
ORDER BY o.EmployeeID;
];