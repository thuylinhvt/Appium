package Example;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import io.appium.java_client.android.AndroidDriver;

public class MobileHybricAppOnAndroid {

	private AndroidDriver<WebElement> driver;

	@BeforeTest
	public void setup() throws MalformedURLException {
		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setCapability(CapabilityType.BROWSER_NAME, "");
		capabilities.setCapability("deviceName", "Nexus 5X");
		capabilities.setCapability("platformVersion", "7.1.1");
		capabilities.setCapability("platformName", "Android");
		capabilities.setCapability("appPackage", "com.example.hybridtestapp");
		capabilities.setCapability("appActivity", "com.example.hybridtestapp.MainActivity");
		driver = new AndroidDriver<WebElement>(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	@Test
	public void Test() {
		Set<String> contexts = driver.getContextHandles();
		driver.context((String) contexts.toArray()[1]);
		WebElement firstName = driver.findElement(By.id("fname"));
		firstName.sendKeys("test");
		WebElement lastName = driver.findElement(By.id("lname"));
		lastName.sendKeys("test");
		WebElement age = driver.findElement(By.id("age"));
		age.sendKeys("26");
		WebElement username = driver.findElement(By.id("username"));
		username.sendKeys("appiumTester");
		WebElement password = driver.findElement(By.id("psw"));
		password.sendKeys("appium@123");
		WebElement registerButton = driver.findElement(By.id("register"));
		registerButton.click();

	}

	@AfterTest
	public void teardown() {
		driver.quit();
	}
}
