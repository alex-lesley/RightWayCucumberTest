package steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.InventoryPage;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import static org.junit.Assert.assertEquals;

public class InventorySortingStepsDefinition {
    private InventoryPage inventoryPage;

    public InventorySortingStepsDefinition() {
        inventoryPage = new InventoryPage();
    }

    @When("User clicks Year in the Sort menu")
    public void userClicksYearInSortMenu() {
        inventoryPage.clickYearSort();
    }

    @Then("The inventory list sorted by year is displayed")
    public void verifyCarsSortedByYear() {
        List<String> years = inventoryPage.getYearsListFromInventory();
        List<String> yearsSorted = new ArrayList(years);
        yearsSorted.sort(Comparator.reverseOrder());
        assertEquals(yearsSorted, years);
    }

    @When("User clicks Make in the Sort menu")
    public void userClicksMakeInSortMenu() {
        inventoryPage.clickMakeSort();
    }

    @Then("The inventory list sorted by maker is displayed")
    public void verifyCarsSortedByMaker() {
        List<String> makers = inventoryPage.getMakersListFromInventory();
        List<String> makersSorted = new ArrayList(makers);
        makersSorted.sort(Comparator.naturalOrder());
        assertEquals(makersSorted, makers);
    }

    @When("User clicks Model in the Sort menu")
    public void userClicksModelInSortMenu() {
        inventoryPage.clickModelSort();
    }

    @Then("The inventory list sorted by model is displayed")
    public void verifyCarsSortedByModel() {
        List<String> models = inventoryPage.getModelsListFromInventory();
        List<String> modelsSorted = new ArrayList(models);
        modelsSorted.sort(Comparator.naturalOrder());
        assertEquals(modelsSorted, models);
    }

    @When("User clicks Price in the Sort menu")
    public void userClicksPriceInSortMenu() {
        inventoryPage.clickPriceSort();
    }

    @Then("The inventory list sorted by price is displayed")
    public void verifyCarsSortedByPrice() {
        List<Integer> prices = inventoryPage.getPricesListFromInventory();
        List<Integer> pricesSorted = new ArrayList(prices);
        pricesSorted.sort(Comparator.naturalOrder());
        assertEquals(pricesSorted, prices);
    }

    @When("User clicks Mileage in the Sort menu")
    public void userClicksMileageInSortMenu() {
        inventoryPage.clickMileageSort();
    }

    @Then("The inventory list sorted by mileage is displayed")
    public void verifyCarsSortedByMileage() {
        List<Integer> mileages = inventoryPage.getMileageListFromInventory();
        List<Integer> mileagesSorted = new ArrayList(mileages);
        mileagesSorted.sort(Comparator.reverseOrder());
        assertEquals(mileagesSorted, mileages);
    }

    @Then("Then Cars with {string} only sorted by year are displayed in the inventory list")
    public void thenCarsWithOnlySortedByYearAreDisplayedInTheInventoryList(String expectedEngine) {
        List<String> engines = inventoryPage.getEnginesListFromInventory();
        for (String engine : engines) {
            assertEquals(expectedEngine.substring(0, 17), engine.substring(0, 17));
        }
        List<String> years = inventoryPage.getYearsListFromInventory();
        List<String> yearsSorted = new ArrayList(years);
        yearsSorted.sort(Comparator.reverseOrder());
        assertEquals(yearsSorted, years);
    }


}
