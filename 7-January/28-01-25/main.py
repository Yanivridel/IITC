from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time

service = Service(executable_path="./chromedriver.exe")
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)

driver.get("https://atid.store/")

print(driver.title)
# driver.get("http://localhost:5173/")
# driver.maximize_window()
# print(driver.current_url)
# driver.back()
# driver.forward()

shop_button = driver.find_element(
    By.XPATH,
    "(//a[@role='button'])[11]"
)
shop_button.click()

time.sleep(10)

driver.quit()
