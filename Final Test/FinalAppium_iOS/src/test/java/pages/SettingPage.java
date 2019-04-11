/*
*
* (C) Copyright 2019Fresher Academy
* Author apple
* Date Apr 5, 2019
* Version 1.0
*
*/
package pages;

import javax.xml.xpath.XPath;

import org.openqa.selenium.support.PageFactory;

import io.appium.java_client.ios.IOSDriver;
import io.appium.java_client.ios.IOSElement;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import io.appium.java_client.pagefactory.iOSFindBy;

public class SettingPage {

	private IOSDriver<IOSElement> driver;
	public SettingPage(IOSDriver<IOSElement> driver) {
		this.driver = driver;
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
	
	public HomePage homePage() {
		return new HomePage(driver);
	}
	
	@iOSFindBy(xpath = "//XCUIElementTypeCell[2]/XCUIElementTypeTextField")
	private IOSElement defaultBalace;
	
	@iOSFindBy(xpath = "//XCUIElementTypeCell[3]/XCUIElementTypeTextField")
	private IOSElement quickAddAmount;
	
	@iOSFindBy(accessibility = "Save Settings")
	private IOSElement saveSettingButton;
	
	@iOSFindBy(accessibility = "New Game")
	private IOSElement newGameButton1;
	
	@iOSFindBy(xpath = "//XCUIElementTypeButton[@name='New Game']")
	private IOSElement newGameButton2;
	
	
	public IOSElement getDefaultBalace() {
		return defaultBalace;
	}

	public void setDefaultBalace(IOSElement defaultBalace) {
		this.defaultBalace = defaultBalace;
	}

	public IOSElement getQuickAddAmount() {
		return quickAddAmount;
	}

	public void setQuickAddAmount(IOSElement quickAddAmount) {
		this.quickAddAmount = quickAddAmount;
	}

	public IOSElement getSaveSettingButton() {
		return saveSettingButton;
	}

	public void setSaveSettingButton(IOSElement saveSettingButton) {
		this.saveSettingButton = saveSettingButton;
	}

	public IOSElement getNewGameButton1() {
		return newGameButton1;
	}

	public void setNewGameButton1(IOSElement newGameButton1) {
		this.newGameButton1 = newGameButton1;
	}

	public IOSElement getNewGameButton2() {
		return newGameButton2;
	}

	public void setNewGameButton2(IOSElement newGameButton2) {
		this.newGameButton2 = newGameButton2;
	}
	
	
	
}
