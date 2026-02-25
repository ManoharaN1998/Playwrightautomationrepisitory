class EmployeePage {

    constructor(page) {
        this.page = page;

        // Navigation
        this.employeesLink = page.locator('a:has-text("Employees")')
        this.addEmployeeLink = page.locator('a:has-text("Add Employee")')

        // Input Fields
        this.firstName = page.locator("//input[@placeholder='Enter First Name']")
        this.lastName = page.locator("//input[@placeholder='Enter Last Name']")
        this.jobName = page.locator("//input[@placeholder='Enter Job Name']")
        this.emailId = page.locator('input[type="email"]')
        this.age = page.locator("//input[@placeholder='Enter Age']")
        this.contactNumber = page.locator("//input[@placeholder='Enter Contact Number']")
        this.salary = page.locator("//input[@placeholder='Enter Salary']")
        this.departmentName = page.locator("//input[@placeholder='Enter Department Name']")
        this.cityName = page.locator("//input[@placeholder='Enter City Name']")
        this.address = page.locator("//input[@placeholder='Enter Address']")

        // Buttons
        this.saveButton = page.getByRole('button', { name: 'Save' })
    }

    // =============================
    // Navigation Methods
    // =============================

    async clickOnEmployeeMenu() {
        await this.employeesLink.click();
    }

    async clickOnAddEmployee() {
        await this.addEmployeeLink.click();
    }

    // =============================
    // Setters (Used in Step Definitions)
    // =============================

    async setEmployeeFirstName(firstname) {
        await this.firstName.fill(firstname);
    }

    async setEmployeeLastName(lastname) {
        await this.lastName.fill(lastname);
    }

    async setEmployeeJobname(jobname) {
        await this.jobName.fill(jobname);
    }

    async setEmployeeEmailId(email) {
        await this.emailId.fill(email);
    }

    async setEmployeeAge(age) {
        await this.age.fill(age);
    }

    async setEmployeeContactNumber(contact) {
        await this.contactNumber.fill(contact);
    }

    async setEmployeeSalary(salary) {
        await this.salary.fill(salary);
    }

    async setEmployeeDepartmentName(department) {
        await this.departmentName.fill(department);
    }

    async setEmployeeCityName(city) {
        await this.cityName.fill(city);
    }

    async setEmployeeAddress(address) {
        await this.address.fill(address);
    }

    // =============================
    // Save
    // =============================

    async saveEmployeeRecord() {
        await this.saveButton.click();
    }
}

module.exports = { EmployeePage };