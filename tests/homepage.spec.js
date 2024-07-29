const {test,expect} = require('@playwright/test');

test('Home Page',async ({page})=>{
   await page.goto('https://demo.haroldwaste.com/authentication');
   const pageTitle =  await page.title();
   console.log('Page title is',pageTitle);
    const pageURL = await page.url(); 
    console.log('Page URL is',pageURL);
   await expect(page).toHaveTitle('Jules.ai')
   await expect(page).toHaveURL('https://demo.haroldwaste.com/authentication');
   await page.close();
   
   
})