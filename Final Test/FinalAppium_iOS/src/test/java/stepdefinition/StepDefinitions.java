/*
*
* (C) Copyright 2019Fresher Academy
* Author apple
* Date Apr 5, 2019
* Version 1.0
*
*/
package stepdefinition;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;
import static utils.AppiumBase.driver;

import java.util.List;

import org.testng.annotations.IFactoryAnnotation;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.appium.java_client.ios.IOSElement;
import pages.AddPlayerPage;
import pages.HomePage;
import pages.SettingPage;

public class StepDefinitions {

	HomePage homePage = new HomePage(driver);
	SettingPage settingPage = homePage.settingPage();
	AddPlayerPage addPlayerPage = homePage.addPlayerPage();

	@Given("^I am on the \"(.*)\"$")
	public void homeScreen(String screen) {
		if (screen.equals("Home Screen")) {
			assertTrue(homePage.getBoardBank().isDisplayed());
		}
	}

	@When("^I click the \"(.*)\"$")
	public void click(String element) {
		if (element.equals("Setting icon")) {
			if (homePage.getSettingIcon().isDisplayed()) {
				homePage.getSettingIcon().click();
			}
		}
		if (element.equals("New game button 1")) {
			if (settingPage.getNewGameButton1().isDisplayed()) {
				settingPage.getNewGameButton1().click();
			}
		}

		if (element.equals("New game button 2")) {
			if (settingPage.getNewGameButton2().isDisplayed()) {
				settingPage.getNewGameButton2().click();
			}
		}
		if (element.equals("Add icon")) {
			if (homePage.getAddIcon().isDisplayed()) {
				homePage.getAddIcon().click();
			}
		}
		if (element.equals("Add Player button")) {
			if (addPlayerPage.getAddPlayerButton().isDisplayed()) {
				addPlayerPage.getAddPlayerButton().click();
			}
		}
		if (element.equals("item")) {
			if (homePage.getPlayerName().isDisplayed()) {
				homePage.getPlayerName().click();
			}
		}
		if(element.equals("Add $200")) {
			if(homePage.getAddBalance().isDisplayed()) {
				homePage.getAddBalance().click();
			}
			try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		if(element.equals("Save Settings button")) {
			if(settingPage.getSaveSettingButton().isDisplayed()) {
				settingPage.getSaveSettingButton().click();
			}
		}

	}

	@Then("^I should see \"(.*)\"$")
	public void verifyDisplay(String element) {
		if (element.equals("BoardBank")) {
			assertTrue(homePage.getBoardBank().isDisplayed());
		}
		if (element.equals("Setting icon")) {
			assertTrue(homePage.getSettingIcon().isDisplayed());
		}
		if (element.equals("Name textbox")) {
			assertTrue(addPlayerPage.getName().isDisplayed());
		}
		if (element.equals("Balance textbox")) {
			assertTrue(addPlayerPage.getBalance().isDisplayed());
		}
		if (element.equals("Add Playe button")) {
			assertTrue(addPlayerPage.getAddPlayerButton().isDisplayed());
		}
		if (element.equals("menu")) {
			assertTrue(homePage.getMenu().isDisplayed());
		}

	}

	@Then("^I should see \"(.*)\" available for click$")
	public void verifyAvailable(String element) {
		if (element.equals("Add icon")) {
			if (homePage.getAddIcon().isDisplayed()) {
				assertTrue(homePage.getAddIcon().isEnabled());
			}
		}
	}

	@Then("^I should see \"(.*)\" is 12$")
	public void verifyIconNumber(String element) {
		if (element.equals("Icon number")) {
			List<IOSElement> list = addPlayerPage.getListIcons();
			int count = 0;
			for (IOSElement iosElement : list) {
				if (iosElement.isDisplayed()) {
					count++;
				}
			}
			assertEquals(count, 12);
		}
	}

	@When("^I sendkeys \"(.*)\" into \"(.*)\"$")
	public void sendkeys(String text, String element) {
		try {
			if (element.equals("Name textbox") && text.equals("Thuy Linh")) {
				addPlayerPage.getName().clear();
				addPlayerPage.getName().sendKeys(text);
			}
			Thread.sleep(1000);

			if (element.equals("Balance value") && text.equals("1000")) {
				addPlayerPage.getBalance().clear();
				addPlayerPage.getBalance().sendKeys(text);
			}
			Thread.sleep(1000);

			if(element.equals("Default Balance") && text.equals("3000")) {
				settingPage.getDefaultBalace().clear();
				settingPage.getDefaultBalace().sendKeys(text);
			}
			Thread.sleep(1000);
			
			if(element.equals("Quick Add Amount") && text.equals("500")) {
				settingPage.getQuickAddAmount().clear();
				settingPage.getQuickAddAmount().sendKeys("500");
			}
			Thread.sleep(1000);
			
			if(element.equals("Quick Add Amount") && text.equals("200")) {
				settingPage.getQuickAddAmount().clear();
				settingPage.getQuickAddAmount().sendKeys("200");
			}
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@When("^I select \"(.*)\"$")
	public void selectIcon(String icon) {
		if (icon.equals("Icon")) {
			addPlayerPage.getListIcons().get(1).click();
		}
	}

	@Then("^I should see the \"(.*)\" is \"(.*)\"$")
	public void verifyText(String element, String text) {
		if (element.equals("Player Name") && text.equals("Thuy Linh")) {
			assertTrue(homePage.getPlayerName().getText().equals(text));
		}
		if (element.equals("Balance value") && text.equals("1000")) {
			assertTrue(homePage.getBalance().getText().equals("$1.000"));
		}
		if(element.equals("Balance value") && text.equals("1200")) {
			assertTrue(homePage.getBalance().getText().equals("$1.200"));
		}
		if(element.equals("Balance value") && text.equals("3000")) {
			assertTrue(addPlayerPage.getBalance().getText().equals(text));
		}
		if(element.equals("Balance value") && text.equals("1500")) {
			assertTrue(homePage.getBalance().getText().equals("$1.500"));
		}
	}

}
