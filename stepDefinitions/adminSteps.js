import { When, Then } from '@cucumber/cucumber';
import AdminPage from '../pages/adminPage.js';
import adminUserData from '../data/adminUserData.js';
import { generateSecurePassword } from '../utils/random.js';

When('the user opens the Admin menu', async function () {
  this.adminPage = new AdminPage(this.page);
  await this.adminPage.openAdminMenu();
});

When('the user navigates to the Add User form', async function () {
  await this.adminPage.openAddUser();
});

When('the user selects the role {string}', async function (userRole) {
  await this.adminPage.selectUserRole(userRole);
});

When('the user selects the status {string}', async function (status) {
  await this.adminPage.selectStatus(status);
});

When('the user selects the employee name using autocomplete', async function () {
  await this.adminPage.selectEmployeeName(adminUserData.employeePartialName);
});

When('the user enters a unique username and secure password', async function () {
  const generatedName = `${adminUserData.usernamePrefix}${Date.now()}`;
  const generatedPassword = generateSecurePassword(14);

  this.newSystemUsername = generatedName;
  this.newSystemPassword = generatedPassword;

  await this.adminPage.selectUsername(generatedName);
  await this.adminPage.fillPassword(generatedPassword);
});

When('the user saves the system user', async function () {
  await this.adminPage.saveUser();
});

Then('the new user is created successfully', async function () {
  const listed = await this.adminPage.isUserListed(this.newSystemUsername);
  if (!listed) {
    throw new Error(`New user ${this.newSystemUsername} was not found in the listing`);
  }
});
