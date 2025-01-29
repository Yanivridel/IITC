from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time

service = Service(executable_path="./chromedriver.exe")
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)



def testSearchProductValid():
    driver.get("https://atid.store/")
    driver.find_element(
    # Enter Men
        By.XPATH,
        "(//a[@class='menu-link'][normalize-space()='Men'])[1]"
    ).click()
    # Get Search
    search_input = driver.find_element(
        By.XPATH,
        "(//input[@id='wc-block-search__input-1'])[1]"
    )
    search_input.send_keys("ATID")

    search_button = driver.find_element(
        By.XPATH,
        "(//button[@aria-label='Search'])[1]"
    )
    search_button.click()

    shoes_card = driver.find_element(
        By.XPATH,
        "(//li[@class='ast-col-sm-12 ast-article-post astra-woo-hover-swap product type-product post-375 status-publish first instock product_cat-women has-post-thumbnail sale shipping-taxable purchasable product-type-simple'])[1]"
    )
    

    shoes_card.click()

    if(driver.current_url == "https://atid.store/product/atid-black-shoes/"):
        print("test url shoe passed")
    else:
        print("test url shoe failed")

    shoes_title = driver.find_element(
        By.XPATH,
        "(//h1[normalize-space()='ATID Black Shoes'])[1]"
    )
    print("Title: ", shoes_title.text)
    shoes_price = driver.find_element(
        By.XPATH,
        "//div[@class='summary entry-summary']//ins//bdi[1]"
    )
    print("Price: ", shoes_price.text.replace('₪', '').strip())


testSearchProductValid()

time.sleep(10)

driver.quit()
