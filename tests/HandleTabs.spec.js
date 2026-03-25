import{test,expect,chromium} from '@playwright/test';

test("Multiple tabs", async({})=>{
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://demoqa.com/")
    await page.waitForTimeout(3000);
    await expect(page).toHaveTitle("demosite");
    await page.locator("text = Alerts, Frame & Windows").click()
    await page.locator("text = Browser Windows").click()

    const [newTab] = await Promise.all([
    page.waitForEvent("popup"), //Playwright Consider popup as a Tab.
    await page.locator("#tabButton").click()
    ]);
    
    await newTab.waitForLoadState();
    console.log("New tab Url:", newTab.url());
    await page.waitForTimeout(5000);
    await newTab.close();

})
