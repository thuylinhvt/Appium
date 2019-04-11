package com.fpt.excercise2;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.Select;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import io.appium.java_client.ios.IOSDriver;

public class TestEurekaApp {
  

	private IOSDriver<WebElement> driver;
	@BeforeTest
	public void setup() throws MalformedURLException {
		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setCapability("bundleId", "com.xmartlabs.Example");
		capabilities.setCapability("platformName", "iOS");
		capabilities.setCapability("platformVersion", "11.3");
		capabilities.setCapability("deviceName", "iPhone 8");
		capabilities.setCapability("udid","B14E17E2-B041-41C7-946F-1BAA8CFBC5A4");
		capabilities.setCapability("automationName", "XCUITest");
		driver = new IOSDriver<WebElement>(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}
	
	@Test
	public void test() throws InterruptedException {
		WebElement nativeIOSEventForm = driver.findElement(By.name("Native iOS Event Form"));
		nativeIOSEventForm.click();
		
		WebElement titleElement = driver.findElement(By.xpath("//XCUIElementTypeCell[1]/XCUIElementTypeTextField"));
		titleElement.sendKeys("Option 1");
		
		WebElement locationElement = driver.findElement(By.xpath("//XCUIElementTypeCell[2]/XCUIElementTypeTextField"));
		locationElement.sendKeys("Ha Noi");
		
		WebElement allDayElement = driver.findElement(By.xpath("//XCUIElementTypeSwitch[@name='All-day']"));
		allDayElement.click();
		
		WebElement selectStartElement = driver.findElement(By.xpath("//XCUIElementTypeCell[4]"));
		selectStartElement.click();
		
		WebElement monthStartElement = driver.findElement(By.xpath("//XCUIElementTypeCell[5]//XCUIElementTypePickerWheel[1]"));
		Select select1 = new Select(monthStartElement);
	    select1.selectByValue("2019");
		
		WebElement dayStart = driver.findElement(By.xpath("//XCUIElementTypeCell[5]//XCUIElementTypePickerWheel[2]"));
		Select select2 = new Select(dayStart);
		select2.selectByValue("20");
			
		WebElement yearStart = driver.findElement(By.xpath("//XCUIElementTypeCell[5]//XCUIElementTypePickerWheel[3]"));
		Select select3 = new Select(yearStart);
		select3.selectByValue("2019");
		

		WebElement selectEndElement = driver.findElement(By.xpath("//XCUIElementTypeCell[6]"));
		selectEndElement.click();
		
		WebElement monthEnd = driver.findElement(By.xpath("//XCUIElementTypeCell[6]//XCUIElementTypePickerWheel[1]"));
		Select select4 = new Select(monthEnd);
		select4.selectByValue("June");
		
		WebElement dayEnd = driver.findElement(By.xpath("//XCUIElementTypeCell[6]//XCUIElementTypePickerWheel[2]"));
		Select select5 = new Select(dayEnd);
		select5.selectByValue("10");
			
		WebElement yearEnd = driver.findElement(By.xpath("//XCUIElementTypeCell[6]//XCUIElementTypePickerWheel[3]"));
		Select select6 = new Select(yearEnd);
		select6.selectByValue("2019");
		
		WebElement urlElement = driver.findElement(By.xpath("//XCUIElementTypeCell[9]/XCUIElementTypeTextField"));
		urlElement.sendKeys("facebook.com");
		
		WebElement notesElement = driver.findElement(By.xpath("//XCUIElementTypeCell[10]/XCUIElementTypeTextView"));
		notesElement.sendKeys("Have a travel");
		
		WebElement doneElement = driver.findElement(By.name("Done"));
		doneElement.click();
		
	}
	
	@AfterTest
	public void teardown() { 
		driver.quit();
	}
}
