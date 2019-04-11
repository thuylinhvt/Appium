package Excercise1;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import io.appium.java_client.ios.IOSDriver;

public class TestLoginApp {
  
	private IOSDriver<WebElement> driver;
	@BeforeTest
	public void setup() throws MalformedURLException {
		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setCapability("bundleId", "me.lucasfarah.LFLoginControllerExample");
		capabilities.setCapability("platformName", "iOS");
		capabilities.setCapability("platformVersion", "12.1");
		capabilities.setCapability("deviceName", "iPhone 6");
		capabilities.setCapability("udid","56A27FEF-59B6-4FEB-B3BB-7C2975310BD2");
		capabilities.setCapability("automationName", "XCUITest");
		driver = new IOSDriver<WebElement>(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}
	
	@Test
	public void test() throws InterruptedException {
		WebElement loginBtn = driver.findElement(By.name("Login"));
		loginBtn.click();
	
		
		
	}
	
	@AfterTest
	public void teardown() {
		driver.quit();
	}
}
