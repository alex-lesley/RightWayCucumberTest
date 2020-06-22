package driver;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.concurrent.TimeUnit;

public class WebDriverSetup {

    private static WebDriver webDriver;

    public static void startWebDriver() {
        if (webDriver == null) {
            WebDriverManager.chromedriver().setup();
            webDriver = new ChromeDriver();
            webDriver.manage().window().maximize();
            webDriver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
        }
    }

    public static WebDriver getWebDriver() {
        return webDriver;
    }

    public static void closeWebDriver() {
        webDriver.quit();
    }

}
