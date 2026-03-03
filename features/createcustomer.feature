Feature: Create Customer functionality

  Scenario: Display Customers from Server and Validate Response
    When I authentic post request to get the access token
    When I capture access token in a variable
    When I Create Customer using POST Request
    Then I validate the 201 status code for Customer
    When I fetch newly created Customer using GET request
    Then I validate the 200 status code for fetch Customer
    When I delete newly created customer using Delete request
    Then I validate the 200 status code for delete customer
