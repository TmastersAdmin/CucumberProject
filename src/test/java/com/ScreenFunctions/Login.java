package com.ScreenFunctions;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import com.RunnerClass.CucumberRunner;
import com.relevantcodes.extentreports.LogStatus;

public class Login extends CucumberRunner {
	
	
	@FindBy(how=How.ID,using="txtUsername")
	public static WebElement Edi_UserName;
	
	@FindBy(how=How.ID,using="txtPassword")
	public static WebElement Edi_Password;

	@FindBy(how=How.ID,using="btnLogin")
	public static WebElement Btn_Login;
	
	public void Login_Admin()
	{
		try
		{
		Edi_UserName.sendKeys("user01");
		Edi_Password.sendKeys("pass1234");
		Btn_Login.click();
		test.log(LogStatus.PASS, "Login is sucessfully"+test.addBase64ScreenShot(takescreenshot()));
		
		}
		catch(Exception e)
		{
			test.log(LogStatus.FAIL, "Login is not sucessfully done");
		}
	}

}
