import {test,expect } from '@playwright/test';

test('Locators',async ({page})=>{
    await page.goto('https://demo.haroldwaste.com/authentication');
    await page.locator("//input[@name='email']").fill("qa@julesai.com");
    await page.locator("//input[@name='password']").fill('Omkar@123');
    await page.locator("//span[contains(text(),'Log in')]").click();

    
    try{
        
        const toastElement = await page.getByText('Your email and/or password are incorrects').innerText();
        console.log('Toast message text:', toastElement);
        console.log('Invalid Login')
    }
    catch(err){
        console.log("element not found hence valid login")
    }
    // console.log('SUCCESS');
    page.close();
});