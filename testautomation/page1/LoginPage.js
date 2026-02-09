
class LoginPage{
    constructor(page){
        this.page=page;
        this.userName = "//input[@name='username']"
        this.password = "//input[@name='password']"
        this.loginButton = "//button[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']"
        this.profileImage = "//img[@alt='profile picture']"
        this.logout = "//a[text()='Logout']"
    }

    async loginAction(){
        await this.page.fill(this.userName, "Admin")
        await this.page.fill(this.password, "admin123")
        await this.page.click(this.loginButton)    
    }

    async logoutAction(){
        await this.page.click(this.profileImage)
        await this.page.click(this.logout)
    }
}

module.exports = {LoginPage}