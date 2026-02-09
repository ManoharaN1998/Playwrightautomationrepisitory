class LoginPage{
    constructor(page){
        this.page=page
        this.userName = page.locator('[name="username"]')
        this.password = page.locator('[name="password"]')
        this.loginButton = page.locator('button:has-text("Login")')
    }

    async setUserName(username){
        await this.userName.fill(username)
    }

    async setPassword(pwd){
        await this.password.fill(pwd)
    }

    async clickLoginButton(){
        await this.loginButton.click()
    }
}
module.exports = {LoginPage}