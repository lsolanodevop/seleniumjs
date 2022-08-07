const {Builder,By,Key} = require("selenium-webdriver");
const chrome = require("chromedriver");

const driver = new Builder().forBrowser("chrome").build();

async function runFirstTest(){


    await driver.get("http://localhost:3000/auth/login")

    await driver.findElement(By.className("text-corpoelec")).click();

    await driver.get("http://localhost:3000/auth/register");

    await driver.findElement(By.name("document_number")).sendKeys("24902310");

    await driver.findElement(By.className("active")).click();

}

async function wait(){
     setTimeout(() =>{
    }, 5000);
}

async function runSecondStage(){

    await driver.get("http://localhost:3000/auth/register");

    await driver.findElement(By.name("names")).sendKeys("24902310");

    await driver.findElement(By.name("last_name")).sendKeys("24902310");

    await driver.findElement(By.name("email")).sendKeys("24902310");

    await driver.findElement(By.name("phone_1")).sendKeys("24902310");

    await driver.findElement(By.name("phone_2")).sendKeys("24902310");

    await driver.findElement(By.name("address")).sendKeys("24902310");

    await driver.findElement(By.name("password")).sendKeys("24902310");

    await driver.findElement(By.name("password_confirmation")).sendKeys("24902310");


    await driver.findElement(By.className("btn-primary")).click();
}

async function close(){
    wait();
    driver.quit();
}

runFirstTest();
wait();
runSecondStage();
// close();
