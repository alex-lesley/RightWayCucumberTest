package steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.MainPage;

import static org.junit.Assert.*;

public class MainPageStepsDefinition {
    private MainPage mainPage;

    public MainPageStepsDefinition() {
        mainPage = new MainPage();
    }

    @Given("User navigates to the main page")
    public void userNavigatesToTheMainPage() {
        mainPage.navigateToMainPage();
    }

    @When("User clicks {string} menu")
    public void userClicksMenu(String menu) {
        try {
            mainPage.clickMenu(menu);
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    @Then("Verify that {string} page URL is correct")
    public void verifyCurrentURL(String menu) {
        try {
            assertEquals(mainPage.getUrlConstant(menu), mainPage.getPageURL());
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    @And("Verify that Right Way logo is displayed")
    public void verifyRightWayLogo() {
        assertTrue(mainPage.isTopLogoDisplayed());
    }

    @And("Verify that {string} page header is displayed")
    public void verifyPageHeader(String menu) {
        try {
            assertTrue(mainPage.isHeaderDisplayed(menu));
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
