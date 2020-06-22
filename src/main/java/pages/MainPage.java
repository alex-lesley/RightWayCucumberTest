package pages;

public class MainPage extends BasePage {

    public static final String MAIN_PAGE_URL = "https://www.rightwayautosale.com/";
    public static final String ROOT_URL = "https://www.rightwayautosale.com%s";
    public static final String ABOUT_US_URL = "/about-us";
    public static final String CONTACT_US_URL = "/contact-us";
    public static final String INVENTORY_URL = "/inventory";

    public static final String TOP_LOGO_XPATH = "//div[@class='container top_header']";
    public static final String MENU_XPATH = "//a[@href='/%s']";
    public static final String HOME_MENU = "";
    public static final String ABOUT_US_MENU = "about-us";
    public static final String CONTACT_US_MENU_XPATH = "//ul[@id='w1']//a[@href='/contact-us']";
    //    public static final String CONTACT_US_MENU_XPATH0 = "//ul[@id='w0']//a[@href='/contact-us']";
    public static final String INVENTORY_MENU = "inventory";

    public static final String MAIN_PAGE_HEADER_XPATH = "//h2[text()='Vehicles we offer']";
    public static final String ABOUT_US_HEADER_XPATH = "//h2[contains(text(), 'Right Way Auto Sales')]";
    public static final String CONTACT_US_HEADER_XPATH = "//h1[contains(text(), 'HOW CAN WE HELP YOU?')]";
    public static final String INVENTORY_HEADER_XPATH = "//h1[contains(text(), 'View Inventory')]";


    public void navigateToMainPage() {
        webDriver.get(MAIN_PAGE_URL);
    }

    public void clickMenu(String menu) throws Exception {
        String xpath;
        switch (menu) {
            case ("Main"):
                xpath = String.format(MENU_XPATH, HOME_MENU);
                break;
            case ("About us"):
                xpath = String.format(MENU_XPATH, ABOUT_US_MENU);
                break;
            case ("Contact us"):
                xpath = CONTACT_US_MENU_XPATH;
                break;
            case ("Inventory"):
                xpath = String.format(MENU_XPATH, INVENTORY_MENU);
                break;
            default:
                throw new Exception("Invalid menu option");
        }
        clickElementByXpath(xpath);
    }

    public boolean isTopLogoDisplayed() {
        return isElementDisplayed(TOP_LOGO_XPATH);
    }

    public boolean isHeaderDisplayed(String menu) throws Exception {
        String xpath;
        switch (menu) {
            case ("Main"):
                xpath = MAIN_PAGE_HEADER_XPATH;
                break;
            case ("About us"):
                xpath = ABOUT_US_HEADER_XPATH;
                break;
            case ("Contact us"):
                xpath = CONTACT_US_HEADER_XPATH;
                break;
            case ("Inventory"):
                xpath = INVENTORY_HEADER_XPATH;
                break;
            default:
                throw new Exception("Invalid menu option");
        }
        return isElementDisplayed(xpath);
    }

    public String getUrlConstant(String menu) throws Exception {
        switch (menu) {
            case ("Main"):
                return MAIN_PAGE_URL;
            case ("About us"):
                return String.format(ROOT_URL, ABOUT_US_URL);
            case ("Contact us"):
                return String.format(ROOT_URL, CONTACT_US_URL);
            case ("Inventory"):
                return String.format(ROOT_URL, INVENTORY_URL);
            default:
                throw new Exception("Invalid menu option");
        }
    }
}
