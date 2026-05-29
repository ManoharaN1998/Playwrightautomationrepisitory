@admin @smoke
Feature: Admin system user creation
  As an admin user
  I want to create a new system user using autocomplete employee selection
  So that the new account is created correctly in OrangeHRM

  Scenario: Create a new system user from the Admin section
    Given the user is on the OrangeHRM login page
    When the user logs in with valid credentials
    Then the dashboard welcome banner is visible
    When the user opens the Admin menu
    And the user navigates to the Add User form
    And the user selects the role "Admin"
    And the user selects the employee name using autocomplete
    And the user selects the status "Enabled"
    And the user enters a unique username and secure password
    And the user saves the system user
    Then the new user is created successfully
