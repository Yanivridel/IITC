import json
import os

print("Start")

def addUser():
    # name = input('Enter your name: ')
    # email = input('Enter your email: ')
    # extra = input('Enter extra details (comma separated): ').split(",")
    name= "Yaniv"
    email= "Ridel"
    extra= ["1.asdasf", "2.sdfdsfds", "3.asdasda"]
    return { "name": name, "email": email, "extra":extra }

user = addUser()

def addUserToDB(**kwargs):
    db_file = "db.json"

    if not os.path.exists(db_file):
        with open(db_file, "w") as f:
            json.dump({"users": []}, f)

    with open(db_file, "r") as f:
        try:
            db = json.load(f)
        except json.JSONDecodeError:
            db = {"users": []}

    db["users"].append(kwargs)

    with open(db_file, "w") as f:
        json.dump(db, f, indent=4)

    print("User added successfully!")

addUserToDB(name=user["name"], email=user["email"], extra=user["extra"])
