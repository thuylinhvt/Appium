/*
*
* (C) Copyright 2019Fresher Academy
* Author apple
* Date Apr 7, 2019
* Version 1.0
*
*/
package pages;

import org.openqa.selenium.support.PageFactory;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;

public class HomePage {

	private AndroidDriver<AndroidElement> driver;
	
	public HomePage(AndroidDriver<AndroidElement> driver) {
		this.driver = driver;
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
	
	public CategoryPage categoryPage() {
		return new CategoryPage(driver);
	}
	
	@AndroidFindBy(xpath = "//android.widget.ImageButton[@content-desc=\"Open navigation drawer\"]")
	private AndroidElement menuIcon;

	@AndroidFindBy(xpath = "//android.widget.CheckedTextView[@text=\"Danh mục sản phẩm\"]")
	private AndroidElement danhMucSanPham;

	public AndroidElement getMenuIcon() {
		return menuIcon;
	}

	public void setMenuIcon(AndroidElement menuIcon) {
		this.menuIcon = menuIcon;
	}

	public AndroidElement getDanhMucSanPham() {
		return danhMucSanPham;
	}

	public void setDanhMucSanPham(AndroidElement danhMucSanPham) {
		this.danhMucSanPham = danhMucSanPham;
	}
	
	
}
