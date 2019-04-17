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
  
  Scenario Outline: Add new a Player
    When I click the "Add icon"
    And I sendkeys "<player name>" into "Name textbox"
    And I sendkeys "<balance value>" into "Balance value"
    And I select "Icon"
    And I click the "Add Player button"
    Then I should see the "Player Name" is "<player name>"
    And I should see the "Balance value" is "<balance expected>"

    Examples: 
      | player name | balance value | balance expected |
      | Thuy Linh   |          1000 | $1.000           |

  Scenario Outline: Add Balance for a item
    Given I am on the "Home Screen"
    When I click the "Setting icon"
    And I sendkeys "<quick add amount>" into "Quick Add Amount"
    And I click the "Save Settings button"
    Given I click the "Add icon"
    And I sendkeys "<player name>" into "Name textbox"
    And I sendkeys "<balance value>" into "Balance value"
    And I select "Icon"
    And I click the "Add Player button"
    Then I should see the "Player Name" is "<player name>"
    When I click the "item"
    Then I should see "menu"
    When I click the "Add $200"
    Then I should see the "Balance value" is "<balance expected>"
     Examples: 
      | quick add amount | player name | balance value | balance expected |
      | 200              | Thuy Linh   |          1000 | $1.200           |
    
    
    
  Scenario Outline: Change value of Default Balance
    Given I am on the "Home Screen"
    When I click the "Setting icon"
    And I sendkeys "<default balance1>" into "Default Balance"
    And I click the "Save Settings button"
    When I click the "Setting icon"
    And I sendkeys "<default balance2>" into "Default Balance"
    And I click the "Save Settings button"
    Then I should see "BoardBank"
    When I click the "Add icon"
   	Then I should see the "Balance value 2" is "<balance expected>"
    	Examples:
    	| default balance1 | default balance2| balance expected |
      | 1500             | 			3000       | 3000             |
#			
 

  Scenario Outline: Change value of Quick Add Amount
    When I click the "Setting icon"
    And I sendkeys "<quick add amount>" into "Quick Add Amount"
    And I click the "Save Settings button"
    Then I should see "Board Bank"
    When I click the "Add icon"
    And I sendkeys "<player name>" into "Name textbox"
    And I sendkeys "<balance value>" into "Balance value"
    And I select "Icon"
    And I click the "Add Player button"
    When I click the "item"
    And I should see "menu"
    And I click the "Add $500"
    Then I should see the "Balance value" is "<balance expected>"
	    Examples: 
	      | quick add amount | player name | balance value | balance expected |
	      | 500              | Thuy Linh   |          1000 | $1.500           |
    
