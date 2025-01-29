from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import json

service = Service(executable_path="./chromedriver.exe")
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)

def getImagesFromStore():
    driver.get("https://atid.store/")
    try:
        shop_button = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((
            By.XPATH,
            "(//span[@class='elementor-button-text'][normalize-space()='Shop Now'])[1]"
        ))
        ).click()
        image_container = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((
            By.CLASS_NAME,
            "products.columns-4"
        ))
        )
        allImages = WebDriverWait(driver, 10).until(
            EC.presence_of_all_elements_located((
                By.CLASS_NAME,
                "attachment-woocommerce_thumbnail"
            ))
        )

        imgs_src = list(map(
            lambda img: { "imageUrl": img.get_attribute("src"),
                        "sourceUrl": driver.current_url,
                        "depth": 1,
                        } 
            ,allImages))
        return {
            "result": imgs_src,
        }
    except:
        print('getImagesFromStore failed')


results = getImagesFromStore()
if(results):
    print(json.dumps(results, indent=4))

time.sleep(10)

driver.quit()