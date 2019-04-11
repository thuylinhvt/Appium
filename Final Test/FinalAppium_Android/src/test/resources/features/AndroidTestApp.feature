Feature: Test TIKI App

  Background: User open the TIKI application
    Given I am on the "Home Screen"
    Then I should see "Menu Icon" on top screen

  Scenario: Verify items are displayed on HomePage
    Then I should see "Menu Icon"
    And I should see "Search textbox"
    And I should see "Cart Icon"
    And I should see "Slider"
    And I should see "Danh muc san pham"
    And I scroll up and I should see "Dich vu tien ich"
    And I scroll up and I should see "Tim kiem nhieu nhat"

  Scenario: Verify all item in menu left
    When I click the "Menu Icon"
    Then I should see "Trang chu"
    And I should see "Danh muc san pham trong Left Menu"
    And I should see "Quan ly don hang"
    And I should see "San pham yeu thich"
    And I should see "Quan ly tai khoan"
    And I should see "Thong bao cua toi"

  Scenario: Verify items are displayed when I click the DanhMucSanPham item
  	When I click the "Menu Icon"
    And I click the "Danh muc san pham trong Left Menu"
    Then I should see "Nha sach TIKI"
    And I should see "Thoi trang"
    And I should see "Do choi - Me & Be"
    And I scroll up and I should see "Laptop - May vi tinh - Linh kien"
    And I scroll up and I should see "Thiet bi so - Phu kien so"

    Scenario: Verify items are displayed when I click the Laptop - May vi tinh - Linh kien
    When I click the "Menu Icon"
    And I click the "Danh muc san pham trong Left Menu 2"
    And I scroll up and I click the "Laptop - May vi tinh - Linh kien"
    Then I should see the title of screen is "Laptop - May vi tinh - Linh kien"
    And I should see "Ban chay nhat"
    And I scroll up and I should see "Giam gia nhieu nhat"
    And I scroll up and I should see "Moi nhat"
    When I scroll down and I should see "Ban chay nhat"
    And I scroll right to left and I should see 20 "product" are display in the ban chay nhat panel
    
   
    Scenario: Verify product in cart
    When I click the "Search textbox"
    And I sendkeys "Tren duong bang" into "textbox" 
   	And I click the "first result"
   	And I scroll up and I click the "result product"
    Then I should see "product name"
    And I should see "product price"
    And I scroll up and I should see "Chon mua"
    When I click the "Chon mua" button in the detail product
    And I click the "Xem gio hang"
    Then I should see name of "product name" is "Tren duong bang" in the cart page 
    And I should see price of "product price" is "59.000 ₫" in the cart page
    
    
    
    
    
    
    
    
    
    