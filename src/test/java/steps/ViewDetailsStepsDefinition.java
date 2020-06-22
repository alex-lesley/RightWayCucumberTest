package steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.DetailsPage;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;


public class ViewDetailsStepsDefinition {

    private DetailsPage detailsPage;

    public ViewDetailsStepsDefinition() {
        detailsPage = new DetailsPage();
    }

    @Given("The Inventory page with cars list is open")
    public void theInventoryPageIsOpen() {
        detailsPage.navigateToInventoryPage();
    }

    @When("User clicks View Details button of the {string} tab in the inventory list")
    public void userClicksViewDetailsButton(String car) {
        detailsPage.clickViewDetailsButton(car);
    }

    @Then("The main logo is displayed")
    public void mainLogoDisplayed() {
        assertTrue(detailsPage.isMainLogoDisplayed());
    }

    @And("The {string} header is displayed")
    public void headerDisplayed(String car) {
        System.out.println(detailsPage.getCarHeader());
        System.out.println(car);
        assertTrue(detailsPage.getCarHeader().contains(car.toUpperCase()));
    }

    @And("The price is displayed")
    public void thePriceDisplayed() {
        assertFalse(detailsPage.getPrice().isEmpty());
    }

    @And("Pictures gallery is displayed")
    public void picturesGalleryDisplayed() {
        assertTrue(detailsPage.isGalleryDisplayed());
    }

    @And("The primary information section with it's fields is displayed")
    public void primaryInformationDisplayed() {
        assertFalse(detailsPage.getVinNumber().isEmpty());
        assertFalse(detailsPage.getStockNumber().isEmpty());
        assertFalse(detailsPage.getTrimNumber().isEmpty());
        assertFalse(detailsPage.getCondition().isEmpty());
        assertFalse(detailsPage.getCertification().isEmpty());
    }

    @And("The vehicle overview with it's fields is displayed")
    public void vehicleOverviewDisplayed() {
        assertTrue(detailsPage.isOverviewDisplayed());
        assertFalse(detailsPage.getOdometer().isEmpty());
        assertFalse(detailsPage.getBodyType().isEmpty());
        assertFalse(detailsPage.getDrivetrain().isEmpty());
        assertFalse(detailsPage.getExteriorColor().isEmpty());
        assertFalse(detailsPage.getFuelType().isEmpty());
        assertFalse(detailsPage.getEngineData().isEmpty());
        assertFalse(detailsPage.getInteriorColor().isEmpty());
        assertFalse(detailsPage.getTransmission().isEmpty());
        assertFalse(detailsPage.getFuelEconomy().isEmpty());
    }

    @And("The vehicle description is displayed")
    public void vehicleDescriptionDisplayed() {
        assertTrue(detailsPage.isDescriptionDisplayed());
    }

    @And("The Features and options section is displayed")
    public void featuresDisplayed() {
        assertTrue(detailsPage.isFeaturesDisplayed());
    }
}
