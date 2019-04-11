/*
*
* (C) Copyright 2019Fresher Academy
* Author apple
* Date Apr 5, 2019
* Version 1.0
*
*/
package pages;

import org.openqa.selenium.support.PageFactory;
import io.appium.java_client.ios.IOSDriver;
import io.appium.java_client.ios.IOSElement;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import io.appium.java_client.pagefactory.iOSFindBy;

public class HomePage {

	private IOSDriver<IOSElement> driver;
	public HomePage(IOSDriver<IOSElement> driver) {
		this.driver = driver;
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
	
	public SettingPage settingPage() {
		return new SettingPage(driver);
	}
	
	public AddPlayerPage addPlayerPage() {
		return new AddPlayerPage(driver);
	}
	
	@iOSFindBy(accessibility = "Bank")
	private IOSElement bank;
	
	@iOSFindBy(xpath = "//XCUIElementTypeOther[@name='BoardBank']")
	private IOSElement boardBank;
	
	@iOSFindBy(accessibility = "Add")
	private IOSElement addIcon;
	
	@iOSFindBy(xpath = "//XCUIElementTypeNavigationBar[@name='BoardBank']/XCUIElementTypeButton[1]")
	private IOSElement settingIcon;
	
	@iOSFindBy(xpath = "//XCUIElementTypeApplication[@name='BoardBank']//XCUIElementTypeCell[2]//XCUIElementTypeStaticText[1]")
	private IOSElement playerName;
	
	@iOSFindBy(xpath = "//XCUIElementTypeApplication[@name='BoardBank']//XCUIElementTypeCell[2]//XCUIElementTypeStaticText[2]")
	private IOSElement balance;
	
	@iOSFindBy(xpath = "//XCUIElementTypeSheet/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]")
	private IOSElement menu;
	
	@iOSFindBy(xpath = "//XCUIElementTypeOther[2]/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]")
	private IOSElement addBalance;
	
	public IOSElement getBank() {
		return bank;
	}

	public void setBank(IOSElement bank) {
		this.bank = bank;
	}

	public IOSElement getBoardBank() {
		return boardBank;
	}

	public void setBoardBank(IOSElement boardBank) {
		this.boardBank = boardBank;
	}

	public IOSElement getAddIcon() {
		return addIcon;
	}

	public void setAddIcon(IOSElement addIcon) {
		this.addIcon = addIcon;
	}

	public IOSElement getSettingIcon() {
		return settingIcon;
	}

	public void setSettingIcon(IOSElement settingIcon) {
		this.settingIcon = settingIcon;
	}

	public IOSElement getPlayerName() {
		return playerName;
	}

	public void setPlayerName(IOSElement playerName) {
		this.playerName = playerName;
	}

	public IOSElement getBalance() {
		return balance;
	}

	public void setBalance(IOSElement balance) {
		this.balance = balance;
	}

	public IOSElement getMenu() {
		return menu;
	}

	public void setMenu(IOSElement menu) {
		this.menu = menu;
	}

	public IOSElement getAddBalance() {
		return addBalance;
	}

	public void setAddBalance(IOSElement addBalance) {
		this.addBalance = addBalance;
	}

	
	
	
	
}
