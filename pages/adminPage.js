import BasePage from './basePage.js';
import logger from '../support/logger.js';

export default class AdminPage extends BasePage {
  constructor(page) {
    super(page);
    this.logger = logger;
    this.adminMenu = 'a.oxd-main-menu-item[href*="admin/viewAdminModule"]';
    this.addButton = 'button:has-text("Add")';
    this.userRoleDropdown = 'div.oxd-input-group:has(label:has-text("User Role")) div.oxd-select-text-input';
    this.employeeNameInput = 'div.oxd-input-group:has(label:has-text("Employee Name")) input';
    this.employeeSuggestions = 'div.oxd-autocomplete-dropdown div[role="option"]';
    this.employeeError = 'div.oxd-input-group:has(label:has-text("Employee Name")) .oxd-text--span';
    this.usernameInput = 'div.oxd-input-group:has(label:has-text("Username")) input';
    this.statusDropdown = 'div.oxd-input-group:has(label:has-text("Status")) div.oxd-select-text-input';
    this.passwordInput = 'div.oxd-input-group:has(label:has-text("Password")) input';
    this.confirmPasswordInput = 'div.oxd-input-group:has(label:has-text("Confirm Password")) input';
    this.saveButton = 'button:has-text("Save")';
    this.userRows = '.oxd-table-body .oxd-table-card';
  }

  async openAdminMenu() {
    this.logger.info('Opening Admin menu');
    await this.click(this.adminMenu);
    await this.waitForSelector(this.addButton);
  }

  async openAddUser() {
    this.logger.info('Opening Add User form');
    await this.click(this.addButton);
    await this.waitForSelector(this.userRoleDropdown);
    await this.waitForSelector(this.saveButton);
  }

  async selectDropdownByLabel(labelText, optionText) {
    const dropdown = this.page.locator(`div.oxd-input-group:has(label:has-text("${labelText}")) div.oxd-select-text-input`).first();
    await dropdown.waitFor({ state: 'visible', timeout: 120000 });
    await dropdown.click({ timeout: 120000 });

    const optionLocator = this.page.locator('.oxd-select-dropdown .oxd-select-option', { hasText: optionText }).first();
    await this.page.waitForSelector('.oxd-select-dropdown .oxd-select-option', { state: 'visible', timeout: 120000 });

    if ((await optionLocator.count()) > 0) {
      this.logger.info(`Selecting dropdown option '${optionText}' for '${labelText}'`);
      await optionLocator.click({ timeout: 120000 });
      return;
    }

    const options = this.page.locator('.oxd-select-dropdown .oxd-select-option');
    const count = await options.count();
    for (let i = 0; i < count; i++) {
      const opt = options.nth(i);
      const txt = (await opt.textContent())?.trim() || '';
      if (txt === optionText) {
        this.logger.info(`Selecting fallback dropdown option '${optionText}' for '${labelText}'`);
        await opt.click({ timeout: 120000 });
        return;
      }
    }

    throw new Error(`Dropdown option '${optionText}' not found for label '${labelText}'`);
  }

  async selectUserRole(userRole) {
    this.logger.info(`Selecting User Role: ${userRole}`);
    await this.selectDropdownByLabel('User Role', userRole);
  }

  async selectStatus(status) {
    this.logger.info(`Selecting Status: ${status}`);
    await this.selectDropdownByLabel('Status', status);
  }

  async getEmployeeSuggestions() {
    const optionLocator = this.page.locator(this.employeeSuggestions);
    const suggestions = [];
    const count = await optionLocator.count();

    for (let i = 0; i < count; i++) {
      const item = optionLocator.nth(i);
      const text = (await item.textContent())?.trim() || '';
      if (!text || text === 'Searching....') {
        continue;
      }
      suggestions.push(text);
    }

    return suggestions;
  }

  async isEmployeeValidationErrorVisible() {
    const errorLocator = this.page.locator(this.employeeError);
    if (await errorLocator.count() === 0) {
      return false;
    }
    const errors = await errorLocator.allTextContents();
    const errorText = errors.map(text => text.trim()).join(' ').toLowerCase();
    return /invalid|required|error/.test(errorText);
  }

  async getSelectedEmployeeName() {
    const employeeInput = this.page.locator(this.employeeNameInput).first();
    return employeeInput.inputValue();
  }

  async selectEmployeeName(employeeName) {
    this.logger.info(`Selecting Employee Name using autocomplete for partial text: ${employeeName}`);
    const employeeInput = this.page.locator(this.employeeNameInput).first();
    await employeeInput.waitFor({ state: 'visible', timeout: 120000 });
    await employeeInput.click({ timeout: 120000 });
    await employeeInput.fill(employeeName, { timeout: 120000 });

    await this.page.waitForSelector(this.employeeSuggestions, { state: 'visible', timeout: 120000 });

    const startTime = Date.now();
    const maxWait = 120000;
    let selectedText = null;

    while (Date.now() - startTime < maxWait) {
      const suggestions = await this.getEmployeeSuggestions();
      if (suggestions.length === 0) {
        const noRecords = await this.page.locator(this.employeeSuggestions, { hasText: 'No Records Found' }).first();
        if (await noRecords.count() > 0) {
          throw new Error(`No employee records found for '${employeeName}'`);
        }
        await this.page.waitForTimeout(250);
        continue;
      }

      this.logger.info(`Employee autocomplete suggestions: ${suggestions.join(', ')}`);

      const selectedIndex = suggestions.findIndex(text => text.toLowerCase() === employeeName.toLowerCase()) >= 0
        ? suggestions.findIndex(text => text.toLowerCase() === employeeName.toLowerCase())
        : suggestions.findIndex(text => text.toLowerCase().includes(employeeName.toLowerCase()));

      const matchIndex = selectedIndex >= 0 ? selectedIndex : 0;
      const selectedOption = this.page.locator(this.employeeSuggestions).nth(matchIndex);
      selectedText = suggestions[matchIndex];
      await selectedOption.click({ timeout: 120000 });
      break;
    }

    if (!selectedText) {
      throw new Error(`Unable to select an employee suggestion for '${employeeName}'`);
    }

    const selectedValue = await this.getSelectedEmployeeName();
    if (!selectedValue || !selectedValue.toLowerCase().includes(employeeName.toLowerCase())) {
      throw new Error(`Selected employee value did not populate correctly. Expected part of '${employeeName}', got '${selectedValue}'`);
    }

    if (await this.isEmployeeValidationErrorVisible()) {
      throw new Error(`Employee Name validation error displayed after selection for '${selectedText}'`);
    }

    this.logger.info(`Selected employee '${selectedText}' in the Add User form`);
  }

  async fillPassword(password) {
    this.logger.info('Entering password and confirm password');
    await this.page.locator(this.passwordInput).first().fill(password, { timeout: 120000 });
    await this.page.locator(this.confirmPasswordInput).first().fill(password, { timeout: 120000 });
  }

  async selectUsername(username) {
    this.logger.info(`Entering username: ${username}`);
    await this.page.locator(this.usernameInput).first().fill(username, { timeout: 120000 });
  }

  async saveUser() {
    this.logger.info('Clicking Save to create the system user');
    await this.click(this.saveButton);
  }

  async addSystemUser({ userRole, employeeName, username, status, password }) {
    await this.selectUserRole(userRole);
    await this.selectEmployeeName(employeeName);
    await this.selectUsername(username);
    await this.selectStatus(status);
    await this.fillPassword(password);
    await this.saveUser();
  }

  async isUserListed(username) {
    const row = this.page.locator(this.userRows, { hasText: username });
    await row.first().scrollIntoViewIfNeeded();
    return row.first().isVisible();
  }
}
