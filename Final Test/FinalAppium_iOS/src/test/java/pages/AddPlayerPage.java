/*
*
* (C) Copyright 2019Fresher Academy
* Author apple
* Date Apr 5, 2019
* Version 1.0
*
*/
package pages;

import java.util.List;

import org.openqa.selenium.support.PageFactory;

import io.appium.java_client.ios.IOSDriver;
import io.appium.java_client.ios.IOSElement;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import io.appium.java_client.pagefactory.iOSFindBy;

public class AddPlayerPage {

	private IOSDriver<IOSElement> driver;
	public AddPlayerPage(IOSDriver<IOSElement> driver) {
		this.driver = driver;
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
	
	public HomePage homePage() {
		return new HomePage(driver);
	}
	
	@iOSFindBy(xpath = "//XCUIElementTypeCell[1]/XCUIElementTypeTextField")
	private IOSElement name;
	
	@iOSFindBy(xpath = "//XCUIElementTypeCell[2]/XCUIElementTypeTextField")
	private IOSElement balance;
	
	@iOSFindBy(xpath = "//XCUIElementTypeCell[3]/XCUIElementTypeCollectionView/XCUIElementTypeCell")
	private List<IOSElement> listIcons;
	
	@iOSFindBy(xpath = "//XCUIElementTypeStaticText[@name='Add Player']")
	private IOSElement addPlayerButton;
	public IOSElement getName() {
		return name;
	}

	public void setName(IOSElement name) {
		this.name = name;
	}

	public IOSElement getBalance() {
		return balance;
	}

	public void setBalance(IOSElement balance) {
		this.balance = balance;
	}

	public List<IOSElement> getListIcons() {
		return listIcons;
	}

	public void setListIcons(List<IOSElement> listIcons) {
		this.listIcons = listIcons;
	}

	public IOSElement getAddPlayerButton() {
		return addPlayerButton;
	}

	public void setAddPlayerButton(IOSElement addPlayerButton) {
		this.addPlayerButton = addPlayerButton;
	}
	
	
}
