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

public class QueryPage {
	
	private AndroidDriver driver;
	public QueryPage(AndroidDriver driver) {
		this.driver = driver;
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
	
	public ListProductPage listProductPage() {
		return new ListProductPage(driver);
	}

	@AndroidFindBy(id = "vn.tiki.app.tikiandroid:id/etQuery")
	private AndroidElement textbox;
	
	
	@AndroidFindBy(xpath = "//android.support.v7.widget.RecyclerView/android.view.ViewGroup[1]")
	private AndroidElement firstResult;
	
	public AndroidElement getTextbox() {
		return textbox;
	}

	public void setTextbox(AndroidElement textbox) {
		this.textbox = textbox;
	}

	public AndroidElement getFirstResult() {
		return firstResult;
	}

	public void setFirstResult(AndroidElement firstResult) {
		this.firstResult = firstResult;
	}

	
	
}
