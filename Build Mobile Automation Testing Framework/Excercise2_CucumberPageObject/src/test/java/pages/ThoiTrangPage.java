/*
*
* (C) Copyright 2019Fresher Academy
* Author apple
* Date Apr 7, 2019
* Version 1.0
*
*/
package pages;

import java.util.List;

import org.openqa.selenium.Dimension;
import org.openqa.selenium.support.PageFactory;

import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import io.appium.java_client.touch.offset.PointOption;

public class ThoiTrangPage {
private AndroidDriver<AndroidElement> driver;
	
	public ThoiTrangPage(AndroidDriver<AndroidElement> driver) {
		this.driver = driver;
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
	
	public ListProductPage listProductPage() {
		return new ListProductPage(driver);
	}
	
	@AndroidFindBy(id = "vn.tiki.app.tikiandroid:id/tvAction")
	private List<AndroidElement> xemtatca;
	
	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Mới nhất']")
	private AndroidElement moiNhat;

	
	public void swipe(int startx, int starty, int endx, int endy) {

		new TouchAction(driver).longPress(PointOption.point(startx, starty))

				.moveTo(PointOption.point(endx, endy))

				.release().perform();

	}

	public void swipeMobileUp() {

		Dimension size = driver.manage().window().getSize();

		int starty = (int) (size.height * 0.8);

		int endy = (int) (size.height * 0.2);

		int startx = size.width / 2;

		swipe(startx, starty, startx, endy);

	}
	
	public List<AndroidElement> getXemtatca() {
		return xemtatca;
	}

	public void setXemtatca(List<AndroidElement> xemtatca) {
		this.xemtatca = xemtatca;
	}

	public AndroidElement getMoiNhat() {
		return moiNhat;
	}

	public void setMoiNhat(AndroidElement moiNhat) {
		this.moiNhat = moiNhat;
	}
	
	
}
