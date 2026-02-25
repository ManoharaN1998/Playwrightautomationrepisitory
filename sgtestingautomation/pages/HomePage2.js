class Homepage2{
    constructor(page){
        this.page=page
        this.page1logoutButton = page.locator("//button[normalize-space()='Logout']")
    }
    async clicklogoutbutton(){
        await this.page1logoutButton.click()
    }
}
module.exports={Homepage2}