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

public class ListProductPage {

private AndroidDriver<AndroidElement> driver;
	
	public ListProductPage(AndroidDriver<AndroidElement> driver) {
		this.driver = driver;
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
	
	public ProductDetailPage productDetailPage() {
		return new ProductDetailPage(driver);
	}
	
	@AndroidFindBy(id = "vn.tiki.app.tikiandroid:id/ivFilter")
	private AndroidElement filter;
	
	@AndroidFindBy(id = "vn.tiki.app.tikiandroid:id/tvQuery")
	private AndroidElement query;
	
	@AndroidFindBy(id = "vn.tiki.app.tikiandroid:id/ivCancel")
	private AndroidElement cancel;
	
	@AndroidFindBy(xpath = "//android.view.ViewGroup[14]")
	private AndroidElement danhMucSanPham;
	
	@AndroidFindBy(xpath = "//android.widget.FrameLayout[4]")
	private AndroidElement phuKienThoiTrang;
	
	@AndroidFindBy(xpath = "//android.widget.FrameLayout[5]")
	private AndroidElement trangSuc;
	
	@AndroidFindBy(xpath = "//android.widget.FrameLayout[9]")
	private AndroidElement trangSucBac;
	
	@AndroidFindBy(id = "vn.tiki.app.tikiandroid:id/tvName")
	private List<AndroidElement> firstProduct;
	
	
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
	
	public void swipeMobileDown() {

		Dimension size = driver.manage().window().getSize();

		int starty = (int) (size.height * 0.9);

		int endy = (int) (size.height * 0.1);

		int startx = size.width / 2;

		swipe(startx, endy, startx, starty);

}

	
	
	public AndroidElement getFilter() {
		return filter;
	}

	public void setFilter(AndroidElement filter) {
		this.filter = filter;
	}

	public AndroidElement getDanhMucSanPham() {
		return danhMucSanPham;
	}

	public void setDanhMucSanPham(AndroidElement danhMucSanPham) {
		this.danhMucSanPham = danhMucSanPham;
	}

	public AndroidElement getPhuKienThoiTrang() {
		return phuKienThoiTrang;
	}

	public void setPhuKienThoiTrang(AndroidElement phuKienThoiTrang) {
		this.phuKienThoiTrang = phuKienThoiTrang;
	}

	public AndroidElement getTrangSuc() {
		return trangSuc;
	}

	public void setTrangSuc(AndroidElement trangSuc) {
		this.trangSuc = trangSuc;
	}

	public AndroidElement getTrangSucBac() {
		return trangSucBac;
	}

	public void setTrangSucBac(AndroidElement trangSucBac) {
		this.trangSucBac = trangSucBac;
	}

	

	public List<AndroidElement> getFirstProduct() {
		return firstProduct;
	}

	public void setFirstProduct(List<AndroidElement> firstProduct) {
		this.firstProduct = firstProduct;
	}

	public AndroidElement getQuery() {
		return query;
	}

	public void setQuery(AndroidElement query) {
		this.query = query;
	}

	public AndroidElement getCancel() {
		return cancel;
	}

	public void setCancel(AndroidElement cancel) {
		this.cancel = cancel;
	}
	
	
	
}
