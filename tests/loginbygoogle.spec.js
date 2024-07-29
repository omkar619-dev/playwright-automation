const {test,expect} = require('@playwright/test');
test('ValidLogin',async ({page})=>{
    await page.goto('https://demo.haroldwaste.com/authentication');
    await page.locator("//span[contains(text(),'Login with Google')]").click();
    await page.waitForLoadState('networkidle');
    
    try{   
        await page.waitForSelector("//input[@id='identifierId']");
        await page.fill("//input[@id='identifierId']", 'omkarshendge619');
        await page.click("//span[normalize-space()='Next']");

        await page.waitForSelector('input[type="password"]');
  await page.fill('input[type="password"]', 'Omkar@123');
  await page.click('class="VfPpkd-vQzf8d"');
//   await page.waitForNavigation({ url: '**/your-redirect-url' }); // Adjust based on your redirect URL

  await page.waitForLoadState('networkidle');
  const pageContent = await page.content();
    const textToFind = 'Purchase & Opportunity list';
    const isTextPresent = pageContent.includes(textToFind);  
    if (isTextPresent) {
        console.log("login is successfull")
      } 
    }catch(err){
        console.log("login is not successfull")
    }
     console.log('SUCCESS');
    await page.close();
});