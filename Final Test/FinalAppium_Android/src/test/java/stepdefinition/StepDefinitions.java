/*
*
* (C) Copyright 2019Fresher Academy
* Author apple
* Date Apr 2, 2019
* Version 1.0
*
*/
package stepdefinition;

import static org.testng.Assert.assertTrue;

import java.util.ArrayList;
import java.util.List;

import com.google.common.collect.ImmutableMap;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.CartPage;
import pages.CatagoryPage;
import pages.HomePage;
import pages.LaptopMVTPage;
import pages.ListProductPage;
import pages.ProductDetailPage;
import pages.QueryPage;
import static utils.AppiumBase.driver;

public class StepDefinitions {

	HomePage homePage = new HomePage(driver);
	CatagoryPage catagoryPage = homePage.catagoryPage();
	LaptopMVTPage laptopMVTPage = catagoryPage.laptopMVTPage();
	QueryPage queryPage = homePage.queryPage();
	ListProductPage listProductPage = queryPage.listProductPage();
	ProductDetailPage productDetailPage = listProductPage.productDetailPage();
	CartPage cartPage = productDetailPage.cartPage();

	// Background:

	@Given("^I am on the \"(.*)\"$")
	public void homeScreen(String screen) {
		if (screen.equals("Home Screen")) {
			assertTrue(homePage.getMenuIcon().isDisplayed());
		}
	}

	@Then("^I should see \"(.*)\" on top screen$")
	public void findMenuIcon(String element) {
		if (element.equals("Menu Icon")) {
			assertTrue(homePage.getMenuIcon().isDisplayed());
		}
	}

	@Then("^I should see \"(.*)\"$")
	public void verifyDisplay(String element) {
		if (element.equals("Menu Icon")) {
			assertTrue(homePage.getMenuIcon().isDisplayed());
		}
		if (element.equals("Search textbox")) {
			assertTrue(homePage.getSearchTextBox().isDisplayed());
		}
		if (element.equals("Cart Icon")) {
			assertTrue(homePage.getCartIcon().isDisplayed());
		}
		if (element.equals("Slider")) {
			assertTrue(homePage.getSlider().isDisplayed());
		}

		if (element.equals("Danh muc san pham")) {
			assertTrue(homePage.getDanhMucSanPham().isDisplayed());
		}
		if (element.equals("Trang chu")) {
			assertTrue(homePage.getTrangChu().get(0).isDisplayed());
		}
		if (element.equals("Danh muc san pham trong Left Menu")) {
			assertTrue(homePage.getDanhMucSanPham2().get(1).isDisplayed());
		}
		if (element.equals("Quan ly don hang")) {
			assertTrue(homePage.getQuanLyDonHang().get(2).isDisplayed());
		}
		if (element.equals("San pham yeu thich")) {
			assertTrue(homePage.getSanPhamYeuThich().get(3).isDisplayed());
		}
		if (element.equals("Quan ly tai khoan")) {
			assertTrue(homePage.getQuanLyTaiKhoan().get(4).isDisplayed());
		}
		if (element.equals("Thong bao cua toi")) {
			assertTrue(homePage.getThongBaoCuaToi().get(5).isDisplayed());
		}
		if (element.equals("Nha sach TIKI")) {
			assertTrue(catagoryPage.getNhaSachTiKi().get(0).isDisplayed());
		}
		if (element.equals("Thoi trang")) {
			assertTrue(catagoryPage.getThoiTrang().get(1).isDisplayed());
		}
		if (element.equals("Do choi - Me & Be")) {
			assertTrue(catagoryPage.getDoChoiMeVaBe().get(2).isDisplayed());
		}
		if (element.equals("Laptop - May vi tinh - Linh kien")) {
			assertTrue(catagoryPage.getLaptopMVT().isDisplayed());
		}
		if (element.equals("Thiet bi so - Phu kien so")) {
			assertTrue(catagoryPage.getThietBiSoPhuKienSo().isDisplayed());
		}
		if (element.equals("Ban chay nhat")) {
			assertTrue(laptopMVTPage.getBanChayNhat().isDisplayed());
		}
		if (element.equals("product name")) {
			assertTrue(productDetailPage.getProductName().isDisplayed());
		}
		if (element.equals("product price")) {
			assertTrue(productDetailPage.getProductPrice().isDisplayed());
		}
	}

	@Then("^I scroll up and I should see \"(.*)\"$")
	public void scrollToDisplay(String element) {
		while (true) {
			try {
				if (element.equals("Dich vu tien ich")) {
					assertTrue(homePage.getDichVuTienIch().isDisplayed());
					break;
				}
				if (element.equals("Tim kiem nhieu nhat")) {
					assertTrue(homePage.getTimKiemNhieuNhat().isDisplayed());
					break;
				}
				if (element.equals("Giam gia nhieu nhat")) {
					assertTrue(laptopMVTPage.getGiamGiaNhieuNhat().isDisplayed());
					break;
				}
				if (element.equals("Moi nhat")) {
					assertTrue(laptopMVTPage.getMoiNhat().isDisplayed());
					break;
				}
				if (element.equals("Laptop - May vi tinh - Linh kien")) {
					assertTrue(catagoryPage.getLaptopMVT().isDisplayed());
					break;
				}
				if (element.equals("Thiet bi so - Phu kien so")) {
					assertTrue(catagoryPage.getLaptopMVT().isDisplayed());
					break;
				}
				if (element.equals("Chon mua")) {
					assertTrue(productDetailPage.getChonMuaButton().isDisplayed());
					break;
				}
			} catch (Exception e) {
				// TODO: handle exception
			}
			homePage.swipeMobileUp();
		}
	}

	@When("^I click the \"(.*)\"$")
	public void click(String element) {
		if (element.equals("Menu Icon")) {
			homePage.getMenuIcon().click();
		}
		if (element.equals("Danh muc san pham trong Left Menu")) {
			homePage.getDanhMucSanPham2().get(1).click();
		}
		if (element.equals("Danh muc san pham trong Left Menu 2")) {
			homePage.getDanhMucSanPham2().get(1).click();
		}
		if (element.equals("Laptop - May vi tinh - Linh kien")) {
			catagoryPage.getLaptopMVT().click();
		}
		if (element.equals("Search textbox")) {
			homePage.getSearchTextBox().click();
		}
		if (element.equals("Xem gio hang")) {
			productDetailPage.getXemGioHang().click();
		}
	}

	@When("^I scroll up and I click the \"(.*)\"$")
	public void scrollToClick(String element) {
		while (true) {
			try {
				if (element.equals("Laptop - May vi tinh - Linh kien")) {
					if (catagoryPage.getLaptopMVT().isDisplayed()) {
						catagoryPage.getLaptopMVT().click();
					}
				}
				break;
			} catch (Exception e) {
				// TODO: handle exception
			}
			catagoryPage.swipeMobileUp();
		}
		while (true) {
			try {
				if (element.equals("result product")) {
					if (listProductPage.getExpectedProduct().isDisplayed()) {
						listProductPage.getExpectedProduct().click();
					}
				}
				break;
			} catch (Exception e) {
				// TODO: handle exception
			}
			catagoryPage.swipeMobileUp();
		}
	}

	@Then("^I should see the title of screen is \"(.*)\"$")
	public void verifyTitle(String title) {
		try {
			if (title.equals("Laptop - May vi tinh - Linh kien")) {
				Thread.sleep(2000);
				assertTrue(laptopMVTPage.getTitle().getText().equals("Laptop - Máy Vi Tính - Linh kiện"));
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
	}

	@Then("^I scroll right to left and I should see 20 \"(.*)\" are display in the ban chay nhat panel$")
	public void verifyProductNumber(String product) {
		List<String> listText = new ArrayList<String>();
		int loop = 0;
		if (product.equals("product")) {
			try {
				while (loop < 11) {
					for (int i = 0; i < laptopMVTPage.getProductPrice().size(); i++) {
						if (!listText.contains(laptopMVTPage.getProductPrice().get(i).getText()
								+ laptopMVTPage.getProductName().get(i).getText())) {
							listText.add(laptopMVTPage.getProductPrice().get(i).getText()
									+ laptopMVTPage.getProductName().get(i).getText());
							System.out.println(laptopMVTPage.getProductPrice().get(i).getText() + "  "
									+ laptopMVTPage.getProductName().get(i).getText());

						}
					}
					laptopMVTPage.rightLeftSwipe();
					loop++;
					Thread.sleep(2000);
				}
				// tru 1 san pham hien thi ten nhung k hien thi gia (tuy man hinh thiet bi ma co
				// the tru hoac k)
				assertTrue((listText.size() - 1) >= 20);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}

		}
	}

	@When("^I sendkeys \"(.*)\" into \"(.*)\"$")
	public void sendkeys(String text, String textBox) {
		if (textBox.equals("textbox")) {
			if (queryPage.getTextbox().isDisplayed()) {
				queryPage.getTextbox().sendKeys(text);
			}
		}
	}

	@When("^I click the \"(.*)\" button in the detail product$")
	public void clickChonMuaButton1(String chonMuaBtn) {
		if (chonMuaBtn.equals("Chon mua")) {
			if (productDetailPage.getChonMuaButton().isDisplayed()) {
				productDetailPage.getChonMuaButton().click();
			}
		}
	}

	@Then("^I should see name of \"(.*)\" is \"(.*)\" in the cart page$")
	public void verifyProductName(String productName, String text) {
		if (productName.equals("product name")) {
			if (cartPage.getProductName().isDisplayed()) {
				assertTrue(cartPage.getProductName().getText().trim().equals(text.trim()));
			}
		}
	}

	@Then("^I should see price of \"(.*)\" is \"(.*)\" in the cart page$")
	public void verifyPriceProduct(String productPrice, String text) {
		if (productPrice.equals("product price")) {
			if (cartPage.getProductPrice().isDisplayed()) {
				assertTrue(cartPage.getProductPrice().getText().trim().equals(text.trim()));
			}
		}
	}

	@When("^I scroll down and I should see \"(.*)\"$")
	public void scrollDownToDisplay(String element) {
		int count = 0;
		if (element.equals("Ban chay nhat")) {
			while (count < 5) {
				try {
					if (laptopMVTPage.getBanChayNhat().isDisplayed())
						break;
				} catch (Exception e) {
					// TODO: handle exception
				}
				laptopMVTPage.swipeMobileDown();
				count++;
			}
		}
	}

	
	@When("^I click \"(.*)\" on the keyboard$")
	public void clickKeyboard(String key) {
		if (key.equals("search button")) {
			driver.executeScript("mobile: performEditorAction", ImmutableMap.of("action", "search"));
		}

	}

}
