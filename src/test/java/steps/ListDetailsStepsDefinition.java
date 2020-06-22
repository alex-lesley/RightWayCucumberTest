package steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.InventoryPage;
import static org.junit.Assert.assertTrue;


public class ListDetailsStepsDefinition {
    private InventoryPage inventoryPage;

    public ListDetailsStepsDefinition() {
        inventoryPage = new InventoryPage();
    }

    @When("User sees the {string} tab in the inventory list")
    public void userSeesTheTab(String car) {
    }

    @Then("The {string} tab has a picture")
    public void verifyCarHasPicture(String car) {
        assertTrue(inventoryPage.isPictureVisible(car));
    }

    @And("The {string} tab has a price")
    public void verifyCarHasPrice(String car) {
        assertTrue(inventoryPage.isPriceVisible(car));
    }

    @And("The {string} tab has a Stock number field")
    public void verifyCarHasStockNumber(String car) {
        assertTrue(inventoryPage.isStockNumberVisible(car));
    }

    @And("The {string} tab has a Transmission field")
    public void verifyCarHasTransmission(String car) {
        assertTrue(inventoryPage.isTransmissionVisible(car));
    }

    @And("The {string} tab has a Fuel field")
    public void verifyCarHasFuel(String car) {
        assertTrue(inventoryPage.isFuelVisible(car));
    }

    @And("The {string} tab has a Drivetrain field")
    public void verifyCarHasDrivetrain(String car) {
        assertTrue(inventoryPage.isDrivetrainVisible(car));
    }

    @And("The {string} tab has an Exterior field")
    public void verifyCarHasExterior(String car) {
        assertTrue(inventoryPage.isExteriorVisible(car));
    }

    @And("The {string} tab has an Interior field")
    public void verifyCarHasInterior(String car) {
        assertTrue(inventoryPage.isInteriorVisible(car));
    }

    @And("The {string} tab has an Engine field")
    public void verifyCarHasEngine(String car) {
        assertTrue(inventoryPage.isEngineVisible(car));
    }

    @And("The {string} tab has an Odometer field")
    public void verifyCarHasOdometer(String car) {
        assertTrue(inventoryPage.isOdometerVisible(car));
    }

    @And("The {string} tab has a View Details button")
    public void everyCarTabInTheListHasAViewDetailsButton(String car) {
        assertTrue(inventoryPage.isDetailsButtonVisible(car));
    }
}
