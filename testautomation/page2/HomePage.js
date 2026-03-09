class HomePage{
    constructor(page){
        this.page=page
        this.profileImage = "//img[@alt='profile picture']"
        this.logout = "//a[text()='Logout']"
    }

    async clickProfileImage(){
        await this.page.click(this.profileImage)
    }

    async clickLogout(){
        await this.page.click(this.logout)
    }
}
module.exports = {HomePage}