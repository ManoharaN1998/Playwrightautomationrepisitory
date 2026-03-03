@Execute
Feature: Verify and validate Create Employee functionalities
  
  Scenario Outline: Verify Create Employee functioanlities
    When I navigate Application url
    Then I find the login page
    When I enter "<username>" in username text field
    When I enter "<password>" in password text field
    When I click on SignIn button
    Then I find the Home page
    When I click on Employees Menu
    When I click on Add Employee button
    When I enter "<FirstName>" in employee First Name text field
    When I enter "<Last Name>" in Last Name text field
    When I enter "<JobName>" in JobName text field
    When I enter "<EmaiId1>" in EmaiId1 text field
    When I enter "<Age>" in Age test field
    When I enter "<Contact Number>" in Contact Number text field
    When I enter "<Salary>" in Salary text field
    When I enter "<Department Name>" in Department Name text field
    When I enter "<City Name>" in City Name text field
    When I enter "<Address>" in Address text field
    When I click on save1 button
    Then I find newly created or modified "<FirstName>" in List Employee Page
    When I delete the newly created or modified "<FirstName>" from List Employee Page
    When I click on Logout option
    Then I find the login page


Examples:
        |username | password | FirstName | Last Name | JobName | EmaiId1 | Age | Contact Number | Salary | Department Name | City Name | Address | 
        | pgudi | pgudi | Manohaa | Nayak |Engineer | nmanu@gmail.com | 25 | 8767567656 | 76000 | IT | Mangalore | B block Chensandra|