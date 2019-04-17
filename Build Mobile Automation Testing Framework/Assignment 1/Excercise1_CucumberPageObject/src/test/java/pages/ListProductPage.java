/*
*
* (C) Copyright 2019Fresher Academy
* Author apple
* Date Apr 1, 2019
* Version 1.0
*
*/
package pages;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.support.PageFactory;

public class ListProductPage{

	private AndroidDriver driver;
	public ListProductPage(AndroidDriver driver) {
		this.driver = driver;
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}

	public DetailProduct detailProduct() {
		return new DetailProduct(driver);
	}
	
	@AndroidFindBy(xpath = "//android.support.v4.widget.DrawerLayout/android.support.v4.widget.DrawerLayout/android.view.ViewGroup/android.widget.FrameLayout//android.view.ViewGroup[3]")
	private AndroidElement firstProductAndroidElement;

	public boolean clickFirstProduct() {
		try {
			firstProductAndroidElement.click();
			return true;
		} catch (Exception e) {
			return false;
		}
	}
	
	public AndroidElement getFirstProductAndroidElement() {
		return firstProductAndroidElement;
	}

	public void setFirstProductAndroidElement(AndroidElement firstProductAndroidElement) {
		this.firstProductAndroidElement = firstProductAndroidElement;
	}
	
	
}
