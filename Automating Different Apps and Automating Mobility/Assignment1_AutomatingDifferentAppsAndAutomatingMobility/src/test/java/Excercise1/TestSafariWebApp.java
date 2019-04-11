package Excercise1;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import io.appium.java_client.ios.IOSDriver;

public class TestSafariWebApp {
  
private IOSDriver<WebElement> driver;
	
	@BeforeTest
	public void setup() throws MalformedURLException {
		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setCapability("browserName", "safari");
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
		driver.get("http://google.com");
		WebElement input = driver.findElement(By.name("q"));
		input.sendKeys("appium testing");
		
		WebElement searchBtnElement = driver.findElement(By.xpath("//button[@jsname='Tg7LZd']"));
		searchBtnElement.click();
		
		Thread.sleep(2000);
		
		WebElement firstItem = driver.findElement(By.name("appium testing"));
		firstItem.click();
		
		String firstTitle  = driver.findElement(By.xpath("//XCUIElementTypeLink[@name='Appium: Mobile App Automation Made Awesome.']")).getText();
		Assert.assertEquals(firstTitle, "Appium: Mobile App Automation Made Awesome.");
	}
	
	@AfterTest
	public void teardown() {
		driver.quit();
	}
}
