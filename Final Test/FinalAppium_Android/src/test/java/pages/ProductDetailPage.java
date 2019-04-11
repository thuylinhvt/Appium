/*
*
* (C) Copyright 2019Fresher Academy
* Author apple
* Date Apr 3, 2019
* Version 1.0
*
*/
package pages;

import org.openqa.selenium.support.PageFactory;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;

public class ProductDetailPage {

	private AndroidDriver driver;
	
	public ProductDetailPage(AndroidDriver driver) {
		this.driver = driver;
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
	
	public CartPage cartPage() {
		return new CartPage(driver);

	}
	
	@AndroidFindBy(id = "vn.tiki.app.tikiandroid:id/tvName")
	private AndroidElement productName;
	
	@AndroidFindBy(id = "vn.tiki.app.tikiandroid:id/tvPrice")
	private AndroidElement productPrice;
	
	@AndroidFindBy(xpath = "//android.widget.TextView[@text='CHỌN MUA']")
	private AndroidElement chonMuaButton;

	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Xem Giỏ Hàng']")
	private AndroidElement xemGioHang;
	
	public AndroidElement getProductName() {
		return productName;
	}

	public void setProductName(AndroidElement productName) {
		this.productName = productName;
	}

	public AndroidElement getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(AndroidElement productPrice) {
		this.productPrice = productPrice;
	}

	public AndroidElement getChonMuaButton() {
		return chonMuaButton;
	}

	public void setChonMuaButton(AndroidElement chonMuaButton) {
		this.chonMuaButton = chonMuaButton;
	}

	public AndroidElement getXemGioHang() {
		return xemGioHang;
	}

	public void setXemGioHang(AndroidElement xemGioHang) {
		this.xemGioHang = xemGioHang;
	}
	
	
	
}
