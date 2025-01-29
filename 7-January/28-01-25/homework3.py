
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
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

username_input.send_keys(username+"WRONG")
password_input.send_keys(password)

submit_button = driver.find_element(
    By.XPATH,
    "//button[@id='submit']"
)
submit_button.click()

try:
    password_err = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.XPATH, "//div[@id='error']"))
    )

    if(password_err.text.__contains__("Your password is invalid!")):
        print("password err test passed")
    else:
        print("password err test failed")
except Exception as e:
    print("password err test failed: " ,e )


time.sleep(10)

driver.quit()

