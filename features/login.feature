@login @smoke
Feature: OrangeHRM login and logout
  As an OrangeHRM user
  I want to log in and log out successfully
  So that I can verify session flow

  Scenario: Successful login and logout
    Given the user is on the OrangeHRM login page
    When the user logs in with valid credentials
    Then the dashboard welcome banner is visible
    When the user logs out
    Then the login page is displayed again
