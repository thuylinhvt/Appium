Feature: Verify product name and product price]

	
  Background: User open the TIKI application
    Given I am on the "Home Screen"
    Then I should see "Menu Icon" on top screen
	
   Scenario: Verify items are displayed when I click the Laptop - May vi tinh - Linh kien
    When I click the "Menu Icon"
    And I click the "Danh muc san pham"
    And I scroll up and I click the "Laptop - May vi tinh - Linh kien"
    Then I should see the title of screen is "Laptop - May vi tinh - Linh kien"
    When I scroll up and I should see "Moi nhat"
    And I click the "Xem tat ca"
    And I click the "First product"
    Then I should see "Product name"
    And I should see "Product price"
   
  
	