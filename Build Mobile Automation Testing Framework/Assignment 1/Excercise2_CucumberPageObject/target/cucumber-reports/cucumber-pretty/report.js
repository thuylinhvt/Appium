$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AndroidTestApp.feature");
formatter.feature({
  "line": 1,
  "name": "Verify product name and product price]",
  "description": "",
  "id": "verify-product-name-and-product-price]",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8692288737,
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
  "duration": 4936727369,
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
  "duration": 1906529978,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify product name and product price",
  "description": "",
  "id": "verify-product-name-and-product-price];verify-product-name-and-product-price",
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
  "name": "I click the \"Thoi trang\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I scroll up and I should see \"Moi nhat\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click the \"Xem tat ca\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click the \"Filter\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click the \"Danh muc san pham 2\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I scroll up and I click the \"Phu kien thoi trang\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click the \"Trang suc\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click the \"Trang suc bac\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I scroll down and I should see \"menu query\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click the \"close menu query\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click the \"First product\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see \"Product name\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
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
  "duration": 915019381,
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
  "duration": 1997703686,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thoi trang",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 2940836516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Moi nhat",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.scrollUpToDisplay(String)"
});
formatter.result({
  "duration": 24913067948,
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
  "duration": 1346080634,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Filter",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 2586546914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Danh muc san pham 2",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 753691313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Phu kien thoi trang",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.scrollUpToClick(String)"
});
formatter.result({
  "duration": 24242123790,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Trang suc",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 1696610684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Trang suc bac",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 1450969332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "menu query",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.scrollDownToDisplay(String)"
});
formatter.result({
  "duration": 4047112725,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "close menu query",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 497698917,
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
  "duration": 1997885902,
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
  "duration": 2995193030,
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
  "duration": 200772685,
  "status": "passed"
});
formatter.write("scenario pass");
formatter.after({
  "duration": 674378,
  "status": "passed"
});
formatter.after({
  "duration": 3399759101,
  "status": "passed"
});
});