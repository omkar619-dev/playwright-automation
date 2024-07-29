const {test,expect} = require('@playwright/test');
test('ValidLogin',async ({page})=>{
    await page.goto('https://demo.haroldwaste.com/authentication');
    await page.locator("//input[@name='email']").fill("qa@julesai.com");
    await page.locator("//input[@name='password']").fill('QaJULES2023!');
    await page.locator("//span[contains(text(),'Log in')]").click();
     console.log('SUCCESS');
    await page.close();
});