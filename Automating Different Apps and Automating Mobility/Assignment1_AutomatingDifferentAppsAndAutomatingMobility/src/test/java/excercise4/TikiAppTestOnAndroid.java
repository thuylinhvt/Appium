package excercise4;

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

	public AndroidDriver<WebElement> driver;
	public List<WebElement> list = null;

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
		WebElement element = driver.findElement(By.id("Open navigation drawer"));
		element.click();
		element = driver.findElement(By.xpath("//*[contains(@text,'Danh mục sản phẩm')]"));
		element.click();
		WebElement laptopMVT = driver.findElement(By.xpath("//android.widget.TextView[contains(@text,'Máy Vi Tính')]"));
		while (true) {
			if (laptopMVT.isDisplayed()) {
				laptopMVT.click();
				break;
			}
			swipeMobileUp();
		}
		Thread.sleep(1000);
		
		WebElement moiNhat =  driver.findElement(By.xpath("//*[contains(@text,'Mới nhất')]"));
		List<WebElement> xemTatCa = (List<WebElement>)driver.findElement(By.xpath("//*[contains(@text,'Xem tất cả')]"));
		while (true) {
			if (moiNhat.isDisplayed()) {
				xemTatCa.get(1).click();
				break;
			}
			swipeMobileUp();
		}

		Thread.sleep(2000);
		
		WebElement firtProduct = driver.findElement(By.xpath("//android.support.v7.widget.RecyclerView/android.view.ViewGroup[3]"));
		firtProduct.click();
		WebElement productName = driver.findElement(By.xpath(
				"//android.view.ViewGroup[3]/android.widget.TextView[@resource-id='vn.tiki.app.tikiandroid:id/tvName']"));
		assertTrue(productName.isDisplayed());
		WebElement productPrice = driver.findElement(By.id("vn.tiki.app.tikiandroid:id/tvPrice"));
		assertTrue(productPrice.isDisplayed());

	}

	public void swipe(int startx, int starty, int endx, int endy) {

		new TouchAction(driver).longPress(PointOption.point(startx, starty))

				.moveTo(PointOption.point(endx, endy))

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
