package com.fpt.excercise1;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.touch.offset.PointOption;

public class TestTiKiApp {

	public static AndroidDriver<WebElement> driver;
	public static List<WebElement> list = null;
	
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
	public void test() throws InterruptedException, IOException {
		WebElement element = driver.findElement(By.id("Open navigation drawer"));
		element.click();

		element = driver.findElement(By.xpath("//*[contains(@text,'Tiki Deal')]"));
		element.click();

		list = driver.findElements(By.id("vn.tiki.app.tikiandroid:id/ivImage"));
		list.get(0).click();

		element = driver.findElement(By.id("vn.tiki.app.tikiandroid:id/imageView"));
		element.click();
		
		
		int check = 0;
		while (check < 5) {
			swipeMobile();
			check++;
		}
		File screenShot=driver.getScreenshotAs(OutputType.FILE); 
		File location=new File("screenshots"); 
		String screenShotName=location.getAbsolutePath()+File.separator+"image.png"; 
		FileUtils.copyFile(screenShot,new File(screenShotName)); 
	
	}

	public WebElement getItem(String xpath) {
		try {
			return driver.findElement(By.xpath(xpath));
		} catch (Exception e) {
			return null;
		}
	}


	public void swipe(int startx, int starty, int endx, int endy) {
		new TouchAction(driver).longPress(PointOption.point(startx, starty)).moveTo(PointOption.point(endx, endy))
				.release().perform();

	}

	public void swipeMobile() {
		Dimension size = driver.manage().window().getSize();
		int startx = (int) (size.width*0.9);
		int endx = (int) (size.width * 0.1);
		int starty = size.height / 2;

		swipe(startx, starty, endx, starty);
	}

	@AfterMethod
	public void close() {
		driver.closeApp();
	}
}