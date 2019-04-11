$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("IOSTestApp.feature");
formatter.feature({
  "line": 1,
  "name": "Test BoardBank-master App",
  "description": "",
  "id": "test-boardbank-master-app",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10661951762,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User open the BoardBank-master application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the \"Home Screen\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click the \"Setting icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click the \"New game button 1\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click the \"New game button 2\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see \"BoardBank\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Home Screen",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.homeScreen(String)"
});
formatter.result({
  "duration": 1690572555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Setting icon",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 2095976512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New game button 1",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 1749286313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New game button 2",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 9394915447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BoardBank",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 2747838467,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify UI Home screen",
  "description": "",
  "id": "test-boardbank-master-app;verify-ui-home-screen",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I should see \"Add icon\" available for click",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should see \"BoardBank\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see \"Setting icon\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Add icon",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyAvailable(String)"
});
formatter.result({
  "duration": 640868775,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BoardBank",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 1004340308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Setting icon",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 993192211,
  "status": "passed"
});
formatter.write("scenario pass");
formatter.after({
  "duration": 636755,
  "status": "passed"
});
formatter.after({
  "duration": 1112178740,
  "status": "passed"
});
formatter.before({
  "duration": 7196231642,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User open the BoardBank-master application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the \"Home Screen\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click the \"Setting icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click the \"New game button 1\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click the \"New game button 2\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see \"BoardBank\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Home Screen",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.homeScreen(String)"
});
formatter.result({
  "duration": 2184243026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Setting icon",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 2299394772,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New game button 1",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 1552296866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New game button 2",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 10149464449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BoardBank",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 2795309298,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify UI Add Player Screen",
  "description": "",
  "id": "test-boardbank-master-app;verify-ui-add-player-screen",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I click the \"Add icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I should see \"Name textbox\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I should see \"Balance textbox\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see \"Icon number\" is 12",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see \"Add Playe button\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Add icon",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 858389085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name textbox",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 8634489334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Balance textbox",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 8349367143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Icon number",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyIconNumber(String)"
});
formatter.result({
  "duration": 16198222786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Playe button",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 8604745714,
  "status": "passed"
});
formatter.write("scenario pass");
formatter.after({
  "duration": 367225,
  "status": "passed"
});
formatter.after({
  "duration": 1248808472,
  "status": "passed"
});
formatter.before({
  "duration": 7555513262,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User open the BoardBank-master application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the \"Home Screen\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click the \"Setting icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click the \"New game button 1\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click the \"New game button 2\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see \"BoardBank\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Home Screen",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.homeScreen(String)"
});
formatter.result({
  "duration": 1090570694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Setting icon",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 2346392573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New game button 1",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 1700932531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New game button 2",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 9792858682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BoardBank",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 2402497282,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Add new a Player",
  "description": "",
  "id": "test-boardbank-master-app;add-new-a-player",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I click the \"Add icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I sendkeys \"Thuy Linh\" into \"Name textbox\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I sendkeys \"1000\" into \"Balance value\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select \"Icon\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click the \"Add Player button\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see the \"Player Name\" is \"Thuy Linh\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I should see the \"Balance value\" is \"1000\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Add icon",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 1092323890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thuy Linh",
      "offset": 12
    },
    {
      "val": "Name textbox",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.sendkeys(String,String)"
});
formatter.result({
  "duration": 21903598938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 12
    },
    {
      "val": "Balance value",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.sendkeys(String,String)"
});
formatter.result({
  "duration": 21910642440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Icon",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.selectIcon(String)"
});
formatter.result({
  "duration": 9385965069,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Player button",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 15149953884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Player Name",
      "offset": 18
    },
    {
      "val": "Thuy Linh",
      "offset": 35
    }
  ],
  "location": "StepDefinitions.verifyText(String,String)"
});
formatter.result({
  "duration": 3044968542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Balance value",
      "offset": 18
    },
    {
      "val": "1000",
      "offset": 37
    }
  ],
  "location": "StepDefinitions.verifyText(String,String)"
});
formatter.result({
  "duration": 947446614,
  "status": "passed"
});
formatter.write("scenario pass");
formatter.after({
  "duration": 366179,
  "status": "passed"
});
formatter.after({
  "duration": 1199705464,
  "status": "passed"
});
formatter.before({
  "duration": 6810979172,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User open the BoardBank-master application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the \"Home Screen\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click the \"Setting icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click the \"New game button 1\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click the \"New game button 2\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see \"BoardBank\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Home Screen",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.homeScreen(String)"
});
formatter.result({
  "duration": 1039966003,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Setting icon",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 2000719686,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New game button 1",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 1846566007,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New game button 2",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 9443160329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BoardBank",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 2301670661,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Add Balance for a item",
  "description": "",
  "id": "test-boardbank-master-app;add-balance-for-a-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "I am on the \"Home Screen\"",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I click the \"Setting icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I sendkeys \"200\" into \"Quick Add Amount\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click the \"Save Settings button\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click the \"Add icon\"",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I sendkeys \"Thuy Linh\" into \"Name textbox\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I sendkeys \"1000\" into \"Balance value\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I select \"Icon\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click the \"Add Player button\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I should see the \"Player Name\" is \"Thuy Linh\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I click the \"item\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I should see \"menu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I click the \"Add $200\"",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I should see the \"Balance value\" is \"1200\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Home Screen",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.homeScreen(String)"
});
formatter.result({
  "duration": 998469328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Setting icon",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 2191139229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 12
    },
    {
      "val": "Quick Add Amount",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.sendkeys(String,String)"
});
formatter.result({
  "duration": 12399278393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save Settings button",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 1610641260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add icon",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 1286088542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thuy Linh",
      "offset": 12
    },
    {
      "val": "Name textbox",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.sendkeys(String,String)"
});
formatter.result({
  "duration": 22271374898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 12
    },
    {
      "val": "Balance value",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.sendkeys(String,String)"
});
formatter.result({
  "duration": 22816899911,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Icon",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.selectIcon(String)"
});
formatter.result({
  "duration": 9697963393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Player button",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 15057137850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Player Name",
      "offset": 18
    },
    {
      "val": "Thuy Linh",
      "offset": 35
    }
  ],
  "location": "StepDefinitions.verifyText(String,String)"
});
formatter.result({
  "duration": 3129471106,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "item",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 2211716923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "menu",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 3115734910,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add $200",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 8585720386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Balance value",
      "offset": 18
    },
    {
      "val": "1200",
      "offset": 37
    }
  ],
  "location": "StepDefinitions.verifyText(String,String)"
});
formatter.result({
  "duration": 884308394,
  "status": "passed"
});
formatter.write("scenario pass");
formatter.after({
  "duration": 598897,
  "status": "passed"
});
formatter.after({
  "duration": 1057183550,
  "status": "passed"
});
formatter.before({
  "duration": 8010841885,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User open the BoardBank-master application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the \"Home Screen\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click the \"Setting icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click the \"New game button 1\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click the \"New game button 2\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see \"BoardBank\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Home Screen",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.homeScreen(String)"
});
formatter.result({
  "duration": 1027510862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Setting icon",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 2172416774,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New game button 1",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 1697774073,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New game button 2",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 9693977958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BoardBank",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 2730497881,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Change value of Default Balance",
  "description": "",
  "id": "test-boardbank-master-app;change-value-of-default-balance",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 48,
  "name": "I am on the \"Home Screen\"",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "I click the \"Setting icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "I sendkeys \"1500\" into \"Default Balance\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click the \"Save Settings button\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click the \"Setting icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I sendkeys \"3000\" into \"Default Balance\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I click the \"Save Settings button\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I should see \"BoardBank\"",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "I click the \"Add icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "I should see the \"Balance value\" is \"3000\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Home Screen",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.homeScreen(String)"
});
formatter.result({
  "duration": 997064394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Setting icon",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 2349304704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1500",
      "offset": 12
    },
    {
      "val": "Default Balance",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.sendkeys(String,String)"
});
formatter.result({
  "duration": 5012726986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save Settings button",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 1171452007,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Setting icon",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 3579188324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3000",
      "offset": 12
    },
    {
      "val": "Default Balance",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.sendkeys(String,String)"
});
formatter.result({
  "duration": 13282750487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save Settings button",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 1486224750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BoardBank",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 3347516316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add icon",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 853684097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Balance value",
      "offset": 18
    },
    {
      "val": "3000",
      "offset": 37
    }
  ],
  "location": "StepDefinitions.verifyText(String,String)"
});
formatter.result({
  "duration": 8480142699,
  "status": "passed"
});
formatter.write("scenario pass");
formatter.after({
  "duration": 433575,
  "status": "passed"
});
formatter.after({
  "duration": 1068985056,
  "status": "passed"
});
formatter.before({
  "duration": 7919088569,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User open the BoardBank-master application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the \"Home Screen\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click the \"Setting icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click the \"New game button 1\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click the \"New game button 2\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see \"BoardBank\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Home Screen",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.homeScreen(String)"
});
formatter.result({
  "duration": 989091404,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Setting icon",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 2220030431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New game button 1",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 1724238675,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New game button 2",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 9362043163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BoardBank",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 2602805782,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Change value of Quick Add Amount",
  "description": "",
  "id": "test-boardbank-master-app;change-value-of-quick-add-amount",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 60,
  "name": "I click the \"Setting icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I sendkeys \"500\" into \"Quick Add Amount\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I click the \"Save Settings button\"",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I should see \"Board Bank\"",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "I click the \"Add icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "I sendkeys \"Thuy Linh\" into \"Name textbox\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I sendkeys \"1000\" into \"Balance value\"",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I select \"Icon\"",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I click the \"Add Player button\"",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I click the \"item\"",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "I should see \"menu\"",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I click the \"Add $500\"",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I should see \"Balance value\" is \"1500\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Setting icon",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 2249365200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 12
    },
    {
      "val": "Quick Add Amount",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.sendkeys(String,String)"
});
formatter.result({
  "duration": 12134498958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save Settings button",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 1411301017,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Board Bank",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 93573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add icon",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 1267886610,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thuy Linh",
      "offset": 12
    },
    {
      "val": "Name textbox",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.sendkeys(String,String)"
});
formatter.result({
  "duration": 21746483297,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 12
    },
    {
      "val": "Balance value",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.sendkeys(String,String)"
});
formatter.result({
  "duration": 21706745249,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Icon",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.selectIcon(String)"
});
formatter.result({
  "duration": 9388500648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Player button",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 15090546288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "item",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 4120540679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "menu",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 3156355849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add $500",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 48699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Balance value\" is \"1500",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 414154,
  "status": "passed"
});
formatter.write("scenario pass");
formatter.after({
  "duration": 315044,
  "status": "passed"
});
formatter.after({
  "duration": 1029985891,
  "status": "passed"
});
});