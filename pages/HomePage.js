exports.HomePage =  class HomePage{

    constructor(page){
        this.page = page;
        this.adminbtn = "//span[normalize-space()='Admin']" 
        this.username_Txt = "(//input[@class='oxd-input oxd-input--active'])[2]";

        this.UserRoleBtn = "(//div[@class='oxd-select-text--after'])[1]";
        this.RoleOptions = "//div[@role='listbox']//div//span";
        this.dropDownAdminBtn = "(//span[normalize-space()='Admin'])[2]"

        this.EmployeeName_Txt = "//input[@placeholder='Type for hints...']"
        this.EmpNameSelectorList = "//div[@role='listbox']//div//span";

        this.StatusDropDownBtn = "(//div[@class='oxd-select-text--after'])[2]";
        this.StatusOptionlist = "//div[@role='listbox']//div//span";
        //firstName_1774240050329 Test Test

    }
    
    async gotoLoginPage(){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    async SearchAdminUser(username, empName, status){
        await this.page.locator(this.adminbtn).click();
        await this.page.locator(this.username_Txt).fill(username);
        await this.page.locator(this.UserRoleBtn).click()

        const OptionsList = await this.page.$$(this.RoleOptions);
        for(const option of OptionsList)
        {
            if(username === await option.textContent())
            {
                await option.click();
                    
            }
        }

        await this.page.locator(this.EmployeeName_Txt).fill(empName);
        const empList = await this.page.$$(this.EmpNameSelectorList)
        for(const emp of empList)
        {
            if(empName === await emp.textContent())
            {
                await emp.click();
            }

        }

        await this.page.locator(this.StatusDropDownBtn).click()
        const StatusList = await this.page.$$(this.StatusOptionlist)
        for(const list of StatusList)
        {
            if(status === await list.textContent())
            {
                await list.click();
            }
        }




    }

}