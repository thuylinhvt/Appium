$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AndroidTestApp.feature");
formatter.feature({
  "line": 1,
  "name": "Verify product name and product price]",
  "description": "",
  "id": "verify-product-name-and-product-price]",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10589379494,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User open the TIKI application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on the \"Home Screen\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I should see \"Menu Icon\" on top screen",
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
  "duration": 6244692351,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Menu Icon",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.findMenuIcon(String)"
});
formatter.result({
  "duration": 3134199443,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify items are displayed when I click the Laptop - May vi tinh - Linh kien",
  "description": "",
  "id": "verify-product-name-and-product-price];verify-items-are-displayed-when-i-click-the-laptop---may-vi-tinh---linh-kien",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I click the \"Menu Icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click the \"Danh muc san pham\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I scroll up and I click the \"Laptop - May vi tinh - Linh kien\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see the title of screen is \"Laptop - May vi tinh - Linh kien\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I scroll up and I should see \"Moi nhat\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click the \"Xem tat ca\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click the \"First product\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see \"Product name\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I should see \"Product price\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Menu Icon",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 1189180100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Danh muc san pham",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 1696776107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laptop - May vi tinh - Linh kien",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.scrollToClick(String)"
});
formatter.result({
  "duration": 26112239430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laptop - May vi tinh - Linh kien",
      "offset": 37
    }
  ],
  "location": "StepDefinitions.verifyTitle(String)"
});
formatter.result({
  "duration": 24387673888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Moi nhat",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.scrollToDisplay(String)"
});
formatter.result({
  "duration": 49343580640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Xem tat ca",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 1305309033,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First product",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 5104945768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product name",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.findMenuItem(String)"
});
formatter.result({
  "duration": 1135472923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product price",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.findMenuItem(String)"
});
formatter.result({
  "duration": 701656661,
  "status": "passed"
});
formatter.after({
  "duration": 2899211755,
  "status": "passed"
});
});