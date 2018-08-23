package com.TestCases;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.RunnerClass.CucumberRunner;
import com.ScreenFunctions.Login;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Tc_01_ValidateLoginForm extends CucumberRunner {
	
	
	
	
	
	/*
	 * 
	 * 
	 * 
	 */
	
	@Given("^I want to launch the firefox browser$")
	public void runBrowser() {
	   
		driver=new FirefoxDriver();
	}
	
	@And("^i need to maximize it$")
	
	public void maximizeBrowser() {
		   
		driver.manage().window().maximize();
	}
	
	@When("^it maximizes enter the url$")
	
	public void enterURL()
	{
		driver.get("http://testingmasters.com/hrm/symfony/web/index.php/auth/login");
	}
	
	@Then("^I need to enter valid credentials$")
	public void EnterCredentials()
	{
		
		Login lgn=PageFactory.initElements(driver, Login.class);
		lgn.Login_Admin();
		
	}
	
}
