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
import pages.DetailProduct;
import pages.LaptopMVTPage;
import pages.ListProductPage;

public class StepDefinitions {

	CategoryPage categoryPage = new CategoryPage();
	LaptopMVTPage laptopMVTPage = categoryPage.laptopMVTPage();
	ListProductPage listProductPage = laptopMVTPage.listProductPage();
	DetailProduct detailProduct = listProductPage.detailProduct();

	@Given("^I am on the \"(.*)\"$")
	public void homeScreen(String screen) {
		if (screen.equals("Home Screen")) {
			assertTrue(categoryPage.getMenuIcon().isDisplayed());
		}
	}

	@Then("^I should see \"(.*)\" on top screen$")
	public void findMenuIcon(String element) {
		if (element.equals("Menu Icon")) {
			assertTrue(categoryPage.getMenuIcon().isDisplayed());
		}
	}

	@Then("^I should see \"(.*)\"$")
	public void findMenuItem(String element) {
		if (element.equals("Danh muc san pham")) {
			assertTrue(categoryPage.getDanhMucSanPham().isDisplayed());
		}
		if(element.equals("Product name")) {
			assertTrue(detailProduct.getProductName().isDisplayed());
		}
		if(element.equals("Product price")) {
			assertTrue(detailProduct.getProductPrice().isDisplayed());
		}
	}

	@When("^I click the \"(.*)\"$")
	public void click(String element) {
		if (element.equals("Menu Icon")) {
			categoryPage.getMenuIcon().click();
		}
		if (element.equals("Danh muc san pham")) {
			categoryPage.getDanhMucSanPham().click();
		}
		if(element.equals("Xem tat ca")) {
			laptopMVTPage.getXemtatca().get(1).click();
		}
		if (element.equals("First product")) {
			listProductPage.getFirstProductAndroidElement().click();
		}
	}

	
	@Then("^I should see the title of screen is \"(.*)\"$")
	public void verifyTitle(String title) {
		try {
			if (title.equals("Laptop - May vi tinh - Linh kien")) {
				Thread.sleep(2000);
				assertTrue(laptopMVTPage.getTitle().getText().equals("Laptop - Máy Vi Tính - Linh kiện")) ;
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
	}
	
	
	@When("^I scroll up and I click the \"(.*)\"$")
	public void scrollToClick(String element) {
		while (true) {
			try {
				if (element.equals("Laptop - May vi tinh - Linh kien")) {
					if (categoryPage.getLaptopMVT().isDisplayed()) {
						categoryPage.getLaptopMVT().click();
					}
				}
				break;
			} catch (Exception e) {
				// TODO: handle exception
			}
			categoryPage.swipeMobileUp();
		}

	}
	
	@Then("^I scroll up and I should see \"(.*)\"$")
	public void scrollToDisplay(String element) {
		while (true) {
			try {
				if (element.equals("Moi nhat")) {
					assertTrue(laptopMVTPage.getMoiNhat().isDisplayed()); 
					break;
				}
			} catch (Exception e) {
				// TODO: handle exception
			}
			laptopMVTPage.swipeMobileUp();
		}
	}


}
