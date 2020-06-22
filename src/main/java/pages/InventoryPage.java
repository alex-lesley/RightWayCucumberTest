package pages;

import org.openqa.selenium.WebElement;

import java.util.ArrayList;
import java.util.List;

public class InventoryPage extends BasePage {

    public static final String INVENTORY_PAGE_URL = "https://www.rightwayautosale.com/inventory";

    public static final String CLEAR_FILTER = "//a[text()='X']";
    public static final String FILTER_OPTION = "//a[text()='%s']";
    public static final String NEXT_BUTTON = "//li[@class='next']";
    public static final String PREV_BUTTON = "//li[@class='prev']";
    public static final String FIRST_BUTTON = "//a[@data-page='0']";

    public static final String MORE_OPTIONS = "//div[@class='eziFilter%s']//a[@class='eziSeeMoreLess']";
    public static final String FILTER_LIST = "//div[@class='eziFilter%s']//a";
    public static final String SORT_OPTION = "//a[@tabindex='-1' and text()='%s']";

    public static final String INVENTORY_LIST_HEADER = "//h2[@class='eziVehicleName']";
    public static final String INVENTORY_LIST_ELEMENT = "(//h2[@class='eziVehicleName']//a)[%d]";
    public static final String INVENTORY_LIST_ENGINE = "//strong[text()='Engine']/following-sibling::span";
    public static final String INVENTORY_LIST_MILEAGE = "//strong[text()=' Odometer ']/following-sibling::span";
    public static final String INVENTORY_LIST_PRICE = "//span[@class='eziPriceValue']";

    public static final String BODY_TYPE_DETAILS = "//h2[text()='Body Type']/span";

    public static final String INVENTORY_TAB = "//a[contains(text(), '%s')]//ancestor::div[@class='vehicle-listing']";
    public static final String INVENTORY_PICTURE = "//div[@data-key='%s']//div[@class='img-list-respnsivex']";
    public static final String INVENTORY_PRICE = "//div[@data-key='%s']//span[@class='eziPriceValue']";
    public static final String VIEW_DETAILS_BUTTON = "//div[@data-key='%s']//a[@class='view-detail-btn ']";
    public static final String INVENTORY_FIELD = "//div[@data-key='%s']//strong[text()='%s']/following-sibling::span";

    public void navigateToInventoryPage() {
        webDriver.get(INVENTORY_PAGE_URL);
    }

    public void clickYear(String year) {
        try {
            clickElementByXpath(String.format(FILTER_OPTION, year));
        } catch (Exception e) {
            clickElementByXpath(String.format(MORE_OPTIONS, "Year"));
            clickElementByXpath(String.format(FILTER_OPTION, year));
        }
    }

    public void clickBodyType(String type) {
        try {
            clickElementByXpath(String.format(FILTER_OPTION, type));
        } catch (Exception e) {
            clickElementByXpath(String.format(MORE_OPTIONS, "Body"));
            clickElementByXpath(String.format(FILTER_OPTION, type));
        }
    }

    public void clickMaker(String maker) {
        try {
            clickElementByXpath(String.format(FILTER_OPTION, maker));
        } catch (Exception e) {
            clickElementByXpath(String.format(MORE_OPTIONS, "Make"));
            clickElementByXpath(String.format(FILTER_OPTION, maker));
        }
    }

    public void clickEngine(String engine) {
        clickElementByXpath(String.format(FILTER_OPTION, engine));
    }

    public List<WebElement> getInventoryList() {
        return getElementsList(INVENTORY_LIST_HEADER);
    }

    public List<String> getYearsListFromInventory() {
        List<String> headers = getHeadersListFromInventory();
        List<String> years = new ArrayList<>();
        for (String header : headers) {
            years.add(header.substring(0, 4));
        }
        return years;
    }

    public List<String> getMakersListFromInventory() {
        List<String> headers = getHeadersListFromInventory();
        List<String> makers = new ArrayList<>();
        for (String header : headers) {
            String maker = header.substring(5);
            maker = maker.substring(0, maker.indexOf(" "));
            makers.add(maker);
        }
        return makers;
    }

    public List<String> getModelsListFromInventory() {
        List<String> headers = getHeadersListFromInventory();
        List<String> models = new ArrayList<>();
        for (String header : headers) {
            String model = header.substring(header.indexOf(" ", 5));
            model = model.substring(1, model.indexOf(" |"));
            models.add(model);
        }
        return models;
    }

    public List<Integer> getPricesListFromInventory() {
        List<Integer> prices = new ArrayList<>();
        boolean isNextPage = true;
        while (isNextPage) {
            List<WebElement> elements = getElementsList(INVENTORY_LIST_PRICE);
            for (WebElement element : elements) {
                int price = 0;
                try {
                    price = Integer.parseInt(element.getText().replaceAll("[^0-9]", ""));
                } catch (Exception err) {}
                prices.add(price);
            }
            isNextPage = false;
            if (isElementDisplayed(NEXT_BUTTON)) {
                clickElementByXpath(NEXT_BUTTON);
                isNextPage = true;
            }
        }
        return prices;
    }

    public List<String> getEnginesListFromInventory() {
        List<String> engines = new ArrayList<>();
        boolean isNextPage = true;
        while (isNextPage) {
            List<WebElement> elements = getElementsList(INVENTORY_LIST_ENGINE);
            for (WebElement element : elements) {
                engines.add(element.getText());
            }
            isNextPage = false;
            if (isElementDisplayed(NEXT_BUTTON)) {
                clickElementByXpath(NEXT_BUTTON);
                isNextPage = true;
            }
        }
        return engines;
    }

    public List<Integer> getMileageListFromInventory() {
        List<Integer> mileages = new ArrayList<>();
        boolean isNextPage = true;
        while (isNextPage) {
            List<WebElement> elements = getElementsList(INVENTORY_LIST_MILEAGE);
            for (WebElement element : elements) {
                mileages.add(Integer.parseInt(element.getText().replaceAll("[^0-9]", "")));
            }
            isNextPage = false;
            if (isElementDisplayed(NEXT_BUTTON)) {
                clickElementByXpath(NEXT_BUTTON);
                isNextPage = true;
            }
        }
        return mileages;
    }

    public List<String> getBodiesListFromInventory() {
        List<String> bodies = new ArrayList<>();
        boolean isNextPage = true;
        while (isNextPage) {
            List<WebElement> elements = getInventoryList();
            for (int i = 0; i < elements.size(); i++) {
                clickInventoryListElement(i + 1);
                bodies.add(getBodyTypeFromDetailsPage());
                navigateBack();
            }
            isNextPage = false;
            if (isElementDisplayed(NEXT_BUTTON)) {
                clickElementByXpath(NEXT_BUTTON);
                isNextPage = true;
            }
        }
        return bodies;
    }

    public List<String> getHeadersListFromInventory() {
        List<String> headers = new ArrayList<>();
        boolean isNextPage = true;
        while (isNextPage) {
            List<WebElement> elements = getInventoryList();
            for (WebElement element : elements) {
                headers.add(element.getText());
            }
            isNextPage = false;
            if (isElementDisplayed(NEXT_BUTTON)) {
                clickElementByXpath(NEXT_BUTTON);
                isNextPage = true;
            }
        }
//        if (isElementDisplayed(PREV_BUTTON_XPATH)) {
//            clickElementByXpath(FIRST_BUTTON_XPATH);
//        }
        return headers;
    }

    public List<String> getListFromFilter(String filerXpath) {
        List<String> textList = new ArrayList<>();
        List<WebElement> webElementList = getElementsList(filerXpath);
        for (WebElement webElement : webElementList) {
            textList.add(webElement.getText());
        }
        return textList;
    }

    public List<String> getYearsListFromFilter() {
        return getListFromFilter(String.format(FILTER_LIST, "Year"));
    }

    public List<String> getBodiesListFromFilter() {
        return getListFromFilter(String.format(FILTER_LIST, "Body"));
    }

    public List<String> getMakersListFromFilter() {
        return getListFromFilter(String.format(FILTER_LIST, "Make"));
    }

    public List<String> getEnginesListFromFilter() {
        return getListFromFilter(String.format(FILTER_LIST, "Engine"));
    }

    public void clickInventoryListElement(int i) {
        clickElementByXpath(String.format(INVENTORY_LIST_ELEMENT, i));
    }

    public void clearFilter() {
        clickElementByXpath(CLEAR_FILTER);
    }

    public String getBodyTypeFromDetailsPage() {
        return getElementText(BODY_TYPE_DETAILS);
    }

    public void clickYearSort() {
        clickElementByXpath(String.format(SORT_OPTION, "Year"));
    }

    public void clickMakeSort() {
        clickElementByXpath(String.format(SORT_OPTION, "Make"));
    }

    public void clickModelSort() {
        clickElementByXpath(String.format(SORT_OPTION, "Model"));
    }

    public void clickPriceSort() {
        clickElementByXpath(String.format(SORT_OPTION, "Price"));
    }

    public void clickMileageSort() {
        clickElementByXpath(String.format(SORT_OPTION, "Mileage"));
    }

    public String getDataKey(String car) {
        return getElement(String.format(INVENTORY_TAB, car)).getAttribute("data-key");
    }

    public boolean isPictureVisible(String car) {
        String dataKey = getDataKey(car);
        return isElementDisplayed(String.format(INVENTORY_PICTURE, dataKey));
    }

    public boolean isPriceVisible(String car) {
        String dataKey = getDataKey(car);
        return !getElementText(String.format(INVENTORY_PRICE, dataKey)).isEmpty();
    }

    public boolean isStockNumberVisible(String car) {
        String dataKey = getDataKey(car);
        return !getElementText(String.format(INVENTORY_FIELD, dataKey, "Stock#")).isEmpty();
    }

    public boolean isTransmissionVisible(String car) {
        String dataKey = getDataKey(car);
        return !getElementText(String.format(INVENTORY_FIELD, dataKey, "Transmission")).isEmpty();
    }

    public boolean isFuelVisible(String car) {
        String dataKey = getDataKey(car);
        return !getElementText(String.format(INVENTORY_FIELD, dataKey, "Fuel")).isEmpty();
    }

    public boolean isDrivetrainVisible(String car) {
        String dataKey = getDataKey(car);
        return !getElementText(String.format(INVENTORY_FIELD, dataKey, "Drivetrain")).isEmpty();
    }

    public boolean isExteriorVisible(String car) {
        String dataKey = getDataKey(car);
        return !getElementText(String.format(INVENTORY_FIELD, dataKey, "Exterior")).isEmpty();
    }

    public boolean isInteriorVisible(String car) {
        String dataKey = getDataKey(car);
        return !getElementText(String.format(INVENTORY_FIELD, dataKey, "Interior")).isEmpty();
    }

    public boolean isEngineVisible(String car) {
        String dataKey = getDataKey(car);
        return !getElementText(String.format(INVENTORY_FIELD, dataKey, "Engine")).isEmpty();
    }

    public boolean isOdometerVisible(String car) {
        String dataKey = getDataKey(car);
        return !getElementText(String.format(INVENTORY_FIELD, dataKey, " Odometer ")).isEmpty();
    }

    public boolean isDetailsButtonVisible(String car) {
        String dataKey = getDataKey(car);
        return isElementDisplayed(String.format(VIEW_DETAILS_BUTTON, dataKey));
    }

    public void clickViewDetailsButton(String car) {
        String dataKey = getDataKey(car);
        clickElementByXpath(String.format(VIEW_DETAILS_BUTTON, dataKey));
    }
}
