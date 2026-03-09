class HomePage{
    constructor(page){
        this.page=page
        this.profileImage = page.locator('.oxd-userdropdown-img')
        this.logoutLink = page.locator('a:has-text("Logout")')
    }

    async clickProfileImage(){
        await this.profileImage.click()
    }

    async clickLogoutLink(){
        await this.logoutLink.click()
    }
}
module.exports = {HomePage}