
print("============1============")
movies = ["The Maze Runner", "IT", "My First Dragon", "Hunger Games"]
movies.append("Baba And The Forty Thieves")
movies.remove("IT")
print(movies)

print("============2============")
birthday = (3,2001)
print(birthday.__contains__("3"))
birthday_list = list(birthday)
print(birthday_list)
print(birthday)

print("============3============")
my_dict = { 
    "fName": "Yaniv",
    "lName": "Ridel",
    "age": 23,
    "email": "yanivridel@gmail.com",
    "phoneNumber": "0527005508",
}

del my_dict["lName"]
my_dict[("Resting", "Mac", "Apple")] = ["Windows", "Messy Code", "Correcting Elchy"]
print(my_dict)

print("============4============")
my_set = {3,200, 47, 23}
print(my_set)