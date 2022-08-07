const {Builder, By, Key} = require("selenium-webdriver");
const chrome = require("chromedriver");
async function example(){

    //launch the browser
    let driver = await new Builder().forBrowser("chrome").build();
    //navigate to our application
    await driver.get("https://formy-project.herokuapp.com/form");
    //add a todo
    await driver.findElement(By.id("first-name")).sendKeys("Learning Selenium",Key.RETURN);
    //close the browser
    // driver.quit();
}

example();