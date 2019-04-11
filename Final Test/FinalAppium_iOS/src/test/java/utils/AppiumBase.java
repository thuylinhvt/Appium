package utils;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.WebDriverWait;
import io.appium.java_client.ios.IOSDriver;
import io.appium.java_client.ios.IOSElement;

public class AppiumBase {
	public static IOSDriver<IOSElement> driver;
	public static WebDriverWait waitVar;

	public void createDriver() {
		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setCapability("deviceName", "iPhone 8");
		capabilities.setCapability("platformVersion", "11.3");
		capabilities.setCapability("platformName", "iOS");
		capabilities.setCapability("udid", "B14E17E2-B041-41C7-946F-1BAA8CFBC5A4");
		capabilities.setCapability("bundleId", "com.richardneitzke.MonoBank");
		capabilities.setCapability("automationName", "XCUITest");
		try {
			driver = new IOSDriver<IOSElement>(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		waitVar = new WebDriverWait(driver, 20);
	}

	public void teardown() {
		driver.quit();
	}
}
