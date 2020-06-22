package pages;

public class DetailsPage extends BasePage {

    public static final String INVENTORY_PAGE_URL = "https://www.rightwayautosale.com/inventory";

    public static final String VIEW_DETAILS_BUTTON = "//div[@data-key='%s']//a[@class='view-detail-btn ']";
    public static final String INVENTORY_TAB = "//a[contains(text(), '%s')]//ancestor::div[@class='vehicle-listing']";

    public static final String MAIN_LOGO = "//div[@class='container top_header']";
    public static final String CAR_HEADER = "//div[contains(@class, 'inventory-name-inner')]//h1";
    public static final String CAR_PRICE = "//div[contains(@class, 'inventory-price-inner')]//h2";
    public static final String CAR_GALLERY = "//div[@class='inner-page inventory-listing']";
    public static final String PRIMARY_FIELDS = "//span[text()='%s #:']//ancestor::h5";
    public static final String OVERVIEW = "//h6[text()='Vehicle Overview']";
    public static final String OVERVIEW_FIELDS = "//h2[text()='%s']/span";
    public static final String DESCRIPTION = "//h6[text()='Vehicle Description']";
    public static final String FEATURES = "//h6[text()='Features & Options']";



    public void navigateToInventoryPage() {
        webDriver.get(INVENTORY_PAGE_URL);
    }

    public void clickViewDetailsButton(String car) {
        String dataKey = getDataKey(car);
        clickElementByXpath(String.format(VIEW_DETAILS_BUTTON, dataKey));
    }

    public String getDataKey(String car) {
        return getElement(String.format(INVENTORY_TAB, car)).getAttribute("data-key");
    }

    public boolean isMainLogoDisplayed() {
        return isElementDisplayed(MAIN_LOGO);
    }

    public String getCarHeader() {
        return getElementText(CAR_HEADER);
    }

    public String getPrice() {
        return getElementText(CAR_PRICE);
    }

    public boolean isGalleryDisplayed() {
        return isElementDisplayed(CAR_GALLERY);
    }

    public String getVinNumber() {
        return getElementText(String.format(PRIMARY_FIELDS, "VIN"));
    }

    public String getTrimNumber() {
        return getElementText(String.format(PRIMARY_FIELDS, "Trim"));
    }

    public String getStockNumber() {
        return getElementText(String.format(PRIMARY_FIELDS, "Stock"));
    }

    public String getCondition() {
        return getElementText(String.format(PRIMARY_FIELDS, "Condition"));
    }

    public String getCertification() {
        return getElementText(String.format(PRIMARY_FIELDS, "Certification"));
    }

    public boolean isOverviewDisplayed() {
        return isElementDisplayed(OVERVIEW);
    }

    public String getOdometer() {
        return getElementText(String.format(OVERVIEW_FIELDS, "Odometer"));
    }

    public String getBodyType() {
        return getElementText(String.format(OVERVIEW_FIELDS, "Body Type"));
    }

    public String getDrivetrain() {
        return getElementText(String.format(OVERVIEW_FIELDS, "Drive Train"));
    }

    public String getExteriorColor() {
        return getElementText(String.format(OVERVIEW_FIELDS, "Exterior Color"));
    }

    public String getFuelType() {
        return getElementText(String.format(OVERVIEW_FIELDS, "Fuel Type"));
    }

    public String getEngineData() {
        return getElementText(String.format(OVERVIEW_FIELDS, "Engine Data"));
    }

    public String getInteriorColor() {
        return getElementText(String.format(OVERVIEW_FIELDS, "Interior Color"));
    }

    public String getTransmission() {
        return getElementText(String.format(OVERVIEW_FIELDS, "Transmission"));
    }

    public String getFuelEconomy() {
        return getElementText(String.format(OVERVIEW_FIELDS, "Fuel Economy"));
    }

    public boolean isDescriptionDisplayed() {
        return isElementDisplayed(DESCRIPTION);
    }

    public boolean isFeaturesDisplayed() {
        return isElementDisplayed(FEATURES);
    }
}
