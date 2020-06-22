package steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.InventoryPage;
import static org.junit.Assert.*;
import java.util.List;

public class InventoryFiltersStepsDefinition {

    private InventoryPage inventoryPage;

    public InventoryFiltersStepsDefinition() {
        inventoryPage = new InventoryPage();
    }

    @Given("The Inventory page is open")
    public void theInventoryPageIsOpen() {
        inventoryPage.navigateToInventoryPage();
    }

    @When("User clicks {string} in the Year filter list")
    public void userClicksYear(String year) {
        inventoryPage.clickYear(year);
    }

    @Then("Cars of the year {string} only are displayed in the inventory list")
    public void verifyCarsYear(String expectedYear) {
        List<String> years = inventoryPage.getYearsListFromInventory();
        for (String year : years) {
            assertEquals(expectedYear, year);
        }
    }

    @When("User clicks {string} in the Body type filter list")
    public void userClicksBodyType(String body) {
        inventoryPage.clickBodyType(body);
    }

    @Then("Cars with the body type {string} only are displayed in the inventory list")
    public void verifyCarsBodyTypes(String expectedBody) {
        List<String> bodies = inventoryPage.getBodiesListFromInventory();
        for (String body : bodies) {
            assertEquals(expectedBody.toUpperCase(), body);
        }
    }

    @When("User clicks {string} in the Make filter list")
    public void userClicksMaker(String maker) {
        inventoryPage.clickMaker(maker);
    }

    @Then("Cars of the {string} only are displayed in the inventory list")
    public void verifyCarsMaker(String expectedMaker) {
        List<String> headers = inventoryPage.getHeadersListFromInventory();
        for (String header : headers) {
            assertTrue(header.contains(expectedMaker));
        }
    }

    @When("User clicks {string} in the Engine filter list")
    public void userClicksEngine(String engine) {
        inventoryPage.clickEngine(engine);
    }

    @Then("Cars with the {string} only are displayed in the inventory list")
    public void verifyCarsEngine(String expectedEngine) {
        List<String> engines = inventoryPage.getEnginesListFromInventory();
        for (String engine : engines) {
            assertEquals(expectedEngine.substring(0, 17), engine.substring(0, 17));
        }
    }

    @Then("Cars of the {string}, with body type {string} and of {string} only are displayed in the inventory list")
    public void verifyCarsYearBodyTypeAndMaker(String expectedYear, String expectedBody, String expectedMaker) {
        List<String> headers = inventoryPage.getHeadersListFromInventory();
        for (String header : headers) {
            assertTrue(header.contains(expectedYear));
            assertTrue(header.contains(expectedMaker));
        }
        List<String> bodies = inventoryPage.getBodiesListFromInventory();
        for (String body : bodies) {
            assertEquals(expectedBody.toUpperCase(), body);
        }
    }

    @Then("User clicks every year, visible in Year filter list, and gets result")
    public void userGetsYearsListFromFilter() {
        List<String> expectedYears = inventoryPage.getYearsListFromFilter();
        for (String expectedYear : expectedYears) {
            inventoryPage.clickYear(expectedYear);
            List<String> years = inventoryPage.getYearsListFromInventory();
            for (String year : years) {
                assertEquals(expectedYear, year);
            }
            inventoryPage.clearFilter();
        }
    }

    @Then("User clicks every type, visible in Body type filter list, and gets result")
    public void userGetsBodyTypesListFromFilter() {
        List<String> expectedBodies = inventoryPage.getBodiesListFromFilter();
        for (String expectedBody : expectedBodies) {
            inventoryPage.clickBodyType(expectedBody);
            List<String> bodies = inventoryPage.getBodiesListFromInventory();
            for (String body : bodies) {
                assertEquals(expectedBody.toUpperCase(), body);
            }
            inventoryPage.clearFilter();
        }
    }

    @Then("User clicks every maker, visible in Make filter list, and gets result")
    public void userGetsMakersListFromFilter() {
        List<String> expectedMakers = inventoryPage.getMakersListFromFilter();
        for (String expectedMaker : expectedMakers) {
            inventoryPage.clickMaker(expectedMaker);
            List<String> headers = inventoryPage.getHeadersListFromInventory();
            for (String header : headers) {
                assertTrue(header.contains(expectedMaker));
            }
            inventoryPage.clearFilter();
        }
    }

    @Then("User clicks every engine, visible in Engine filter list, and gets result")
    public void userGetsEnginesListFromFilter() {
        List<String> expectedEngines = inventoryPage.getEnginesListFromFilter();
        for (String expectedEngine : expectedEngines) {
            inventoryPage.clickEngine(expectedEngine);
            List<String> engines = inventoryPage.getEnginesListFromInventory();
            for (String engine : engines) {
                assertEquals(expectedEngine.substring(0, 17), engine.substring(0, 17));
            }
            inventoryPage.clearFilter();
        }
    }
}
