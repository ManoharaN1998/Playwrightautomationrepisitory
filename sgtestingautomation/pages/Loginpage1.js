class loginpage1{
    constructor(page){
        this.page=page
        this.page1usernameField = page.locator('[name="username"]')
        this.page1passwordFields = page.locator('[name="password"]')
        this.page1signinbutton =  page.locator("//button[normalize-space()='Sign In']")
    }

    async setUsernamefields(Username1){
        this.page1usernameField.fill(Username1)
    }
    async setPassword(password1){
        await this.page1passwordFields.fill(password1)
    }
    async clickonSigninButton(){
         await this.page1signinbutton.click()
    }
}
module.exports={loginpage1}