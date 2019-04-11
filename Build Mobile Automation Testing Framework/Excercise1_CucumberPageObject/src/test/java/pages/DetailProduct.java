/*
*
* (C) Copyright 2019Fresher Academy
* Author apple
* Date Apr 1, 2019
* Version 1.0
*
*/
package pages;

import java.util.List;

import org.openqa.selenium.support.PageFactory;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
//import static utils.AppiumBase.driver;
public class DetailProduct {
	private AndroidDriver driver;
	public DetailProduct(AndroidDriver driver) {
		this.driver = driver;
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
	
	@AndroidFindBy(id = "vn.tiki.app.tikiandroid:id/tvName")
	private AndroidElement productName;
	
	@AndroidFindBy(id = "vn.tiki.app.tikiandroid:id/tvPrice")
	private AndroidElement productPrice;
	
	

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

	
	
	
}
