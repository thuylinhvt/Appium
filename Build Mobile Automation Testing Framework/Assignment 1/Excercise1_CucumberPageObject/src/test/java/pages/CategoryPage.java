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

import org.openqa.selenium.Dimension;
import org.openqa.selenium.support.PageFactory;

import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import io.appium.java_client.touch.offset.PointOption;
import utils.AppiumBase;

public class CategoryPage extends AppiumBase {

	public CategoryPage() {
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}

	@AndroidFindBy(xpath = "//android.widget.ImageButton[@content-desc=\"Open navigation drawer\"]")
	private AndroidElement menuIcon;

	@AndroidFindBy(xpath = "//android.widget.CheckedTextView[@text=\"Danh mục sản phẩm\"]")
	private AndroidElement danhMucSanPham;

	@AndroidFindBy(xpath = "//android.widget.TextView[@text=\"Laptop - Máy Vi Tính - Linh kiện\"]")
	private AndroidElement laptopMVT;

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

	
	public AndroidElement getLaptopMVT() {
		return laptopMVT;
	}

	public void setLaptopMVT(AndroidElement laptopMVT) {
		this.laptopMVT = laptopMVT;
	}

	public LaptopMVTPage laptopMVTPage() {
		return new LaptopMVTPage(driver);
	}

}
