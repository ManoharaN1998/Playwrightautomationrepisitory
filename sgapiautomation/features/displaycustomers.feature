Feature: Display Customers functionality

  Scenario: Display Customers from Server and Validate Response
    When I authentic post request to get the access token
    When I capture access token in a variable
    When I Execute GET Request for All Customers
    When I get the All Customers
    Then I validate the 200 status code
