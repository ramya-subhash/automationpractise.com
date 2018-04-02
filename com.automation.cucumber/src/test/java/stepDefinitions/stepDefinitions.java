package stepDefinitions;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

/**
 * @author ramya subhash
 *
 */
@SuppressWarnings("deprecation")
public class stepDefinitions {
	WebDriver driver;
	public String browser=System.getProperty("browser");

	/**
	 * @author ramya subhash
	 * Description : Generic functions
	 *
	 */
	public void launch(String browser)
	{
		try {
			if(browser.equalsIgnoreCase("chrome"))
			{
				System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver 4");

				driver=new ChromeDriver();
			}
			if(browser.equalsIgnoreCase("firefox"))
			{
				System.setProperty("webdriver.gecko.driver", "src/test/resources/chromedriver 4");

				driver=new FirefoxDriver();	
			} else {

				System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver 4");

				driver=new ChromeDriver();
			}
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			driver.get("http://automationpractice.com/");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}


	public void clickElement(WebElement element)
	{
		WebDriverWait wait=new WebDriverWait(driver, 10);

		try{

			wait.until(ExpectedConditions.elementToBeClickable(element)).click();
		}
		catch(Exception e){	
		}
	}


	public static void sendKeys(WebElement element, String inputText, Boolean value)
	{
		try {
			if(value==true)
			{
				element.clear();
				element.sendKeys(inputText);
			}
			else
			{
				element.sendKeys(inputText);	
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public void visibilityCheck(int time, WebElement webelement)
	{

		WebDriverWait wait=new WebDriverWait(driver, time);

		try{

			wait.until(ExpectedConditions.visibilityOf(webelement));
		}
		catch(Exception e){	
		}
	}

	public static void setSelectedOption(WebElement webelement, String visibleText)
	{
		try {
			Select select = new Select(webelement);
			List<WebElement> options = select.getOptions();
			List<String> optionTexts = new ArrayList<String>();

			boolean valueAvailable = false;
			for(WebElement option : options)
			{
				optionTexts.add(option.getText());
				if(option.getText().equalsIgnoreCase(visibleText))
				{
					valueAvailable = true;
					break;
				}	
			}
			Assert.assertTrue(valueAvailable);
			select.selectByVisibleText(visibleText);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void closeBrowser()
	{
		driver.quit();
	}

	/**
	 * @author ramya subhash
	 * Description : Application specific functions
	 *
	 */
	public void priceComparison(String price)
	{
		List<WebElement> list=driver.findElements(By.xpath("//span[@itemprop='price']"));
		for(int i=1; i<(list.size()-2); i++)
		{
			try {
				Float price1 = Float.valueOf((list.get(i).getText()).substring(1));
				Float price2 = Float.valueOf((list.get(i+2).getText()).substring(1));
				System.out.println(price1);
				System.out.println(price2);
				if(price.contains("Lowest"))
				{
					Assert.assertTrue("Products are not sorted", price1<=price2);
				} else
				{
					Assert.assertTrue("Products are not sorted", price1>=price2);
				}
				i=i+1;
			} catch (NumberFormatException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

	/**
	 * @author ramya subhash
	 * Description : Gherkin functions
	 *
	 */

	@Given("^User has landed on the \"(.*?)\" page$")
	public void user_has_landed_on_the_page(String page) {
		launch("firefox");
		clickElement(driver.findElement(By.className("login")));
		Assert.assertTrue("Element Present", driver.findElement(By.xpath("//span[contains(text(),page)]")).isDisplayed());
	}

	@Given("^User has a valid \"(.*?)\" email address$")
	public void user_has_a_valid_email_address(String email) {
		sendKeys(driver.findElement(By.id("email_create")), email, true);
		clickElement(driver.findElement(By.id("SubmitCreate")));
	}

	@Given("^User had logged in the application$")
	public void user_has_logged_in_the_application() {
		sendKeys(driver.findElement(By.id("email")), "c123456@gmail.in", true);
		sendKeys(driver.findElement(By.id("passwd")), "abc123", true);
		clickElement(driver.findElement(By.id("SubmitLogin")));
	}

	@When("^User enters the registration details$")
	public void user_enters_the_registration_details() {
		sendKeys(driver.findElement(By.id("customer_firstname")), "akshay", true);
		sendKeys(driver.findElement(By.id("customer_lastname")), "harti", true);
		sendKeys(driver.findElement(By.id("passwd")), "abc123", true);
		sendKeys(driver.findElement(By.id("firstname")), "akshay", true);
		sendKeys(driver.findElement(By.id("lastname")), "harti", true);
		sendKeys(driver.findElement(By.id("address1")), "220 spancer street", true);
		sendKeys(driver.findElement(By.id("city")), "melbourne", true);
		sendKeys(driver.findElement(By.id("postcode")), "30000", true);
		sendKeys(driver.findElement(By.id("phone_mobile")), "0487657568", true);
		sendKeys(driver.findElement(By.id("alias")), "akshays", true);
		setSelectedOption(driver.findElement(By.id("id_state")), "Indiana");
		setSelectedOption(driver.findElement(By.id("id_country")), "United States");
		clickElement(driver.findElement(By.id("submitAccount")));
	}

	@Then("^User should be able to regiser successfully$")
	public void user_should_be_able_to_regiser_successfully() {
		Assert.assertTrue("Element Present", driver.findElement(By.xpath("//span[contains(text(),'My account')]")).isDisplayed());
	}

	@When("^User enters an invalid \"(.*?)\" email address$")
	public void user_enters_an_invalid_email_address(String email) {
		sendKeys(driver.findElement(By.id("email_create")), email, true);
		clickElement(driver.findElement(By.id("SubmitCreate")));
	}

	@Then("^User should see an error message$")
	public void user_should_see_an_error_message() {
		Assert.assertTrue("Element Present", driver.findElement(By.xpath("//li[contains(text(), 'Invalid email address.')]")).isDisplayed());
	}

	@When("^User selects \"(.*?)\" menu$")
	public void user_selects_menu(String menu) { 
		clickElement(driver.findElement(By.linkText(menu)));
	}

	@Then("^User should be able navigate to \"(.*?)\" menu$")
	public void user_should_be_able_navigate_to_menu(String menu) {
		Assert.assertTrue("Element Present", driver.findElement(By.xpath("//span[contains(text(), menu)]")).isDisplayed());
	}

	@When("^User sorts the menu by \"(.*?)\" option$")
	public void user_sorts_the_menu_by(String dropdown) {
		setSelectedOption(driver.findElement(By.id("selectProductSort")), dropdown);
	}

	@Then("^User should see the products menu sorted by \"(.*?)\" option$")
	public void user_should_see_the_products_menu_sorted_by(String price) {
		visibilityCheck(10, driver.findElement(By.xpath("//span[@itemprop='price']")));
		priceComparison(price);
	}
}
