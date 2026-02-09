class LoginPage{
    constructor(page){
        this.page=page;
        this.userName = "//input[@name='username']"
        this.password = "//input[@name='password']"
        this.loginButton = "//button[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']"
    }

    async setUserName(username){
        await this.page.fill(this.userName, username)
    }

    async setPassword(pwd){
        await this.page.fill(this.password, pwd)
    }

    async clickLogin(){
        await this.page.click(this.loginButton)
    }
}
module.exports = {LoginPage}