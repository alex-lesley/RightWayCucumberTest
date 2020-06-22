package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import driver.WebDriverSetup;

import java.util.List;

public abstract class BasePage {
    protected WebDriver webDriver = WebDriverSetup.getWebDriver();
    protected WebDriverWait wait = new WebDriverWait(webDriver, 5);

    public boolean isElementDisplayed(String xpath) {
//        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(xpath)));
        List<WebElement> webElementsList = webDriver.findElements(By.xpath(xpath));
        return webElementsList.size() > 0;
    }

    public List<WebElement> getElementsList(String xpath) {
        return webDriver.findElements(By.xpath(xpath));
    }

    public WebElement getElement(String xpath) {
        return webDriver.findElement(By.xpath(xpath));
    }

    public void clickElementByXpath(String xpath) {
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(xpath)));
        webDriver.findElement(By.xpath(xpath)).click();
    }

    public String getPageURL() {
        return webDriver.getCurrentUrl();
    }

    public String getElementText(String xpath) {
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(xpath)));
        return webDriver.findElement(By.xpath(xpath)).getText();
    }

    public void navigateBack() {
        webDriver.navigate().back();
    }

}
