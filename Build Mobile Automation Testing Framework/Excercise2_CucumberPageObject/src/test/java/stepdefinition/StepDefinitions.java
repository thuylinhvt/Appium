/*
*
* (C) Copyright 2019Fresher Academy
* Author apple
* Date Apr 1, 2019
* Version 1.0
*
*/
package stepdefinition;

import static org.testng.Assert.assertTrue;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.CategoryPage;
import pages.HomePage;
import static utils.AppiumBase.driver;

import org.omg.CORBA.PUBLIC_MEMBER;

import pages.ListProductPage;
import pages.ProductDetailPage;
import pages.ThoiTrangPage;

public class StepDefinitions {

	HomePage homePage = new HomePage(driver);
	CategoryPage categoryPage = homePage.categoryPage();
	ThoiTrangPage thoiTrangPage = categoryPage.thoiTrangPage();
	ListProductPage listProductPage = thoiTrangPage.listProductPage();
	ProductDetailPage productDetailPage = listProductPage.productDetailPage();

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
	public void findMenuItem(String element) {
		if (element.equals("Product name")) {
			assertTrue(productDetailPage.getProductName().isDisplayed());
		}
		if (element.equals("Product price")) {
			assertTrue(productDetailPage.getProductPrice().isDisplayed());
		}
	}

	@When("^I click the \"(.*)\"$")
	public void click(String element) {
		if (element.equals("Menu Icon")) {
			homePage.getMenuIcon().click();
		}
		if (element.equals("Danh muc san pham")) {
			homePage.getDanhMucSanPham().click();
		}
		if (element.equals("Thoi trang")) {
			categoryPage.getThoiTrang().click();
		}
		if (element.equals("Xem tat ca")) {
			thoiTrangPage.getXemtatca().get(1).click();
		}
		if (element.equals("Filter")) {
			listProductPage.getFilter().click();
		}
		if (element.equals("Danh muc san pham 2")) {
			listProductPage.getDanhMucSanPham().click();
		}
		if (element.equals("Trang suc")) {
			listProductPage.getTrangSuc().click();
		}
		if (element.equals("Trang suc bac")) {
			listProductPage.getTrangSucBac().click();
		}
		if (element.equals("close menu query")) {
			listProductPage.getCancel().click();
		}
		if (element.equals("First product")) {
			listProductPage.getFirstProduct().get(0).click();
		}

	}

	@When("^I scroll up and I click the \"(.*)\"$")
	public void scrollUpToClick(String element) {
		while (true) {
			try {
				if (element.equals("Phu kien thoi trang")) {
					if (listProductPage.getPhuKienThoiTrang().isDisplayed()) {
						listProductPage.getPhuKienThoiTrang().click();
					}
				}
				break;
			} catch (Exception e) {
				// TODO: handle exception
			}
			listProductPage.swipeMobileUp();
		}
	}

	@Then("^I scroll up and I should see \"(.*)\"$")
	public void scrollUpToDisplay(String element) {
		while (true) {
			try {
				if (element.equals("Moi nhat")) {
					assertTrue(thoiTrangPage.getMoiNhat().isDisplayed());
					break;
				}
			} catch (Exception e) {
				// TODO: handle exception
			}
			thoiTrangPage.swipeMobileUp();
		}
	}
	
	@When("^I scroll down and I should see \"(.*)\"$")
	public void scrollDownToDisplay(String element) {
		while (true) {
			listProductPage.swipeMobileDown();
			try {
				if (element.equals("menu query")) {
					assertTrue(listProductPage.getQuery().isDisplayed());
					break;
				}
			} catch (Exception e) {
				// TODO: handle exception
			}
			
		}
	}
}
