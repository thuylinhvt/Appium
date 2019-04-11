package excercise3;

import java.net.MalformedURLException;
import java.net.URL;
import java.sql.Driver;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import io.appium.java_client.ios.IOSDriver;

public class SwiftFormsApplication {
  
	private IOSDriver<WebElement> driver;
	@BeforeTest
	public void setup() throws MalformedURLException {
		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setCapability("bundleId", "com.ortulabs.SwiftFormsApplication");
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
		WebElement email = driver.findElement(By.xpath("//XCUIElementTypeCell[1]/XCUIElementTypeTextField"));
		email.sendKeys("thuylinhvt.ptit@gmail.com");

		WebElement password = driver.findElement(By.xpath("//XCUIElementTypeCell[2]/XCUIElementTypeSecureTextField"));
		password.sendKeys("12345678");
		
		WebElement firstName = driver.findElement(By.xpath("//XCUIElementTypeCell[3]/XCUIElementTypeTextField"));
		firstName.sendKeys("Thuy");
	
		WebElement lastNamElement = driver.findElement(By.xpath("//XCUIElementTypeCell[4]/XCUIElementTypeTextField"));
		lastNamElement.sendKeys("Linh");
		
		WebElement jobElement = driver.findElement(By.xpath("//XCUIElementTypeCell[5]/XCUIElementTypeTextField"));
		jobElement.sendKeys("Automation Tester");
		
		WebElement urlElement = driver.findElement(By.xpath("//XCUIElementTypeCell[6]/XCUIElementTypeTextField"));
		urlElement.sendKeys("facebook.com/thuylinhvt1996");
		
		WebElement phoneElement = driver.findElement(By.xpath("//XCUIElementTypeCell[7]/XCUIElementTypeTextField"));
		phoneElement.sendKeys("0969175462");
		
		Thread.sleep(2000);
		WebElement enableElement = driver.findElement(By.xpath("//XCUIElementTypeSwitch[@name='Enable']"));
		enableElement.click();
		
		Thread.sleep(2000);
		WebElement priorityElement = driver.findElement(By.name("!"));
		priorityElement.click();
		
		Thread.sleep(2000);
		WebElement submitElement = driver.findElement(By.name("Submit"));
		submitElement.click();
		
		Thread.sleep(5000);
		
		Alert alert = driver.switchTo().alert();
		System.out.println(alert.getText());
		alert.accept();
		
	}
	
	@AfterTest
	public void teardown() {
		driver.quit();
	}
}
