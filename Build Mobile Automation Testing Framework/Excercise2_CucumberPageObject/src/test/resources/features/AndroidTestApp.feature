Feature: Verify product name and product price]

	
  Background: User open the TIKI application
    Given I am on the "Home Screen"
    Then I should see "Menu Icon" on top screen
	
   Scenario: Verify product name and product price
    When I click the "Menu Icon"
    And I click the "Danh muc san pham"
    And I click the "Thoi trang"
    And I scroll up and I should see "Moi nhat"
    And I click the "Xem tat ca"
    And I click the "Filter"
    And I click the "Danh muc san pham 2"
    And I scroll up and I click the "Phu kien thoi trang"
    And I click the "Trang suc"
    And I click the "Trang suc bac"
    And I scroll down and I should see "menu query"
    And I click the "close menu query"
    And I click the "First product"
    Then I should see "Product name"
    And I should see "Product price"
    
    
    
   
  
	