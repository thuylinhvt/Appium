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

public class ListProductPage {

	private AndroidDriver driver;
	
	public ListProductPage(AndroidDriver driver) {
		this.driver = driver;
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
	
	public ProductDetailPage productDetailPage() {
		return new ProductDetailPage(driver);
	}
	
	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Trên Đường Băng (Tái Bản)']")
	private AndroidElement expectedProduct;

	public AndroidElement getExpectedProduct() {
		return expectedProduct;
	}

	public void setExpectedProduct(AndroidElement expectedProduct) {
		this.expectedProduct = expectedProduct;
	}

	
	
}
