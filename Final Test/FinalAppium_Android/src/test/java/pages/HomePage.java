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
import utils.AppiumBase;

public class HomePage{

	private AndroidDriver driver;
	
	public HomePage(AndroidDriver driver) {
		this.driver = driver;
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
	
	public CatagoryPage catagoryPage() {
		return new CatagoryPage(driver);
	}
	
	public QueryPage queryPage() {
		return new QueryPage(driver);
	}
	
	@AndroidFindBy(accessibility = "Open navigation drawer")
	private AndroidElement menuIcon;
	
	@AndroidFindBy(id = "vn.tiki.app.tikiandroid:id/tvQuery")
	private AndroidElement searchTextBox;
	
	@AndroidFindBy(id = "vn.tiki.app.tikiandroid:id/ivCart")
	private AndroidElement cartIcon;
	
	@AndroidFindBy(id = "vn.tiki.app.tikiandroid:id/bvBanners")
	private AndroidElement slider;
	
	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Danh mục sản phẩm']")
	private AndroidElement danhMucSanPham;
	
	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Dịch vụ tiện ích']")
	private AndroidElement dichVuTienIch;
	
	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Tìm kiếm nhiều nhất']")
	private AndroidElement timKiemNhieuNhat;

	
	//Element on Left Menu
	
	@AndroidFindBy(id = "vn.tiki.app.tikiandroid:id/design_menu_item_text")
	private List<AndroidElement> trangChu;
	
	@AndroidFindBy(id = "vn.tiki.app.tikiandroid:id/design_menu_item_text")
	private List<AndroidElement> danhMucSanPham2;
	
	@AndroidFindBy(id = "vn.tiki.app.tikiandroid:id/design_menu_item_text")
	private List<AndroidElement> quanLyDonHang;
	
	@AndroidFindBy(id = "vn.tiki.app.tikiandroid:id/design_menu_item_text")
	private List<AndroidElement> sanPhamYeuThich;
	
	@AndroidFindBy(id = "vn.tiki.app.tikiandroid:id/design_menu_item_text")
	private List<AndroidElement> quanLyTaiKhoan;
	
	@AndroidFindBy(id = "vn.tiki.app.tikiandroid:id/design_menu_item_text")
	private List<AndroidElement> thongBaoCuaToi;
	
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
	
	public AndroidElement getMenuIcon() {
		return menuIcon;
	}

	public void setMenuIcon(AndroidElement menuIcon) {
		this.menuIcon = menuIcon;
	}

	public AndroidElement getSearchTextBox() {
		return searchTextBox;
	}

	public void setSearchTextBox(AndroidElement searchTextBox) {
		this.searchTextBox = searchTextBox;
	}

	public AndroidElement getCartIcon() {
		return cartIcon;
	}

	public void setCartIcon(AndroidElement cartIcon) {
		this.cartIcon = cartIcon;
	}

	public AndroidElement getSlider() {
		return slider;
	}

	public void setSlider(AndroidElement slider) {
		this.slider = slider;
	}

	public AndroidElement getDanhMucSanPham() {
		return danhMucSanPham;
	}

	public void setDanhMucSanPham(AndroidElement danhMucSanPham) {
		this.danhMucSanPham = danhMucSanPham;
	}

	public AndroidElement getDichVuTienIch() {
		return dichVuTienIch;
	}

	public void setDichVuTienIch(AndroidElement dichVuTienIch) {
		this.dichVuTienIch = dichVuTienIch;
	}

	public AndroidElement getTimKiemNhieuNhat() {
		return timKiemNhieuNhat;
	}

	public void setTimKiemNhieuNhat(AndroidElement timKiemNhieuNhat) {
		this.timKiemNhieuNhat = timKiemNhieuNhat;
	}

	public List<AndroidElement> getTrangChu() {
		return trangChu;
	}

	public void setTrangChu(List<AndroidElement> trangChu) {
		this.trangChu = trangChu;
	}

	public List<AndroidElement> getDanhMucSanPham2() {
		return danhMucSanPham2;
	}

	public void setDanhMucSanPham2(List<AndroidElement> danhMucSanPham2) {
		this.danhMucSanPham2 = danhMucSanPham2;
	}

	public List<AndroidElement> getQuanLyDonHang() {
		return quanLyDonHang;
	}

	public void setQuanLyDonHang(List<AndroidElement> quanLyDonHang) {
		this.quanLyDonHang = quanLyDonHang;
	}

	public List<AndroidElement> getSanPhamYeuThich() {
		return sanPhamYeuThich;
	}

	public void setSanPhamYeuThich(List<AndroidElement> sanPhamYeuThich) {
		this.sanPhamYeuThich = sanPhamYeuThich;
	}

	public List<AndroidElement> getQuanLyTaiKhoan() {
		return quanLyTaiKhoan;
	}

	public void setQuanLyTaiKhoan(List<AndroidElement> quanLyTaiKhoan) {
		this.quanLyTaiKhoan = quanLyTaiKhoan;
	}

	public List<AndroidElement> getThongBaoCuaToi() {
		return thongBaoCuaToi;
	}

	public void setThongBaoCuaToi(List<AndroidElement> thongBaoCuaToi) {
		this.thongBaoCuaToi = thongBaoCuaToi;
	}

	
	
}
