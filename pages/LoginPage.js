export class loginPage {

    constructor(page) {

        //Locators
        this.page = page; //class level page veriable declaration
        this.username_Txt = page.getByPlaceholder('Username');
        this.password_Txt = page.getByPlaceholder("Password");
        this.loginBtn = page.locator("//button[text() =' Login ']");
    }

    //methods
    async gotoLoginPage(){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    async login(username ,password)
    {
        await this.username_Txt.fill(username);
        await this.password_Txt.fill(password);
        await this.loginBtn.click();

        await this.page.on('dialog', async dialog=>{
            await dialog.accept();
        })
    }

}