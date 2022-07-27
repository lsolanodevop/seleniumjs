const {Builder,By,Key} = require("selenium-webdriver");

async function run(){

    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://formy-project.herokuapp.com/switch-window");

    await driver.findElement(By.id("new-tab-button")).click();

    const originalWindow = await driver.getWindowHandle();

    const windows = await driver.getAllWindowHandles();

    windows.forEach(async handle =>{
        if(handle !== originalWindow){
            await driver.switchTo().window(handle);
        }
    });
    
    await driver.switchTo().window(originalWindow);

    }
    // await driver.findElement(By.id("alert-button")).click();
    //new-tab-button
run();