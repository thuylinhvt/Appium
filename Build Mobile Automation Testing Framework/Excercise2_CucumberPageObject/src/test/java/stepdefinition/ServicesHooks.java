/*
*
* (C) Copyright 2019Fresher Academy
* Author apple
* Date Apr 1, 2019
* Version 1.0
*
*/
package stepdefinition;

import static utils.AppiumBase.driver;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import utils.AppiumBase;

public class ServicesHooks {

	AppiumBase appiumBase = new AppiumBase();
	
	@Before
	public void initializeTest() {
		appiumBase.createDriver();
	}
	
	@After(order = 1)
	public void captureFailed(Scenario scenario) {
		if (scenario.isFailed()) {
			scenario.write("finish scenario");
			scenario.embed(((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES), "image/png");
			scenario.write("scenario failed");
		}else{
			scenario.write("scenario pass");
		}
	}

	@After(order = 0)
	public void afterHookfunction() {
		appiumBase.teardown();
	}
	
	
}
