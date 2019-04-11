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

import io.appium.java_client.android.AndroidDriver;

public class TestChromeApp {
 
	private AndroidDriver<WebElement> driver;
	
	@BeforeTest
	public void setup() throws MalformedURLException {
		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setCapability("browserName", "Chrome");
		capabilities.setCapability("platformName", "Android");
		capabilities.setCapability("platformVersion", "7.0");
		capabilities.setCapability("deviceName", "Samsung Galasy S8+");
		capabilities.setCapability("udid","ce021712ac8be4a70c");
		
		driver = new AndroidDriver<WebElement>(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}
	
	@Test
	public void test() {
		driver.get("http://google.com");
		WebElement input = driver.findElement(By.id("//android.webkit.WebView/android.view.View[3]/android.view.View[3]/android.view.View[2]/android.view.View[1]/android.view.View[2]/android.widget.EditText"));
		input.clear();
		input.sendKeys("appium testing");
		WebElement firstResult = driver.findElement(By.xpath("//android.view.View[contains(@text, 'Kết quả tìm kiếm trên web The Settings API - Appium appium.io › docs › advanced-concepts')]"));
		firstResult.click();
		
		System.out.println(driver.getTitle());
		Assert.assertEquals(driver.getTitle(), "Appium: Mobile App Automation Made Awesome.");
	}
	
	@AfterTest
	public void teardown() {
		driver.quit();
	}
}
