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

public class CatagoryPage {

	private AndroidDriver driver;

	public CatagoryPage(AndroidDriver driver) {
		this.driver = driver;
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}

	public LaptopMVTPage laptopMVTPage() {
		return new LaptopMVTPage(driver);
	}

	@AndroidFindBy(id = "vn.tiki.app.tikiandroid:id/itemView")
	private List<AndroidElement> nhaSachTiKi;

	@AndroidFindBy(id = "vn.tiki.app.tikiandroid:id/itemView")
	private List<AndroidElement> thoiTrang;

	@AndroidFindBy(id = "vn.tiki.app.tikiandroid:id/itemView")
	private List<AndroidElement> doChoiMeVaBe;

	@AndroidFindBy(xpath = "//android.widget.TextView[@text = 'Laptop - Máy Vi Tính - Linh kiện']")
	private AndroidElement laptopMVT;

	@AndroidFindBy(xpath = "//android.widget.TextView[@text ='Thiết Bị Số - Phụ Kiện Số']")
	private AndroidElement thietBiSoPhuKienSo;

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

	public List<AndroidElement> getNhaSachTiKi() {
		return nhaSachTiKi;
	}

	public void setNhaSachTiKi(List<AndroidElement> nhaSachTiKi) {
		this.nhaSachTiKi = nhaSachTiKi;
	}

	public List<AndroidElement> getThoiTrang() {
		return thoiTrang;
	}

	public void setThoiTrang(List<AndroidElement> thoiTrang) {
		this.thoiTrang = thoiTrang;
	}

	public List<AndroidElement> getDoChoiMeVaBe() {
		return doChoiMeVaBe;
	}

	public void setDoChoiMeVaBe(List<AndroidElement> doChoiMeVaBe) {
		this.doChoiMeVaBe = doChoiMeVaBe;
	}

	public AndroidElement getLaptopMVT() {
		return laptopMVT;
	}

	public void setLaptopMVT(AndroidElement laptopMVT) {
		this.laptopMVT = laptopMVT;
	}

	public AndroidElement getThietBiSoPhuKienSo() {
		return thietBiSoPhuKienSo;
	}

	public void setThietBiSoPhuKienSo(AndroidElement thietBiSoPhuKienSo) {
		this.thietBiSoPhuKienSo = thietBiSoPhuKienSo;
	}

}
