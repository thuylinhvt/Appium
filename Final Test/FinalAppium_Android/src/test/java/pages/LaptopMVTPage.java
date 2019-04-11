/*
*
* (C) Copyright 2019Fresher Academy
* Author apple
* Date Apr 2, 2019
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

public class LaptopMVTPage {

	private AndroidDriver driver;

	public LaptopMVTPage(AndroidDriver driver) {
		this.driver = driver;
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}

	@AndroidFindBy(id = "vn.tiki.app.tikiandroid:id/tvCategoryName")
	private AndroidElement title;

	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Bán chạy nhất']")
	private AndroidElement banChayNhat;

	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Giảm giá nhiều nhất']")
	private AndroidElement giamGiaNhieuNhat;

	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Mới nhất']")
	private AndroidElement moiNhat;

	@AndroidFindBy(xpath = "//android.widget.LinearLayout[@resource-id='vn.tiki.app.tikiandroid:id/bestSellerProductListBlockView']//android.widget.TextView[@resource-id='vn.tiki.app.tikiandroid:id/tvName']")
	private List<AndroidElement> productName;
	
	@AndroidFindBy(id = "vn.tiki.app.tikiandroid:id/tvPrice")
	private List<AndroidElement> productPrice;

	public void swipe(int startx, int starty, int endx, int endy) {

		new TouchAction(driver).longPress(PointOption.point(startx, starty))

				.moveTo(PointOption.point(endx, endy))

				.release().perform();

	}

	public void rightLeftSwipe() {

		Dimension size = driver.manage().window().getSize();

		int startx = (int) (size.width * 0.95);

		int endx = (int) (size.width * 0.05);

		int starty = (int) (size.height * 0.65);

		swipe(startx, starty, endx, starty);

	}

	public void swipeMobileDown() {

		Dimension size = driver.manage().window().getSize();

		int starty = (int) (size.height * 0.9);

		int endy = (int) (size.height * 0.1);

		int startx = size.width / 2;

		swipe(startx, endy, startx, starty);

	}

	public AndroidElement getTitle() {
		return title;
	}

	public void setTitle(AndroidElement title) {
		this.title = title;
	}

	public AndroidElement getBanChayNhat() {
		return banChayNhat;
	}

	public void setBanChayNhat(AndroidElement banChayNhat) {
		this.banChayNhat = banChayNhat;
	}

	public AndroidElement getGiamGiaNhieuNhat() {
		return giamGiaNhieuNhat;
	}

	public void setGiamGiaNhieuNhat(AndroidElement giamGiaNhieuNhat) {
		this.giamGiaNhieuNhat = giamGiaNhieuNhat;
	}

	public AndroidElement getMoiNhat() {
		return moiNhat;
	}

	public void setMoiNhat(AndroidElement moiNhat) {
		this.moiNhat = moiNhat;
	}

	public List<AndroidElement> getProductName() {
		return productName;
	}

	public void setProductName(List<AndroidElement> productName) {
		this.productName = productName;
	}

	public List<AndroidElement> getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(List<AndroidElement> productPrice) {
		this.productPrice = productPrice;
	}

	

}
