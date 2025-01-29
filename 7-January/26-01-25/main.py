from sum_sqrt import sqrtSum
arr = [x ** 2 for x in range(1,11)]

# print(arr)

def factorial(n):
    sum = 1
    for i in range(2,n+1):
        sum*= i
    return sum

# print(factorial(5))


def discount(price, percentage):
    return price * (1 - (percentage/100))

# print(discount(100,20))

def sayHelloToAll(*args):
    return ', '.join([f'Hello {x}' for x in args])

# msg = sayHelloToAll("Fitoussi", "Yaniv", "Elchi", "TalKal")
# print(msg)


def formatProducts(**kwargs):
    formatted = ""
    for key, val in kwargs.items():
        formatted += f"{key}: {val}\n"
    return formatted

# msg = formatProducts(name= "Fitoussi",name2= "Yaniv",name3= "Elchi",name4= "TalKal")
# print(msg)


def filterEven(my_list):
    return list(filter(lambda x: x%2 == 0, my_list))

# filtered = filterEven([1,2,3,4,5,6,7,8,9,10])
# print(filtered)

# sum = sqrtSum(1,3,5,6,8,1,1)
# print(sum)

x, y , z = 1, 2, 3
x, y, z = z, x, y
# print(x,y,z)


# try:
#     file = open('./sum_sqrtasds.py', "r")
# except FileNotFoundError:
#     print("Not Found")
# finally:
#     print("done")

found_count = 0
try:
    files = open('./files.txt', "r")
    list = files.readline()
    files_list =  list[1:len(list)-1].split(", ")
    for file in files_list:
        try:
            fp = open(file.strip(), "r")
            print(f"{file} File Found, Content:\n" + fp.read() + '\n')
            found_count+=1
        except FileNotFoundError:
            print(f"{file} File Not Found")
        
except FileNotFoundError:
    print("files.txt Not Found")
finally:
    print(f"Found {found_count} Files")