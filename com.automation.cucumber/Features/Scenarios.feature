#Author: Ramya Subhash
#Keywords Summary : To test http://automationpractice.com/ website
#Feature: List of scenarios.
#1. While registering, if the email address is incorrect. User should see an error message
#2. User should be able to register using a valid email address
#3. Check whether Megamenu works (Dresses -> Summer dresses)
#4. On the Summer dresses page.Click on Sort By: Price and validate whether the product grid is arranged properly

@tag
Feature: Title of your feature
  I want to use this template for my feature file

 @tag1
  Scenario: While registering, if the email address is incorrect. User should see an error message
    Given User has landed on the "Authentication" page
    When User enters an invalid "12345" email address
    Then User should see an error message
    
  @tag1
  Scenario: User should be able to register using a valid email address
    Given User has landed on the "Authentication" page
    And User has a valid "i123456@gmail.in" email address
    When User enters the registration details
    Then User should be able to regiser successfully
    
    @tag1
  Scenario: Check whether Megamenu works (Dresses -> Summer dresses)
    Given User has landed on the "Authentication" page
    And User has a valid "b123456@gmail.in" email address
    And User had logged in the application
    When User selects "DRESSES" menu
    And User selects "Summer Dresses" menu
    Then User should be able navigate to "Summer dresses" menu    
    
     @tag1
  Scenario: On the Summer dresses page.Click on Sort By: Price and validate whether the product grid is arranged properly
   Given User has landed on the "Authentication" page
    And User has a valid "b123456@gmail.in" email address
    And User had logged in the application
    And User selects "DRESSES" menu
    And User selects "Summer Dresses" menu
    When User sorts the menu by "Price: Lowest first" option
    Then User should see the products menu sorted by "Price: Lowest first" option
   
    
