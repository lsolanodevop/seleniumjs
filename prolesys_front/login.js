const {Builder, By, Key } = require("selenium-webdriver");
const chrome = require("chromedriver");

async function runTest(){
    const driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://localhost:3000/auth/login");

    await driver.findElement(By.name("document_number")).sendKeys("24902313");

    await driver.findElement(By.name("password")).sendKeys("250L$os..");

    await driver.findElement(By.className("btn-primary")).click();

    await driver.get("http://localhost:3000/auth/verification");

    await driver.findElement(By.name("otp")).sendKeys("999999");

    await driver.findElement(By.className("btn-secondary")).click();

}

runTest();