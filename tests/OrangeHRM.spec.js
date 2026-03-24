import{test, expect} from '@playwright/test';
import { loginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { LogoutPage } from '../pages/LogoutPage';

test('OrangeHRM', async({page})=>{

    const login = new loginPage(page);
    await login.gotoLoginPage()
    await page.waitForTimeout(3000);
    await expect(page).toHaveTitle('OrangeHRM');
    await login.login('Admin','admin123')
    //await page.waitForTimeout(3000);

    const homepage = new HomePage(page)
    await page.waitForTimeout(3000);
    await homepage.SearchAdminUser('Admin','Ranga Akunuri','Enabled')
    await page.waitForTimeout(5000);

    const logoutpage = new LogoutPage(page)
    await page.waitForTimeout(3000);
    await logoutpage.logout()

    // await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    // await page.getByPlaceholder('Username').fill("Admin")
    // await page.getByPlaceholder("Password").fill("admin123")
    // await page.waitForTimeout(3000);
    // await page.locator("//button[text() =' Login ']").click();
    // await page.waitForTimeout(3000);
    // page.on('dialog', dialog => 
    //     dialog.accept());
    // await expect(page).toHaveTitle("OrangeHRM");


})

// npx playwright test tests/OrangeHRM.spec.js --project chromium --headed