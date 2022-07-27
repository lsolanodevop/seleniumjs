const {Builder,By,Key} = require("selenium-webdriver");
const chrome = require("chromedriver");

async function run(){
    const driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://formy-project.herokuapp.com/dragdrop");

    const draggable = await driver.findElement(By.id("image"));

    const droppable = await driver.findElement(By.id("box"));

    await driver.actions().dragAndDrop(draggable,droppable).perform();

    let targetText = await droppable.getText();
}

run();