const {Builder,By,Key} = require("selenium-webdriver");
const chrome = require("chromedriver");

async function run(){

    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://formy-project.herokuapp.com/keypress");

     
    await driver.findElement(By.id("name")).sendKeys("Hello",Key.RETURN);

    await driver.findElement(By.id("button")).click();
    await driver.quit();
}

run();