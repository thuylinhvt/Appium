package com.fpt;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import io.appium.java_client.TouchAction;
import io.appium.java_client.ios.IOSDriver;
import io.appium.java_client.touch.offset.PointOption;

public class TestEurekaApp {

	private IOSDriver<WebElement> driver;

	@BeforeTest
	public void setup() throws MalformedURLException {
		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setCapability("bundleId", "com.xmartlabs.Example");
		capabilities.setCapability("platformName", "iOS");
		capabilities.setCapability("platformVersion", "11.3");
		capabilities.setCapability("deviceName", "iPhone 8");
		capabilities.setCapability("udid", "B14E17E2-B041-41C7-946F-1BAA8CFBC5A4");
		capabilities.setCapability("automationName", "XCUITest");
		driver = new IOSDriver<WebElement>(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	@Test
	public void test() throws InterruptedException {
		// Click nativeIOSEventForm
		WebElement nativeIOSEventForm = driver.findElement(By.name("Native iOS Event Form"));
		nativeIOSEventForm.click();

		// Input Title
		WebElement titleElement = driver.findElement(By.xpath("//XCUIElementTypeCell[1]/XCUIElementTypeTextField"));
		titleElement.sendKeys("Option 1");

		// Input location
		WebElement locationElement = driver.findElement(By.xpath("//XCUIElementTypeCell[2]/XCUIElementTypeTextField"));
		locationElement.sendKeys("Ha Noi");

		// Click all day
		WebElement allDayElement = driver.findElement(By.xpath("//XCUIElementTypeSwitch[@name='All-day']"));
		allDayElement.click();

		// Click starts to open start date
		WebElement start = driver.findElement(By.xpath("//XCUIElementTypeCell[4]"));
		start.click();
		
		//Select start month, day, year
		List<WebElement> pickerElement = driver.findElements(By.className("XCUIElementTypePickerWheel"));
		pickerElement = driver.findElements(By.className("XCUIElementTypePickerWheel"));
		for(int i=0;i<5;i++) {
			pickerwheelStep(driver,pickerElement.get(0),"next",0.15);
		}
		for(int i=0;i<5;i++) {
			pickerwheelStep(driver,pickerElement.get(1),"next",0.15);
		}
		for(int i=0;i<5;i++) {
			pickerwheelStep(driver,pickerElement.get(2),"next",0.15);
		}
		
		// Click starts again to close start date
		start = driver.findElement(By.xpath("//XCUIElementTypeCell[4]"));
		start.click();

		// Click ends to open end date
		WebElement end = driver.findElement(By.xpath("//XCUIElementTypeCell[5]"));
		end.click();
		
		//Select end month, day, year 
		pickerElement = driver.findElements(By.className("XCUIElementTypePickerWheel"));
		pickerwheelStep(driver,pickerElement.get(0),"next",0.15);
		pickerwheelStep(driver,pickerElement.get(1),"next",0.15);
		pickerwheelStep(driver,pickerElement.get(2),"previous",0.15);
		
		// Click ends again to close end date
		end = driver.findElement(By.xpath("//XCUIElementTypeCell[5]"));
		end.click();
		
		swipeMobileUp();
		
		//send key to URL	
		WebElement urlElement = driver.findElement(By.xpath("//XCUIElementTypeCell[9]/XCUIElementTypeTextField"));
		urlElement.sendKeys("facebook.com");
		// send key to notes
		WebElement notesElement = driver.findElement(By.xpath("//XCUIElementTypeCell[10]/XCUIElementTypeTextView"));
		notesElement.sendKeys("Have a travel");
		// click to Done
		WebElement doneElement = driver.findElement(By.name("Done"));
		doneElement.click();

	}

	private void pickerwheelStep(IOSDriver driver, WebElement element, String direction, double offset) {
		Map<String, Object> params = new HashMap<>();
		params.put("order", direction);
		params.put("offset", offset);
		params.put("element", ((RemoteWebElement) element).getId());
		driver.executeScript("mobile: selectPickerWheelValue", params);
	}

	public void swipe(int startx, int starty, int endx, int endy) {
		new TouchAction(driver).longPress(PointOption.point(startx, starty)).moveTo(PointOption.point(endx, endy))
				.release().perform();
	}

	public void swipeMobileUp() {
		Dimension size = driver.manage().window().getSize();
		int starty = (int) (size.height * 0.5);
		int endy = (int) (size.height * 0.1);
		int startx = size.width / 2;
		swipe(startx, starty, startx, endy);
	}

	@AfterTest
	public void teardown() {
		driver.quit();
	}
}
