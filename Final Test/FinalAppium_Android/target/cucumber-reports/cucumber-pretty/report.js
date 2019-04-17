$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AndroidTestApp.feature");
formatter.feature({
  "line": 1,
  "name": "Test TIKI App",
  "description": "",
  "id": "test-tiki-app",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6973361098,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User open the TIKI application",
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
  "duration": 6695680258,
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
  "duration": 2446423352,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify items are displayed on HomePage",
  "description": "",
  "id": "test-tiki-app;verify-items-are-displayed-on-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I should see \"Menu Icon\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see \"Search textbox\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see \"Cart Icon\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see \"Slider\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see \"Danh muc san pham\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I scroll up and I should see \"Dich vu tien ich\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I scroll up and I should see \"Tim kiem nhieu nhat\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Menu Icon",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 427354864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search textbox",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 2855932408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cart Icon",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 441328108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Slider",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 1100059534,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Danh muc san pham",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 760089439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dich vu tien ich",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.scrollToDisplay(String)"
});
formatter.result({
  "duration": 26732333931,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tim kiem nhieu nhat",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.scrollToDisplay(String)"
});
formatter.result({
  "duration": 306857989,
  "status": "passed"
});
formatter.write("scenario pass");
formatter.after({
  "duration": 519556,
  "status": "passed"
});
formatter.after({
  "duration": 3392711864,
  "status": "passed"
});
formatter.before({
  "duration": 6895435983,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User open the TIKI application",
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
  "duration": 5648522780,
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
  "duration": 350541054,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify all item in menu left",
  "description": "",
  "id": "test-tiki-app;verify-all-item-in-menu-left",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I click the \"Menu Icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should see \"Trang chu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I should see \"Danh muc san pham trong Left Menu\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see \"Quan ly don hang\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see \"San pham yeu thich\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see \"Quan ly tai khoan\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see \"Thong bao cua toi\"",
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
  "duration": 1242840542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Trang chu",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 2804030302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Danh muc san pham trong Left Menu",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 2849923885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Quan ly don hang",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 3595488025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "San pham yeu thich",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 4746481486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Quan ly tai khoan",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 1247838680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thong bao cua toi",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 2145148419,
  "status": "passed"
});
formatter.write("scenario pass");
formatter.after({
  "duration": 416699,
  "status": "passed"
});
formatter.after({
  "duration": 5093293558,
  "status": "passed"
});
formatter.before({
  "duration": 6554204962,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User open the TIKI application",
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
  "duration": 4494112556,
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
  "duration": 1210508647,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify items are displayed when I click the DanhMucSanPham item",
  "description": "",
  "id": "test-tiki-app;verify-items-are-displayed-when-i-click-the-danhmucsanpham-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "I click the \"Menu Icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click the \"Danh muc san pham trong Left Menu\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see \"Nha sach TIKI\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I should see \"Thoi trang\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see \"Do choi - Me \u0026 Be\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I scroll up and I should see \"Laptop - May vi tinh - Linh kien\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I scroll up and I should see \"Thiet bi so - Phu kien so\"",
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
  "duration": 4039943781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Danh muc san pham trong Left Menu",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 4493728940,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nha sach TIKI",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 2895393929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thoi trang",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 999767155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do choi - Me \u0026 Be",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 797225920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laptop - May vi tinh - Linh kien",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.scrollToDisplay(String)"
});
formatter.result({
  "duration": 24450340672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thiet bi so - Phu kien so",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.scrollToDisplay(String)"
});
formatter.result({
  "duration": 200752269,
  "status": "passed"
});
formatter.write("scenario pass");
formatter.after({
  "duration": 341756,
  "status": "passed"
});
formatter.after({
  "duration": 3509473826,
  "status": "passed"
});
formatter.before({
  "duration": 6744886146,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User open the TIKI application",
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
  "duration": 5447647734,
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
  "duration": 440453277,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify items are displayed when I click the Laptop - May vi tinh - Linh kien",
  "description": "",
  "id": "test-tiki-app;verify-items-are-displayed-when-i-click-the-laptop---may-vi-tinh---linh-kien",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "I click the \"Menu Icon\"",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I click the \"Danh muc san pham trong Left Menu 2\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I scroll up and I click the \"Laptop - May vi tinh - Linh kien\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see the title of screen is \"Laptop - May vi tinh - Linh kien\"",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I should see \"Ban chay nhat\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I scroll up and I should see \"Giam gia nhieu nhat\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I scroll up and I should see \"Moi nhat\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I scroll down and I should see \"Ban chay nhat\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I scroll right to left and I should see 20 \"product\" are display in the ban chay nhat panel",
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
  "duration": 1100200779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Danh muc san pham trong Left Menu 2",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 8290532107,
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
  "duration": 24604356509,
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
  "duration": 3351566529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ban chay nhat",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 439713089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Giam gia nhieu nhat",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.scrollToDisplay(String)"
});
formatter.result({
  "duration": 23698262306,
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
  "duration": 23998524322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ban chay nhat",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.scrollDownToDisplay(String)"
});
formatter.result({
  "duration": 23948082803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product",
      "offset": 44
    }
  ],
  "location": "StepDefinitions.verifyProductNumber(String)"
});
formatter.result({
  "duration": 102713045542,
  "status": "passed"
});
formatter.write("scenario pass");
formatter.after({
  "duration": 1309828,
  "status": "passed"
});
formatter.after({
  "duration": 6136347886,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 46,
  "name": "Verify product in cart",
  "description": "",
  "id": "test-tiki-app;verify-product-in-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "I click the \"Search textbox\"",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I sendkeys \"\u003ckey\u003e\" into \"textbox\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click \"search button\" on the keyboard",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I scroll up and I click the \"result product\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I should see \"product name\"",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "I should see \"product price\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I scroll up and I should see \"Chon mua\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I click the \"Chon mua\" button in the detail product",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I click the \"Xem gio hang\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I should see name of \"product name\" is \"\u003cname\u003e\" in the cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "I should see price of \"product price\" is \"\u003cprice\u003e\" in the cart page",
  "keyword": "And "
});
formatter.examples({
  "line": 58,
  "name": "",
  "description": "",
  "id": "test-tiki-app;verify-product-in-cart;",
  "rows": [
    {
      "cells": [
        "key",
        "name",
        "price"
      ],
      "line": 59,
      "id": "test-tiki-app;verify-product-in-cart;;1"
    },
    {
      "cells": [
        "Toi thay hoa vang tren co xanh",
        "Tôi Thấy Hoa Vàng Trên Cỏ Xanh",
        "125.000 ₫"
      ],
      "line": 60,
      "id": "test-tiki-app;verify-product-in-cart;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7743903514,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User open the TIKI application",
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
  "duration": 5439614346,
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
  "duration": 3459834393,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Verify product in cart",
  "description": "",
  "id": "test-tiki-app;verify-product-in-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "I click the \"Search textbox\"",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I sendkeys \"Toi thay hoa vang tren co xanh\" into \"textbox\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click \"search button\" on the keyboard",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I scroll up and I click the \"result product\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I should see \"product name\"",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "I should see \"product price\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I scroll up and I should see \"Chon mua\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I click the \"Chon mua\" button in the detail product",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I click the \"Xem gio hang\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I should see name of \"product name\" is \"Tôi Thấy Hoa Vàng Trên Cỏ Xanh\" in the cart page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "I should see price of \"product price\" is \"125.000 ₫\" in the cart page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Search textbox",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 2536539327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Toi thay hoa vang tren co xanh",
      "offset": 12
    },
    {
      "val": "textbox",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.sendkeys(String,String)"
});
formatter.result({
  "duration": 12794080701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "search button",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.clickKeyboard(String)"
});
formatter.result({
  "duration": 6347004775,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "result product",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.scrollToClick(String)"
});
formatter.result({
  "duration": 1099065847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product name",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 1997751199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product price",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.verifyDisplay(String)"
});
formatter.result({
  "duration": 1148739830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chon mua",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.scrollToDisplay(String)"
});
formatter.result({
  "duration": 248671052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chon mua",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.clickChonMuaButton1(String)"
});
formatter.result({
  "duration": 654558269,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Xem gio hang",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 1244977426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product name",
      "offset": 22
    },
    {
      "val": "Tôi Thấy Hoa Vàng Trên Cỏ Xanh",
      "offset": 40
    }
  ],
  "location": "StepDefinitions.verifyProductName(String,String)"
});
formatter.result({
  "duration": 2647460676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product price",
      "offset": 23
    },
    {
      "val": "125.000 ₫",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.verifyPriceProduct(String,String)"
});
formatter.result({
  "duration": 399460267,
  "status": "passed"
});
formatter.write("scenario pass");
formatter.after({
  "duration": 337665,
  "status": "passed"
});
formatter.after({
  "duration": 3400155518,
  "status": "passed"
});
});