$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("IOSTestApp.feature");
formatter.feature({
  "line": 1,
  "name": "Test BoardBank-master App",
  "description": "",
  "id": "test-boardbank-master-app",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9724804699,
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
  "duration": 1394707972,
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
  "duration": 2186173086,
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
  "duration": 1908732417,
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
  "duration": 11085799490,
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
  "duration": 2797097222,
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
  "duration": 693222685,
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
  "duration": 999583791,
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
  "duration": 1055228628,
  "status": "passed"
});
formatter.write("scenario pass");
formatter.after({
  "duration": 676173,
  "status": "passed"
});
formatter.after({
  "duration": 1140604886,
  "status": "passed"
});
formatter.before({
  "duration": 9011950226,
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
  "duration": 1129306789,
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
  "duration": 2507725627,
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
  "duration": 1843506335,
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
  "duration": 10450099519,
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
  "duration": 2693893331,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify UI Add Player Screen",
  "description": "",
  "id": "test-boardbank-master-app;verify-ui-add-player-screen",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I click the \"Add icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should see \"Name textbox\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I should see \"Balance textbox\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see \"Icon number\" is 12",
  "keyword": "And "
});
formatter.step({
  "line": 21,
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
  "duration": 1845376780,
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
  "duration": 8500841210,
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
  "duration": 7395959569,
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
  "duration": 15652848507,
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
  "duration": 7796781177,
  "status": "passed"
});
formatter.write("scenario pass");
formatter.after({
  "duration": 393729,
  "status": "passed"
});
formatter.after({
  "duration": 1144576087,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Add new a Player",
  "description": "",
  "id": "test-boardbank-master-app;add-new-a-player",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "I click the \"Add icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I sendkeys \"\u003cplayer name\u003e\" into \"Name textbox\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I sendkeys \"\u003cbalance value\u003e\" into \"Balance value\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select \"Icon\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click the \"Add Player button\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see the \"Player Name\" is \"\u003cplayer name\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I should see the \"Balance value\" is \"\u003cbalance expected\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "test-boardbank-master-app;add-new-a-player;",
  "rows": [
    {
      "cells": [
        "player name",
        "balance value",
        "balance expected"
      ],
      "line": 33,
      "id": "test-boardbank-master-app;add-new-a-player;;1"
    },
    {
      "cells": [
        "Thuy Linh",
        "1000",
        "$1.000"
      ],
      "line": 34,
      "id": "test-boardbank-master-app;add-new-a-player;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9949480643,
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
  "duration": 1243326152,
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
  "duration": 2444288846,
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
  "duration": 1855221963,
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
  "duration": 11503154070,
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
  "duration": 3037001445,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Add new a Player",
  "description": "",
  "id": "test-boardbank-master-app;add-new-a-player;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "I click the \"Add icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I sendkeys \"Thuy Linh\" into \"Name textbox\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I sendkeys \"1000\" into \"Balance value\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select \"Icon\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click the \"Add Player button\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see the \"Player Name\" is \"Thuy Linh\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I should see the \"Balance value\" is \"$1.000\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 1407053233,
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
  "duration": 17742204735,
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
  "duration": 19747467744,
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
  "duration": 10558047265,
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
  "duration": 15237621686,
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
  "duration": 2947242372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Balance value",
      "offset": 18
    },
    {
      "val": "$1.000",
      "offset": 37
    }
  ],
  "location": "StepDefinitions.verifyText(String,String)"
});
formatter.result({
  "duration": 946673323,
  "status": "passed"
});
formatter.write("scenario pass");
formatter.after({
  "duration": 364121,
  "status": "passed"
});
formatter.after({
  "duration": 1102160761,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 36,
  "name": "Add Balance for a item",
  "description": "",
  "id": "test-boardbank-master-app;add-balance-for-a-item",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 37,
  "name": "I am on the \"Home Screen\"",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I click the \"Setting icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I sendkeys \"\u003cquick add amount\u003e\" into \"Quick Add Amount\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click the \"Save Settings button\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click the \"Add icon\"",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "I sendkeys \"\u003cplayer name\u003e\" into \"Name textbox\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I sendkeys \"\u003cbalance value\u003e\" into \"Balance value\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I select \"Icon\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click the \"Add Player button\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I should see the \"Player Name\" is \"\u003cplayer name\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I click the \"item\"",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I should see \"menu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I click the \"Add $200\"",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "I should see the \"Balance value\" is \"\u003cbalance expected\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "test-boardbank-master-app;add-balance-for-a-item;",
  "rows": [
    {
      "cells": [
        "quick add amount",
        "player name",
        "balance value",
        "balance expected"
      ],
      "line": 52,
      "id": "test-boardbank-master-app;add-balance-for-a-item;;1"
    },
    {
      "cells": [
        "200",
        "Thuy Linh",
        "1000",
        "$1.200"
      ],
      "line": 53,
      "id": "test-boardbank-master-app;add-balance-for-a-item;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8600325029,
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
  "duration": 992479384,
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
  "duration": 2341109197,
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
  "duration": 1956371000,
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
  "duration": 10097406052,
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
  "duration": 3591378838,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Add Balance for a item",
  "description": "",
  "id": "test-boardbank-master-app;add-balance-for-a-item;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 37,
  "name": "I am on the \"Home Screen\"",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I click the \"Setting icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I sendkeys \"200\" into \"Quick Add Amount\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click the \"Save Settings button\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click the \"Add icon\"",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "I sendkeys \"Thuy Linh\" into \"Name textbox\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I sendkeys \"1000\" into \"Balance value\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I select \"Icon\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click the \"Add Player button\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I should see the \"Player Name\" is \"Thuy Linh\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I click the \"item\"",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I should see \"menu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I click the \"Add $200\"",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "I should see the \"Balance value\" is \"$1.200\"",
  "matchedColumns": [
    3
  ],
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
  "duration": 1048959971,
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
  "duration": 2643935923,
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
  "duration": 11052109289,
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
  "duration": 1546739689,
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
  "duration": 1396677816,
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
  "duration": 16606254806,
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
  "duration": 17835882934,
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
  "duration": 9241160676,
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
  "duration": 18997869829,
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
  "duration": 4650793141,
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
  "duration": 2696305610,
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
  "duration": 3392403757,
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
  "duration": 8955922749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Balance value",
      "offset": 18
    },
    {
      "val": "$1.200",
      "offset": 37
    }
  ],
  "location": "StepDefinitions.verifyText(String,String)"
});
formatter.result({
  "duration": 1041160789,
  "status": "passed"
});
formatter.write("scenario pass");
formatter.after({
  "duration": 2398377,
  "status": "passed"
});
formatter.after({
  "duration": 1150856216,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 57,
  "name": "Change value of Default Balance",
  "description": "",
  "id": "test-boardbank-master-app;change-value-of-default-balance",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "I am on the \"Home Screen\"",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "I click the \"Setting icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "I sendkeys \"\u003cdefault balance1\u003e\" into \"Default Balance\"",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I click the \"Save Settings button\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I click the \"Setting icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "I sendkeys \"\u003cdefault balance2\u003e\" into \"Default Balance\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I click the \"Save Settings button\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I should see \"BoardBank\"",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "I click the \"Add icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "I should see the \"Balance value 2\" is \"\u003cbalance expected\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "test-boardbank-master-app;change-value-of-default-balance;",
  "rows": [
    {
      "cells": [
        "default balance1",
        "default balance2",
        "balance expected"
      ],
      "line": 69,
      "id": "test-boardbank-master-app;change-value-of-default-balance;;1"
    },
    {
      "cells": [
        "1500",
        "3000",
        "3000"
      ],
      "line": 70,
      "id": "test-boardbank-master-app;change-value-of-default-balance;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8672831314,
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
  "duration": 1049388200,
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
  "duration": 2148940700,
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
  "duration": 1551847838,
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
  "duration": 10151227548,
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
  "duration": 2451102863,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "Change value of Default Balance",
  "description": "",
  "id": "test-boardbank-master-app;change-value-of-default-balance;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "I am on the \"Home Screen\"",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "I click the \"Setting icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "I sendkeys \"1500\" into \"Default Balance\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I click the \"Save Settings button\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I click the \"Setting icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "I sendkeys \"3000\" into \"Default Balance\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I click the \"Save Settings button\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I should see \"BoardBank\"",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "I click the \"Add icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "I should see the \"Balance value 2\" is \"3000\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 993267968,
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
  "duration": 2798652380,
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
  "duration": 8804104896,
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
  "duration": 1838568327,
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
  "duration": 4747597978,
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
  "duration": 9501209075,
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
  "duration": 1607580965,
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
  "duration": 2988859140,
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
  "duration": 1007330001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Balance value 2",
      "offset": 18
    },
    {
      "val": "3000",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.verifyText(String,String)"
});
formatter.result({
  "duration": 8640061519,
  "status": "passed"
});
formatter.write("scenario pass");
formatter.after({
  "duration": 438156,
  "status": "passed"
});
formatter.after({
  "duration": 1111110350,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 71,
      "value": "#"
    }
  ],
  "line": 74,
  "name": "Change value of Quick Add Amount",
  "description": "",
  "id": "test-boardbank-master-app;change-value-of-quick-add-amount",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "I click the \"Setting icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "I sendkeys \"\u003cquick add amount\u003e\" into \"Quick Add Amount\"",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I click the \"Save Settings button\"",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I should see \"Board Bank\"",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "I click the \"Add icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "I sendkeys \"\u003cplayer name\u003e\" into \"Name textbox\"",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I sendkeys \"\u003cbalance value\u003e\" into \"Balance value\"",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I select \"Icon\"",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I click the \"Add Player button\"",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I click the \"item\"",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "I should see \"menu\"",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I click the \"Add $500\"",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I should see the \"Balance value\" is \"\u003cbalance expected\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 88,
  "name": "",
  "description": "",
  "id": "test-boardbank-master-app;change-value-of-quick-add-amount;",
  "rows": [
    {
      "cells": [
        "quick add amount",
        "player name",
        "balance value",
        "balance expected"
      ],
      "line": 89,
      "id": "test-boardbank-master-app;change-value-of-quick-add-amount;;1"
    },
    {
      "cells": [
        "500",
        "Thuy Linh",
        "1000",
        "$1.500"
      ],
      "line": 90,
      "id": "test-boardbank-master-app;change-value-of-quick-add-amount;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8077576368,
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
  "duration": 1049640957,
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
  "duration": 2295580622,
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
  "duration": 1914034829,
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
  "duration": 9544576460,
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
  "duration": 2691222384,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "Change value of Quick Add Amount",
  "description": "",
  "id": "test-boardbank-master-app;change-value-of-quick-add-amount;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "I click the \"Setting icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "I sendkeys \"500\" into \"Quick Add Amount\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I click the \"Save Settings button\"",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I should see \"Board Bank\"",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "I click the \"Add icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "I sendkeys \"Thuy Linh\" into \"Name textbox\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I sendkeys \"1000\" into \"Balance value\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I select \"Icon\"",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I click the \"Add Player button\"",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I click the \"item\"",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "I should see \"menu\"",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I click the \"Add $500\"",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I should see the \"Balance value\" is \"$1.500\"",
  "matchedColumns": [
    3
  ],
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
  "duration": 2199716472,
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
  "duration": 8392914871,
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
  "duration": 1548650656,
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
  "duration": 141594,
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
  "duration": 1394836010,
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
  "duration": 16463979625,
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
  "duration": 16597851972,
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
  "duration": 9037551206,
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
  "duration": 14252030168,
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
  "duration": 4200770166,
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
  "duration": 2887897199,
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
  "duration": 8554316928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Balance value",
      "offset": 18
    },
    {
      "val": "$1.500",
      "offset": 37
    }
  ],
  "location": "StepDefinitions.verifyText(String,String)"
});
formatter.result({
  "duration": 892645127,
  "status": "passed"
});
formatter.write("scenario pass");
formatter.after({
  "duration": 292751,
  "status": "passed"
});
formatter.after({
  "duration": 1060547228,
  "status": "passed"
});
});