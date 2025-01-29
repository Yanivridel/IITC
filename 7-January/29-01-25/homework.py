from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

service = Service(executable_path="./chromedriver.exe")
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)

def testLoadPage():
    driver.get("https://atid.store/")
    page_title = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((
            By.XPATH,
            "(//h1[normalize-space()='ATID Demo Store'])[1]"))
    )
    if(page_title and page_title.text.__contains__("ATID")):
        print('testLoadPage passed')
    else:
        print('testLoadPage failed')

def testHomeButton():
    driver.get("https://atid.store/")
    home_button = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((
            By.XPATH,
            "(//a[@class='menu-link'][normalize-space()='Home'])[1]"
        ))
    ).click()
    if(driver.current_url == "https://atid.store/"):
        print('testHomeButton passed')
    else:
        print('testHomeButton failed')

def testShopButtonExists():
    driver.get("https://atid.store/")
    try:
        shop_button = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((
            By.XPATH,
            "(//span[@class='elementor-button-text'][normalize-space()='Shop Now'])[1]"
        ))
        )
        print('testShopButtonExists passed')
    except:
        print('testShopButtonExists failed')

def testNavigateBarValid():
    driver.get("https://atid.store/")
    try:
        nav_bar_text = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((
            By.XPATH,
            "(//div[@class='ast-builder-grid-row ast-builder-grid-row-has-sides ast-grid-center-col-layout'])[1]"
        ))
        ).text.lower()
        substrings = ["Home", "Store", "Men", "Women", "Accessories", "About", "Contact Us"]

        if all(substring.lower() in nav_bar_text for substring in substrings):
            print('testNavigateBarValid passed')
    except:
        print('testNavigateBarValid failed')

def testShopButtonRedirect():
    driver.get("https://atid.store/")
    try:
        shop_button = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((
            By.XPATH,
            "(//span[@class='elementor-button-text'][normalize-space()='Shop Now'])[1]"
        ))
        ).click()
        if(driver.current_url == "https://atid.store/store/"):
            print('testShopButtonRedirect passed')
        else:
            print('testShopButtonRedirect failed')
    except:
        print('testShopButtonRedirect failed')

def testSearchBarVisible():
    driver.get("https://atid.store/")
    try:
        shop_button = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((
                By.XPATH,
                "(//span[@class='elementor-button-text'][normalize-space()='Shop Now'])[1]"
                ))
        ).click()

        search_bar = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((
                By.XPATH,
                "(//input[@id='wc-block-search__input-1'])[1]"
                ))
        )

        if(search_bar.is_displayed()):
            print('testSearchBarVisible passed')
        else:
            print('testSearchBarVisible failed')
    except:
        print('testSearchBarVisible failed')

def testCategoriesValid():
    driver.get("https://atid.store/")
    try:
        shop_button = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((
                By.XPATH,
                "(//span[@class='elementor-button-text'][normalize-space()='Shop Now'])[1]"
                ))
        ).click()

        categories = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((
                By.XPATH,
                "(//div[@id='woocommerce_product_categories-2'])[1]"
                ))
        ).text.lower()

        substrings = ["Accessories", "Men", "Women"]

        if all(substring.lower() in categories for substring in substrings):
            print('testCategoriesValid passed')
        else:
            print('testCategoriesValid failed')
    except:
        print('testCategoriesValid failed')


testLoadPage()
testHomeButton()
testShopButtonExists()
testNavigateBarValid()
testShopButtonRedirect()
testSearchBarVisible()
testCategoriesValid()

time.sleep(10)

driver.quit()