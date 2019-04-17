package com.fpt;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.touch.offset.PointOption;

public class TikiAppTestOnAndroid {

	public static AndroidDriver<WebElement> driver;

	@BeforeMethod
	public void beforeClass() throws MalformedURLException {
		DesiredCapabilities cap = new DesiredCapabilities();
		cap.setCapability("platformVersion", "7.1.1");
		cap.setCapability("deviceName", "Nexus 5X");
		cap.setCapability("udid", "emulator-5554");
		cap.setCapability("platformName", "Android");
		cap.setCapability("appPackage", "vn.tiki.app.tikiandroid");
		cap.setCapability("appActivity", "vn.tiki.app.tikiandroid.ui.SplashActivity");
		driver = new AndroidDriver<WebElement>(new URL("http://127.0.0.1:4723/wd/hub"), cap);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@Test
	public void testForTiki() throws InterruptedException {
		
		WebElement menu = driver.findElement(By.id("Open navigation drawer"));
		menu.click();
		WebElement danhMucSanPham = driver.findElement(By.xpath("//*[contains(@text,'Danh mục sản phẩm')]"));
		danhMucSanPham.click();
		String xpathLap = "//android.widget.TextView[contains(@text,'Máy Vi Tính')]";
		int check = 0;
		while (check < 5) {
			if (getItem(xpathLap) != null) {
				getItem(xpathLap).click();
				break;
			}
			swipeMobileUp();
			check++;
		}
				
		Thread.sleep(1000);
		String xpathNewest = "//*[contains(@text,'Mới nhất')]";
		String xpathWatchAll = "//*[contains(@text,'Xem tất cả')]";
		check = 0;
		while (check < 5) {
			if (getItem(xpathNewest) != null) {
				getItems(xpathWatchAll).get(1).click();
				break;
			}
			swipeMobileUp();
			check++;
		}

		Thread.sleep(2000);
		List<WebElement> images = driver.findElements(By.id("vn.tiki.app.tikiandroid:id/ivImage"));
		images.get(0).click();
		
		WebElement  productName = driver.findElement(By.id("vn.tiki.app.tikiandroid:id/tvName"));
		assertTrue(productName.isDisplayed());
	
		WebElement productPrice = driver.findElement(By.id("vn.tiki.app.tikiandroid:id/tvPrice"));
		assertTrue(productPrice.isDisplayed());
	}

	public WebElement getItem(String xpath) {
		try {
			return driver.findElement(By.xpath(xpath));
		} catch (Exception e) {
			return null;
		}
	}

	public List<WebElement> getItems(String xpath) {
		try {
			return driver.findElements(By.xpath(xpath));
		} catch (Exception e) {
			return null;
		}
	}

	public void swipe(int startx, int starty, int endx, int endy) {
		new TouchAction(driver).longPress(PointOption.point(startx, starty)).moveTo(PointOption.point(endx, endy))
				.release().perform();

	}

	public void swipeMobileUp() {
		Dimension size = driver.manage().window().getSize();
		int starty = (int) (size.height * 0.8);
		int endy = (int) (size.height * 0.2);
		int startx = size.width / 2;

		swipe(startx, starty, startx, endy);
	}

	@AfterMethod
	public void close() {
		driver.closeApp();
	}

}
