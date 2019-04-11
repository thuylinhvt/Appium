Feature: Test BoardBank-master App

  Background: User open the BoardBank-master application
    Given I am on the "Home Screen"
    When I click the "Setting icon"
    And I click the "New game button 1"
    And I click the "New game button 2"
    Then I should see "BoardBank"

  Scenario: Verify UI Home screen
    Then I should see "Add icon" available for click
    And I should see "BoardBank"
    And I should see "Setting icon"

  Scenario: Verify UI Add Player Screen
    When I click the "Add icon"
    Then I should see "Name textbox"
    And I should see "Balance textbox"
    And I should see "Icon number" is 12
    And I should see "Add Playe button"

  Scenario: Add new a Player
    When I click the "Add icon"
    And I sendkeys "Thuy Linh" into "Name textbox"
    And I sendkeys "1000" into "Balance value"
    And I select "Icon"
    And I click the "Add Player button"
    Then I should see the "Player Name" is "Thuy Linh"
    And I should see the "Balance value" is "1000"

  Scenario: Add Balance for a item
    Given I am on the "Home Screen"
    When I click the "Setting icon"
    And I sendkeys "200" into "Quick Add Amount"
    And I click the "Save Settings button"
    Given I click the "Add icon"
    And I sendkeys "Thuy Linh" into "Name textbox"
    And I sendkeys "1000" into "Balance value"
    And I select "Icon" 
    And I click the "Add Player button"
    Then I should see the "Player Name" is "Thuy Linh"
    When I click the "item"
    Then I should see "menu"
    When I click the "Add $200"
    Then I should see the "Balance value" is "1200"

  Scenario: Change value of Default Balance
    Given I am on the "Home Screen"
    When I click the "Setting icon"
     And I sendkeys "1500" into "Default Balance"
    And I click the "Save Settings button"
    When I click the "Setting icon"
    And I sendkeys "3000" into "Default Balance"
    And I click the "Save Settings button"
    Then I should see "BoardBank"
    When I click the "Add icon"
    Then I should see the "Balance value" is "3000"

  Scenario: Change value of Quick Add Amount
    When I click the "Setting icon"
    And I sendkeys "500" into "Quick Add Amount"
    And I click the "Save Settings button"
    Then I should see "Board Bank"
    When I click the "Add icon"
    And I sendkeys "Thuy Linh" into "Name textbox"
    And I sendkeys "1000" into "Balance value"
    And I select "Icon"
    And I click the "Add Player button"
    When I click the "item"
    And I should see "menu"
    And I click the "Add $500"
    Then I should see "Balance value" is "1500"
