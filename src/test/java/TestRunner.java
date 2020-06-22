import driver.WebDriverSetup;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

@CucumberOptions(
        features = {"src/test/resources/MainPageTest.feature",
                "src/test/resources/InventoryFiltersTest.feature",
                "src/test/resources/InventorySortingTest.feature",
                "src/test/resources/InventoryListDetailsTest.feature",
                "src/test/resources/ViewDetailsPageTest.feature"},
        plugin = {"pretty", "html:target/cucumber-reports/"},
        glue = {"steps"}
)

@RunWith(Cucumber.class)
public class TestRunner {

    @BeforeClass
    public static void setup() {
        WebDriverSetup.startWebDriver();
    }

    @AfterClass
    public static void tearDown() {
        WebDriverSetup.closeWebDriver();
    }

}
