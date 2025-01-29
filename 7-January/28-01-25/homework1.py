
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time

service = Service(executable_path="./chromedriver.exe")
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)

driver.get("https://practicetestautomation.com/practice-test-login/")

print(driver.title)

username = driver.find_element(
    By.XPATH,
    "(//b[contains(text(),'student')])[1]"
).text
password = driver.find_element(
    By.XPATH,
    "(//b[contains(text(),'Password123')])[1]"
).text
username_input = driver.find_element(
    By.XPATH,
    "//input[@id='username']"
)
password_input = driver.find_element(
    By.XPATH,
    "(//input[@id='password'])[1]"
)

username_input.send_keys(username)
password_input.send_keys(password)

submit_button = driver.find_element(
    By.XPATH,
    "//button[@id='submit']"
)
submit_button.click()

if(driver.current_url.__contains__("practicetestautomation.com/logged-in-successfully/")):
    print("url test passed")
else:
    print("url test failed")

try:
    body = driver.find_element(
        By.TAG_NAME,
        "body"
    )

    if(body.text.__contains__("Congratulations") or  body.text.__contains__("successfully logged in")):
        print("login test passed")
    else:
        print("login test failed")
except Exception as e:
    print("login test failed :", e)

all_a = driver.find_elements(
    By.TAG_NAME,
    "a"
)

isLogoutButton = False
for a in all_a:
    if(a.text.__contains__("Log out")):
        isLogoutButton = True
        break
if(isLogoutButton):
    print("logout test passed")
else:
    print("logout test failed")

    

time.sleep(10)

driver.quit()

