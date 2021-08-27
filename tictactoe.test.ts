import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

//HARDER TESTS
describe('Checking those Os boi', () =>{

test('I can start a game', async () => {
    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
});

test('O  added to Box after an X is added', async () => {
    await driver.findElement(By.xpath('//*[@id="cell-0"]')).click()
    await driver.findElement(By.xpath('//*[@id="cell-1"][contains(text(),"O")]'))
});

})


//Describe Block for First Three Tests
describe('Testing Tic Tac Toe', () => {
test('I can start a game', async () => {
    driver.navigate().refresh();
    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
});

test('Upper left square adds an X to the sqaure', async () => {
    let X1 = await driver.findElement(By.xpath('//*[@id="cell-0"]')).click()
    await driver.findElement(By.xpath('//*[@id="cell-0"][contains(text(),"X")]'))
});

test('Upper right square adds an X to the sqaure', async () => {
    let X2 = await driver.findElement(By.xpath('//*[@id="cell-2"]')).click()
    await driver.findElement(By.xpath('//*[@id="cell-2"][contains(text(),"X")]'))
});

test('Upper right square adds an X to the sqaure', async () => {
    let X2 = await driver.findElement(By.xpath('//*[@id="cell-8"]')).click()
    await driver.findElement(By.xpath('//*[@id="cell-8"][contains(text(),"X")]'))
})

})