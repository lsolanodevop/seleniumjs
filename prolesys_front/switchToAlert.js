const {Builder,By, until} = require("selenium-webdriver");

async function run(){

    const driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://formy-project.herokuapp.com/switch-window");

    await driver.findElement(By.id("alert-button")).click();

    await driver.wait(until.alertIsPresent());

    let alert = await driver.switchTo().alert();

    let alertText = await alert.getText();


    await alert.accept();

}

run();