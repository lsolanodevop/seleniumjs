const {Builder,By,Key} = require("selenium-webdriver");
const chrome = require("chromedriver");

async function runTest(){

    const driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://formy-project.herokuapp.com/autocomplete");

    await driver.findElement(By.id("autocomplete")).sendKeys("1555 Park Blvd, Palo Alto, CA");

    await driver.findElement(By.className("pac-item")).click();

    await driver.quit();
}

runTest();