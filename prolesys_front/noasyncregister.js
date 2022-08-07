const {Builder,By,Key} = require("selenium-webdriver");
const chrome = require("chromedriver");

const driver = new Builder().forBrowser("chrome").build();

 function runFirstTest(){


    driver.get("http://localhost:3000/auth/login")

    driver.findElement(By.className("text-corpoelec")).click();

    driver.get("http://localhost:3000/auth/register");

    driver.findElement(By.name("document_number")).sendKeys("24902310");

    driver.findElement(By.className("active")).click();

    // driver.findElement(By.name("names")).sendKeys("24902310");

    driver.findElement(By.name("last_name")).sendKeys("24902310");

    driver.findElement(By.name("email")).sendKeys("24902310");

    driver.findElement(By.name("phone_1")).sendKeys("24902310");

    driver.findElement(By.name("phone_2")).sendKeys("24902310");

    driver.findElement(By.name("address")).sendKeys("24902310");

    driver.findElement(By.name("password")).sendKeys("24902310");

    driver.findElement(By.name("password_confirmation")).sendKeys("24902310");


    driver.findElement(By.className("btn-primary")).click();

}

 function wait(){
     setTimeout(() =>{
    }, 5000);
}


 function close(){
    wait();
    driver.quit();
}

runFirstTest();
// close();
