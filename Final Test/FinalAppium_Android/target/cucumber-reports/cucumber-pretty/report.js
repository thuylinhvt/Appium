$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AndroidTestApp.feature");
formatter.feature({
  "line": 1,
  "name": "Test TIKI App",
  "description": "",
  "id": "test-tiki-app",
  "keyword": "Feature"
});
formatter.before({
  "duration": 17478827298,
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
  "duration": 4360781548,
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
  "duration": 2345133293,
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
  "duration": 1736661717,
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
  "duration": 695286340,
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
  "duration": 1051130349,
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
  "duration": 1091845284,
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
  "duration": 4003396641,
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
  "duration": 25744035916,
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
  "duration": 648208469,
  "status": "passed"
});
formatter.write("scenario pass");
formatter.after({
  "duration": 643276,
  "status": "passed"
});
formatter.after({
  "duration": 8748432007,
  "status": "passed"
});
formatter.before({
  "duration": 8746386343,
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
  "duration": 4750678661,
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
  "duration": 451181264,
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
  "duration": 2438313012,
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
  "duration": 2692062107,
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
  "duration": 2194210289,
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
  "duration": 1905346650,
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
  "duration": 1841390692,
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
  "duration": 6803173119,
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
  "duration": 2147073839,
  "status": "passed"
});
formatter.write("scenario pass");
formatter.after({
  "duration": 2138010,
  "status": "passed"
});
formatter.after({
  "duration": 7941792207,
  "status": "passed"
});
formatter.before({
  "duration": 6905568063,
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
  "duration": 5647766865,
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
  "duration": 389638095,
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
  "duration": 947320111,
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
  "duration": 5850938979,
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
  "duration": 4700654604,
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
  "duration": 1103053287,
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
  "duration": 746357360,
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
  "duration": 24342654709,
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
  "duration": 448045507,
  "status": "passed"
});
formatter.write("scenario pass");
formatter.after({
  "duration": 364170,
  "status": "passed"
});
formatter.after({
  "duration": 4849514178,
  "status": "passed"
});
formatter.before({
  "duration": 8912025745,
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
  "duration": 5577070887,
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
  "duration": 1552095972,
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
  "duration": 1902806322,
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
  "duration": 10541833685,
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
  "duration": 26498811681,
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
  "duration": 5189874419,
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
  "duration": 149715851,
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
  "duration": 30448722677,
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
  "duration": 24348123658,
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
  "duration": 3699046673,
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
  "duration": 107804791776,
  "status": "passed"
});
formatter.write("scenario pass");
formatter.after({
  "duration": 698235,
  "status": "passed"
});
formatter.after({
  "duration": 4992970469,
  "status": "passed"
});
formatter.before({
  "duration": 7058285993,
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
  "duration": 6287249015,
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
  "duration": 1105273675,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Verify product in cart",
  "description": "",
  "id": "test-tiki-app;verify-product-in-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 47,
  "name": "I click the \"Search textbox\"",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I sendkeys \"Tren duong bang\" into \"textbox\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click the \"first result\"",
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
  "name": "I should see name of \"product name\" is \"Tren duong bang\" in the cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "I should see price of \"product price\" is \"59.000 ₫\" in the cart page",
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
  "duration": 1188048150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tren duong bang",
      "offset": 12
    },
    {
      "val": "textbox",
      "offset": 35
    }
  ],
  "location": "StepDefinitions.sendkeys(String,String)"
});
formatter.result({
  "duration": 8750795847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first result",
      "offset": 13
    }
  ],
  "location": "StepDefinitions.click(String)"
});
formatter.result({
  "duration": 6649223948,
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
  "duration": 6699314200,
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
  "duration": 2446641068,
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
  "duration": 147752795,
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
  "duration": 297284641,
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
  "duration": 651655044,
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
  "duration": 1499090196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product name",
      "offset": 22
    },
    {
      "val": "Tren duong bang",
      "offset": 40
    }
  ],
  "location": "StepDefinitions.verifyProductName(String,String)"
});
formatter.result({
  "duration": 3241946923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product price",
      "offset": 23
    },
    {
      "val": "59.000 ₫",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.verifyPriceProduct(String,String)"
});
formatter.result({
  "duration": 91617,
  "status": "passed"
});
formatter.write("scenario pass");
formatter.after({
  "duration": 227126,
  "status": "passed"
});
formatter.after({
  "duration": 3560695011,
  "status": "passed"
});
});