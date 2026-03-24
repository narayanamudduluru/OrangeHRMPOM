exports.LogoutPage = class LogoutPage{

    constructor(page){

        this.page = page;
        this.logoutDropDownBtn = "//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']"
        this.logoutBtn = "//a[normalize-space()='Logout']"

    }

    async logout(){
        await this.page.locator(this.logoutDropDownBtn).click();
        await this.page.locator(this.logoutBtn).click();
    }
}