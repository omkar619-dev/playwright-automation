const {test,expect} = require('@playwright/test');
test('ValidLogin',async ({page})=>{
    await page.goto('https://demo.haroldwaste.com/authentication');
    await page.locator("//input[@name='email']").fill("qa@julesai.com");
    await page.locator("//input[@name='password']").fill('QaJULES2023!');
    await page.locator("//span[contains(text(),'Log in')]").click();
    await page.waitForTimeout(3000);
    for(let i=0;i<1;i++){
        await page.locator("//input[@placeholder='Search']").click()
    }
    await page.locator("//input[@placeholder='Search']").fill('invoice');
    await page.press("//input[@placeholder='Search']", 'Enter');
    const pageContent = await page.content();
    const textToFind = 'To be invoiced';
    const isTextPresent = pageContent.includes(textToFind);  
    if (isTextPresent) {
        console.log(`The text "${textToFind}" is present on the page.`);
      } else {
        console.log(`The text "${textToFind}" is not present on the page.`);
      }
    await page.waitForTimeout(3000);

     console.log('SUCCESS');
    await page.close();
});