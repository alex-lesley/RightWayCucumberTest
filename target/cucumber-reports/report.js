$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/InventoryFiltersTest.feature");
formatter.feature({
  "name": "Inventory page filters test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Select the Year filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"\u003cyear\u003e\" in the Year filter list",
  "keyword": "When "
});
formatter.step({
  "name": "Cars of the year \"\u003cyear\u003e\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "year"
      ]
    },
    {
      "cells": [
        "2014"
      ]
    },
    {
      "cells": [
        "2013"
      ]
    },
    {
      "cells": [
        "2012"
      ]
    },
    {
      "cells": [
        "2011"
      ]
    },
    {
      "cells": [
        "2010"
      ]
    },
    {
      "cells": [
        "2009"
      ]
    },
    {
      "cells": [
        "2008"
      ]
    },
    {
      "cells": [
        "2003"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Select the Year filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"2014\" in the Year filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksYear(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //div[@class\u003d\u0027eziFilterYear\u0027]//a[@class\u003d\u0027eziSeeMoreLess\u0027] (tried for 5 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat pages.BasePage.clickElementByXpath(BasePage.java:31)\r\n\tat pages.InventoryPage.clickYear(InventoryPage.java:44)\r\n\tat steps.InventoryFiltersStepsDefinition.userClicksYear(InventoryFiltersStepsDefinition.java:25)\r\n\tat ✽.User clicks \"2014\" in the Year filter list(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:7)\r\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027eziFilterYear\u0027]//a[@class\u003d\u0027eziSeeMoreLess\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat pages.BasePage.clickElementByXpath(BasePage.java:31)\r\n\tat pages.InventoryPage.clickYear(InventoryPage.java:44)\r\n\tat steps.InventoryFiltersStepsDefinition.userClicksYear(InventoryFiltersStepsDefinition.java:25)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Cars of the year \"2014\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsYear(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select the Year filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"2013\" in the Year filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksYear(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars of the year \"2013\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsYear(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select the Year filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"2012\" in the Year filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksYear(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars of the year \"2012\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsYear(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select the Year filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"2011\" in the Year filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksYear(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars of the year \"2011\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsYear(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select the Year filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"2010\" in the Year filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksYear(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars of the year \"2010\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsYear(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select the Year filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"2009\" in the Year filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksYear(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars of the year \"2009\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsYear(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select the Year filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"2008\" in the Year filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksYear(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars of the year \"2008\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsYear(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select the Year filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"2003\" in the Year filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksYear(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars of the year \"2003\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsYear(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Select the Body type filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"\u003ctype\u003e\" in the Body type filter list",
  "keyword": "When "
});
formatter.step({
  "name": "Cars with the body type \"\u003ctype\u003e\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "type"
      ]
    },
    {
      "cells": [
        "Sedan"
      ]
    },
    {
      "cells": [
        "SUV-Crossover"
      ]
    },
    {
      "cells": [
        "Coupe-2-Door"
      ]
    },
    {
      "cells": [
        "Wagon"
      ]
    },
    {
      "cells": [
        "Minivan-Van"
      ]
    },
    {
      "cells": [
        "Pickup-Truck"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select the Body type filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"Sedan\" in the Body type filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksBodyType(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars with the body type \"Sedan\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsBodyTypes(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select the Body type filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"SUV-Crossover\" in the Body type filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksBodyType(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars with the body type \"SUV-Crossover\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsBodyTypes(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select the Body type filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"Coupe-2-Door\" in the Body type filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksBodyType(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars with the body type \"Coupe-2-Door\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsBodyTypes(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select the Body type filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"Wagon\" in the Body type filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksBodyType(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars with the body type \"Wagon\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsBodyTypes(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select the Body type filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"Minivan-Van\" in the Body type filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksBodyType(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars with the body type \"Minivan-Van\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsBodyTypes(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select the Body type filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"Pickup-Truck\" in the Body type filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksBodyType(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars with the body type \"Pickup-Truck\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsBodyTypes(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Select the Maker filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"\u003cmaker\u003e\" in the Make filter list",
  "keyword": "When "
});
formatter.step({
  "name": "Cars of the \"\u003cmaker\u003e\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "maker"
      ]
    },
    {
      "cells": [
        "Chrysler"
      ]
    },
    {
      "cells": [
        "Ford"
      ]
    },
    {
      "cells": [
        "Mazda"
      ]
    },
    {
      "cells": [
        "Volvo"
      ]
    },
    {
      "cells": [
        "Kia"
      ]
    },
    {
      "cells": [
        "Nissan"
      ]
    },
    {
      "cells": [
        "Infiniti"
      ]
    },
    {
      "cells": [
        "Subaru"
      ]
    },
    {
      "cells": [
        "Volkswagen"
      ]
    },
    {
      "cells": [
        "Hyundai"
      ]
    },
    {
      "cells": [
        "Dodge"
      ]
    },
    {
      "cells": [
        "Toyota"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select the Maker filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"Chrysler\" in the Make filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksMaker(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars of the \"Chrysler\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsMaker(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select the Maker filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"Ford\" in the Make filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksMaker(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars of the \"Ford\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsMaker(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select the Maker filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"Mazda\" in the Make filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksMaker(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars of the \"Mazda\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsMaker(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select the Maker filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"Volvo\" in the Make filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksMaker(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars of the \"Volvo\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsMaker(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select the Maker filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"Kia\" in the Make filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksMaker(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars of the \"Kia\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsMaker(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select the Maker filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"Nissan\" in the Make filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksMaker(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars of the \"Nissan\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsMaker(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select the Maker filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"Infiniti\" in the Make filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksMaker(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars of the \"Infiniti\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsMaker(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select the Maker filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"Subaru\" in the Make filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksMaker(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars of the \"Subaru\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsMaker(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select the Maker filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"Volkswagen\" in the Make filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksMaker(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars of the \"Volkswagen\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsMaker(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select the Maker filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"Hyundai\" in the Make filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksMaker(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars of the \"Hyundai\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsMaker(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select the Maker filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"Dodge\" in the Make filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksMaker(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars of the \"Dodge\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsMaker(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select the Maker filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"Toyota\" in the Make filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksMaker(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars of the \"Toyota\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsMaker(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Select an Engine filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"\u003cengine\u003e\" in the Engine filter list",
  "keyword": "When "
});
formatter.step({
  "name": "Cars with the \"\u003cengine\u003e\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "engine"
      ]
    },
    {
      "cells": [
        "4 Cylinder Engine"
      ]
    },
    {
      "cells": [
        "6 Cylinder Engine"
      ]
    },
    {
      "cells": [
        "8 Cylinder Engine"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select an Engine filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"4 Cylinder Engine\" in the Engine filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksEngine(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars with the \"4 Cylinder Engine\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsEngine(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select an Engine filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"6 Cylinder Engine\" in the Engine filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksEngine(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars with the \"6 Cylinder Engine\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsEngine(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select an Engine filter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"8 Cylinder Engine\" in the Engine filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksEngine(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars with the \"8 Cylinder Engine\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsEngine(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Select three filters at the same time",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"\u003cyear\u003e\" in the Year filter list",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks \"\u003cbody\u003e\" in the Body type filter list",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks \"\u003cmaker\u003e\" in the Make filter list",
  "keyword": "And "
});
formatter.step({
  "name": "Cars of the \"\u003cyear\u003e\", with body type \"\u003cbody\u003e\" and of \"\u003cmaker\u003e\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "year",
        "body",
        "maker"
      ]
    },
    {
      "cells": [
        "2012",
        "SUV-Crossover",
        "Mazda"
      ]
    },
    {
      "cells": [
        "2011",
        "Sedan",
        "Kia"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select three filters at the same time",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"2012\" in the Year filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksYear(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks \"SUV-Crossover\" in the Body type filter list",
  "keyword": "And "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksBodyType(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks \"Mazda\" in the Make filter list",
  "keyword": "And "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksMaker(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars of the \"2012\", with body type \"SUV-Crossover\" and of \"Mazda\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsYearBodyTypeAndMaker(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select three filters at the same time",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"2011\" in the Year filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksYear(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks \"Sedan\" in the Body type filter list",
  "keyword": "And "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksBodyType(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks \"Kia\" in the Make filter list",
  "keyword": "And "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksMaker(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Cars of the \"2011\", with body type \"Sedan\" and of \"Kia\" only are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.verifyCarsYearBodyTypeAndMaker(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify that every year, visible in Year filter list, could be chosen and display results",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User clicks every year, visible in Year filter list, and gets result",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userGetsYearsListFromFilter()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify that every body type, visible in Body types filter list, could be chosen and display results",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User clicks every type, visible in Body type filter list, and gets result",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userGetsBodyTypesListFromFilter()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify that every maker, visible in Make filter list, could be chosen and display results",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User clicks every maker, visible in Make filter list, and gets result",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userGetsMakersListFromFilter()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryFiltersTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify that every engine, visible in Engine filter list, could be chosen and display results",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User clicks every engine, visible in Engine filter list, and gets result",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userGetsEnginesListFromFilter()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/InventoryListDetailsTest.feature");
formatter.feature({
  "name": "Inventory list details test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify details of a car in the inventory list",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User sees the \"\u003ccar\u003e\" tab in the inventory list",
  "keyword": "When "
});
formatter.step({
  "name": "The \"\u003ccar\u003e\" tab has a picture",
  "keyword": "Then "
});
formatter.step({
  "name": "The \"\u003ccar\u003e\" tab has a price",
  "keyword": "And "
});
formatter.step({
  "name": "The \"\u003ccar\u003e\" tab has a Stock number field",
  "keyword": "And "
});
formatter.step({
  "name": "The \"\u003ccar\u003e\" tab has a Transmission field",
  "keyword": "And "
});
formatter.step({
  "name": "The \"\u003ccar\u003e\" tab has a Fuel field",
  "keyword": "And "
});
formatter.step({
  "name": "The \"\u003ccar\u003e\" tab has a Drivetrain field",
  "keyword": "And "
});
formatter.step({
  "name": "The \"\u003ccar\u003e\" tab has an Exterior field",
  "keyword": "And "
});
formatter.step({
  "name": "The \"\u003ccar\u003e\" tab has an Interior field",
  "keyword": "And "
});
formatter.step({
  "name": "The \"\u003ccar\u003e\" tab has an Engine field",
  "keyword": "And "
});
formatter.step({
  "name": "The \"\u003ccar\u003e\" tab has an Odometer field",
  "keyword": "And "
});
formatter.step({
  "name": "The \"\u003ccar\u003e\" tab has a View Details button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "car"
      ]
    },
    {
      "cells": [
        "2011 Infiniti G37x Coupe S"
      ]
    },
    {
      "cells": [
        "2010 Dodge Grand Caravan SXT"
      ]
    },
    {
      "cells": [
        "2003 Dodge Ram 1500 SLT"
      ]
    },
    {
      "cells": [
        "2011 Nissan Rogue SV"
      ]
    },
    {
      "cells": [
        "2010 Hyundai Santa Fe Sport"
      ]
    },
    {
      "cells": [
        "2009 Toyota RAV4 Base"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryListDetailsTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify details of a car in the inventory list",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User sees the \"2011 Infiniti G37x Coupe S\" tab in the inventory list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.userSeesTheTab(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2011 Infiniti G37x Coupe S\" tab has a picture",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasPicture(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2011 Infiniti G37x Coupe S\" tab has a price",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasPrice(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2011 Infiniti G37x Coupe S\" tab has a Stock number field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasStockNumber(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2011 Infiniti G37x Coupe S\" tab has a Transmission field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasTransmission(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2011 Infiniti G37x Coupe S\" tab has a Fuel field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasFuel(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2011 Infiniti G37x Coupe S\" tab has a Drivetrain field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasDrivetrain(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2011 Infiniti G37x Coupe S\" tab has an Exterior field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasExterior(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2011 Infiniti G37x Coupe S\" tab has an Interior field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasInterior(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2011 Infiniti G37x Coupe S\" tab has an Engine field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasEngine(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2011 Infiniti G37x Coupe S\" tab has an Odometer field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasOdometer(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2011 Infiniti G37x Coupe S\" tab has a View Details button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.everyCarTabInTheListHasAViewDetailsButton(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryListDetailsTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify details of a car in the inventory list",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User sees the \"2010 Dodge Grand Caravan SXT\" tab in the inventory list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.userSeesTheTab(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2010 Dodge Grand Caravan SXT\" tab has a picture",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasPicture(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2010 Dodge Grand Caravan SXT\" tab has a price",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasPrice(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2010 Dodge Grand Caravan SXT\" tab has a Stock number field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasStockNumber(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2010 Dodge Grand Caravan SXT\" tab has a Transmission field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasTransmission(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2010 Dodge Grand Caravan SXT\" tab has a Fuel field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasFuel(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2010 Dodge Grand Caravan SXT\" tab has a Drivetrain field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasDrivetrain(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2010 Dodge Grand Caravan SXT\" tab has an Exterior field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasExterior(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2010 Dodge Grand Caravan SXT\" tab has an Interior field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasInterior(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2010 Dodge Grand Caravan SXT\" tab has an Engine field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasEngine(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2010 Dodge Grand Caravan SXT\" tab has an Odometer field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasOdometer(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2010 Dodge Grand Caravan SXT\" tab has a View Details button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.everyCarTabInTheListHasAViewDetailsButton(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryListDetailsTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify details of a car in the inventory list",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User sees the \"2003 Dodge Ram 1500 SLT\" tab in the inventory list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.userSeesTheTab(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2003 Dodge Ram 1500 SLT\" tab has a picture",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasPicture(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2003 Dodge Ram 1500 SLT\" tab has a price",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasPrice(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2003 Dodge Ram 1500 SLT\" tab has a Stock number field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasStockNumber(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2003 Dodge Ram 1500 SLT\" tab has a Transmission field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasTransmission(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2003 Dodge Ram 1500 SLT\" tab has a Fuel field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasFuel(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2003 Dodge Ram 1500 SLT\" tab has a Drivetrain field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasDrivetrain(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2003 Dodge Ram 1500 SLT\" tab has an Exterior field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasExterior(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2003 Dodge Ram 1500 SLT\" tab has an Interior field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasInterior(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2003 Dodge Ram 1500 SLT\" tab has an Engine field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasEngine(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2003 Dodge Ram 1500 SLT\" tab has an Odometer field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasOdometer(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2003 Dodge Ram 1500 SLT\" tab has a View Details button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.everyCarTabInTheListHasAViewDetailsButton(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryListDetailsTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify details of a car in the inventory list",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User sees the \"2011 Nissan Rogue SV\" tab in the inventory list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.userSeesTheTab(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2011 Nissan Rogue SV\" tab has a picture",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasPicture(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2011 Nissan Rogue SV\" tab has a price",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasPrice(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2011 Nissan Rogue SV\" tab has a Stock number field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasStockNumber(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2011 Nissan Rogue SV\" tab has a Transmission field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasTransmission(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2011 Nissan Rogue SV\" tab has a Fuel field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasFuel(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2011 Nissan Rogue SV\" tab has a Drivetrain field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasDrivetrain(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2011 Nissan Rogue SV\" tab has an Exterior field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasExterior(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2011 Nissan Rogue SV\" tab has an Interior field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasInterior(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2011 Nissan Rogue SV\" tab has an Engine field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasEngine(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2011 Nissan Rogue SV\" tab has an Odometer field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasOdometer(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2011 Nissan Rogue SV\" tab has a View Details button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.everyCarTabInTheListHasAViewDetailsButton(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryListDetailsTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify details of a car in the inventory list",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User sees the \"2010 Hyundai Santa Fe Sport\" tab in the inventory list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.userSeesTheTab(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2010 Hyundai Santa Fe Sport\" tab has a picture",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasPicture(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2010 Hyundai Santa Fe Sport\" tab has a price",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasPrice(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2010 Hyundai Santa Fe Sport\" tab has a Stock number field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasStockNumber(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2010 Hyundai Santa Fe Sport\" tab has a Transmission field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasTransmission(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2010 Hyundai Santa Fe Sport\" tab has a Fuel field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasFuel(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2010 Hyundai Santa Fe Sport\" tab has a Drivetrain field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasDrivetrain(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2010 Hyundai Santa Fe Sport\" tab has an Exterior field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasExterior(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2010 Hyundai Santa Fe Sport\" tab has an Interior field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasInterior(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2010 Hyundai Santa Fe Sport\" tab has an Engine field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasEngine(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2010 Hyundai Santa Fe Sport\" tab has an Odometer field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasOdometer(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2010 Hyundai Santa Fe Sport\" tab has a View Details button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.everyCarTabInTheListHasAViewDetailsButton(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventoryListDetailsTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify details of a car in the inventory list",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User sees the \"2009 Toyota RAV4 Base\" tab in the inventory list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.userSeesTheTab(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2009 Toyota RAV4 Base\" tab has a picture",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasPicture(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2009 Toyota RAV4 Base\" tab has a price",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasPrice(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2009 Toyota RAV4 Base\" tab has a Stock number field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasStockNumber(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2009 Toyota RAV4 Base\" tab has a Transmission field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasTransmission(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2009 Toyota RAV4 Base\" tab has a Fuel field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasFuel(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2009 Toyota RAV4 Base\" tab has a Drivetrain field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasDrivetrain(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2009 Toyota RAV4 Base\" tab has an Exterior field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasExterior(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2009 Toyota RAV4 Base\" tab has an Interior field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasInterior(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2009 Toyota RAV4 Base\" tab has an Engine field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasEngine(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2009 Toyota RAV4 Base\" tab has an Odometer field",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.verifyCarHasOdometer(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2009 Toyota RAV4 Base\" tab has a View Details button",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ListDetailsStepsDefinition.everyCarTabInTheListHasAViewDetailsButton(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/InventorySortingTest.feature");
formatter.feature({
  "name": "Inventory page sorting test",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventorySortingTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Sort cars by year",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User clicks Year in the Sort menu",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventorySortingStepsDefinition.userClicksYearInSortMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The inventory list sorted by year is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventorySortingStepsDefinition.verifyCarsSortedByYear()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventorySortingTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Sort cars by maker",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User clicks Make in the Sort menu",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventorySortingStepsDefinition.userClicksMakeInSortMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The inventory list sorted by maker is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventorySortingStepsDefinition.verifyCarsSortedByMaker()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventorySortingTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Sort cars by model",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User clicks Model in the Sort menu",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventorySortingStepsDefinition.userClicksModelInSortMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The inventory list sorted by model is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventorySortingStepsDefinition.verifyCarsSortedByModel()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventorySortingTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Sort cars by price",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User clicks Price in the Sort menu",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventorySortingStepsDefinition.userClicksPriceInSortMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The inventory list sorted by price is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventorySortingStepsDefinition.verifyCarsSortedByPrice()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventorySortingTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Sort cars by mileage",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User clicks Mileage in the Sort menu",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventorySortingStepsDefinition.userClicksMileageInSortMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The inventory list sorted by mileage is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventorySortingStepsDefinition.verifyCarsSortedByMileage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Select one filter and sorting order",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"\u003cengine\u003e\" in the Engine filter list",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks Year in the Sort menu",
  "keyword": "And "
});
formatter.step({
  "name": "Then Cars with \"\u003cengine\u003e\" only sorted by year are displayed in the inventory list",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "engine"
      ]
    },
    {
      "cells": [
        "4 Cylinder Engine"
      ]
    },
    {
      "cells": [
        "6 Cylinder Engine"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventorySortingTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select one filter and sorting order",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"4 Cylinder Engine\" in the Engine filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksEngine(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks Year in the Sort menu",
  "keyword": "And "
});
formatter.match({
  "location": "steps.InventorySortingStepsDefinition.userClicksYearInSortMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Then Cars with \"4 Cylinder Engine\" only sorted by year are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventorySortingStepsDefinition.thenCarsWithOnlySortedByYearAreDisplayedInTheInventoryList(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.InventoryPage.navigateToInventoryPage(InventoryPage.java:37)\r\n\tat steps.InventoryFiltersStepsDefinition.theInventoryPageIsOpen(InventoryFiltersStepsDefinition.java:20)\r\n\tat ✽.The Inventory page is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/InventorySortingTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Select one filter and sorting order",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"6 Cylinder Engine\" in the Engine filter list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.InventoryFiltersStepsDefinition.userClicksEngine(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks Year in the Sort menu",
  "keyword": "And "
});
formatter.match({
  "location": "steps.InventorySortingStepsDefinition.userClicksYearInSortMenu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Then Cars with \"6 Cylinder Engine\" only sorted by year are displayed in the inventory list",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.InventorySortingStepsDefinition.thenCarsWithOnlySortedByYearAreDisplayedInTheInventoryList(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/MainPageTest.feature");
formatter.feature({
  "name": "Navigation from the Main page test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Navigate the main menu and verify page URLs and components visibility",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"\u003cmenu\u003e\" menu",
  "keyword": "When "
});
formatter.step({
  "name": "Verify that \"\u003cmenu\u003e\" page URL is correct",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify that Right Way logo is displayed",
  "keyword": "And "
});
formatter.step({
  "name": "Verify that \"\u003cmenu\u003e\" page header is displayed",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "menu"
      ]
    },
    {
      "cells": [
        "Main"
      ]
    },
    {
      "cells": [
        "About us"
      ]
    },
    {
      "cells": [
        "Contact us"
      ]
    },
    {
      "cells": [
        "Inventory"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User navigates to the main page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.MainPageStepsDefinition.userNavigatesToTheMainPage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.MainPage.navigateToMainPage(MainPage.java:26)\r\n\tat steps.MainPageStepsDefinition.userNavigatesToTheMainPage(MainPageStepsDefinition.java:20)\r\n\tat ✽.User navigates to the main page(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/MainPageTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Navigate the main menu and verify page URLs and components visibility",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"Main\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "steps.MainPageStepsDefinition.userClicksMenu(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that \"Main\" page URL is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.MainPageStepsDefinition.verifyCurrentURL(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that Right Way logo is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.MainPageStepsDefinition.verifyRightWayLogo()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that \"Main\" page header is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.MainPageStepsDefinition.verifyPageHeader(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User navigates to the main page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.MainPageStepsDefinition.userNavigatesToTheMainPage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.MainPage.navigateToMainPage(MainPage.java:26)\r\n\tat steps.MainPageStepsDefinition.userNavigatesToTheMainPage(MainPageStepsDefinition.java:20)\r\n\tat ✽.User navigates to the main page(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/MainPageTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Navigate the main menu and verify page URLs and components visibility",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"About us\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "steps.MainPageStepsDefinition.userClicksMenu(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that \"About us\" page URL is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.MainPageStepsDefinition.verifyCurrentURL(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that Right Way logo is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.MainPageStepsDefinition.verifyRightWayLogo()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that \"About us\" page header is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.MainPageStepsDefinition.verifyPageHeader(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User navigates to the main page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.MainPageStepsDefinition.userNavigatesToTheMainPage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.MainPage.navigateToMainPage(MainPage.java:26)\r\n\tat steps.MainPageStepsDefinition.userNavigatesToTheMainPage(MainPageStepsDefinition.java:20)\r\n\tat ✽.User navigates to the main page(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/MainPageTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Navigate the main menu and verify page URLs and components visibility",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"Contact us\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "steps.MainPageStepsDefinition.userClicksMenu(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that \"Contact us\" page URL is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.MainPageStepsDefinition.verifyCurrentURL(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that Right Way logo is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.MainPageStepsDefinition.verifyRightWayLogo()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that \"Contact us\" page header is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.MainPageStepsDefinition.verifyPageHeader(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User navigates to the main page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.MainPageStepsDefinition.userNavigatesToTheMainPage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.MainPage.navigateToMainPage(MainPage.java:26)\r\n\tat steps.MainPageStepsDefinition.userNavigatesToTheMainPage(MainPageStepsDefinition.java:20)\r\n\tat ✽.User navigates to the main page(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/MainPageTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Navigate the main menu and verify page URLs and components visibility",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"Inventory\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "steps.MainPageStepsDefinition.userClicksMenu(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that \"Inventory\" page URL is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.MainPageStepsDefinition.verifyCurrentURL(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that Right Way logo is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.MainPageStepsDefinition.verifyRightWayLogo()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that \"Inventory\" page header is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.MainPageStepsDefinition.verifyPageHeader(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/ViewDetailsPageTest.feature");
formatter.feature({
  "name": "View details page test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify details of a car on the View Details page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks View Details button of the \"\u003ccar\u003e\" tab in the inventory list",
  "keyword": "When "
});
formatter.step({
  "name": "The main logo is displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "The \"\u003ccar\u003e\" header is displayed",
  "keyword": "And "
});
formatter.step({
  "name": "The price is displayed",
  "keyword": "And "
});
formatter.step({
  "name": "Pictures gallery is displayed",
  "keyword": "And "
});
formatter.step({
  "name": "The primary information section with it\u0027s fields is displayed",
  "keyword": "And "
});
formatter.step({
  "name": "The vehicle overview with it\u0027s fields is displayed",
  "keyword": "And "
});
formatter.step({
  "name": "The vehicle description is displayed",
  "keyword": "And "
});
formatter.step({
  "name": "The Features and options section is displayed",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "car"
      ]
    },
    {
      "cells": [
        "2011 Infiniti G37x Coupe S"
      ]
    },
    {
      "cells": [
        "2010 Dodge Grand Caravan SXT"
      ]
    },
    {
      "cells": [
        "2003 Dodge Ram 1500 SLT"
      ]
    },
    {
      "cells": [
        "2011 Nissan Rogue SV"
      ]
    },
    {
      "cells": [
        "2010 Hyundai Santa Fe Sport"
      ]
    },
    {
      "cells": [
        "2009 Toyota RAV4 Base"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page with cars list is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.DetailsPage.navigateToInventoryPage(DetailsPage.java:23)\r\n\tat steps.ViewDetailsStepsDefinition.theInventoryPageIsOpen(ViewDetailsStepsDefinition.java:23)\r\n\tat ✽.The Inventory page with cars list is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/ViewDetailsPageTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify details of a car on the View Details page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks View Details button of the \"2011 Infiniti G37x Coupe S\" tab in the inventory list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.userClicksViewDetailsButton(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The main logo is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.mainLogoDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2011 Infiniti G37x Coupe S\" header is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.headerDisplayed(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The price is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.thePriceDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Pictures gallery is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.picturesGalleryDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The primary information section with it\u0027s fields is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.primaryInformationDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The vehicle overview with it\u0027s fields is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.vehicleOverviewDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The vehicle description is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.vehicleDescriptionDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The Features and options section is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.featuresDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page with cars list is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.DetailsPage.navigateToInventoryPage(DetailsPage.java:23)\r\n\tat steps.ViewDetailsStepsDefinition.theInventoryPageIsOpen(ViewDetailsStepsDefinition.java:23)\r\n\tat ✽.The Inventory page with cars list is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/ViewDetailsPageTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify details of a car on the View Details page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks View Details button of the \"2010 Dodge Grand Caravan SXT\" tab in the inventory list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.userClicksViewDetailsButton(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The main logo is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.mainLogoDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2010 Dodge Grand Caravan SXT\" header is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.headerDisplayed(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The price is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.thePriceDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Pictures gallery is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.picturesGalleryDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The primary information section with it\u0027s fields is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.primaryInformationDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The vehicle overview with it\u0027s fields is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.vehicleOverviewDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The vehicle description is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.vehicleDescriptionDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The Features and options section is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.featuresDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page with cars list is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.DetailsPage.navigateToInventoryPage(DetailsPage.java:23)\r\n\tat steps.ViewDetailsStepsDefinition.theInventoryPageIsOpen(ViewDetailsStepsDefinition.java:23)\r\n\tat ✽.The Inventory page with cars list is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/ViewDetailsPageTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify details of a car on the View Details page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks View Details button of the \"2003 Dodge Ram 1500 SLT\" tab in the inventory list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.userClicksViewDetailsButton(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The main logo is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.mainLogoDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2003 Dodge Ram 1500 SLT\" header is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.headerDisplayed(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The price is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.thePriceDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Pictures gallery is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.picturesGalleryDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The primary information section with it\u0027s fields is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.primaryInformationDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The vehicle overview with it\u0027s fields is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.vehicleOverviewDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The vehicle description is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.vehicleDescriptionDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The Features and options section is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.featuresDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page with cars list is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.DetailsPage.navigateToInventoryPage(DetailsPage.java:23)\r\n\tat steps.ViewDetailsStepsDefinition.theInventoryPageIsOpen(ViewDetailsStepsDefinition.java:23)\r\n\tat ✽.The Inventory page with cars list is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/ViewDetailsPageTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify details of a car on the View Details page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks View Details button of the \"2011 Nissan Rogue SV\" tab in the inventory list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.userClicksViewDetailsButton(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The main logo is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.mainLogoDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2011 Nissan Rogue SV\" header is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.headerDisplayed(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The price is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.thePriceDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Pictures gallery is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.picturesGalleryDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The primary information section with it\u0027s fields is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.primaryInformationDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The vehicle overview with it\u0027s fields is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.vehicleOverviewDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The vehicle description is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.vehicleDescriptionDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The Features and options section is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.featuresDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page with cars list is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.DetailsPage.navigateToInventoryPage(DetailsPage.java:23)\r\n\tat steps.ViewDetailsStepsDefinition.theInventoryPageIsOpen(ViewDetailsStepsDefinition.java:23)\r\n\tat ✽.The Inventory page with cars list is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/ViewDetailsPageTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify details of a car on the View Details page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks View Details button of the \"2010 Hyundai Santa Fe Sport\" tab in the inventory list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.userClicksViewDetailsButton(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The main logo is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.mainLogoDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2010 Hyundai Santa Fe Sport\" header is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.headerDisplayed(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The price is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.thePriceDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Pictures gallery is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.picturesGalleryDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The primary information section with it\u0027s fields is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.primaryInformationDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The vehicle overview with it\u0027s fields is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.vehicleOverviewDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The vehicle description is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.vehicleDescriptionDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The Features and options section is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.featuresDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Inventory page with cars list is open",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.theInventoryPageIsOpen()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64614}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f46caecc6420dad6500ba580a70cbef5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor10.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat pages.DetailsPage.navigateToInventoryPage(DetailsPage.java:23)\r\n\tat steps.ViewDetailsStepsDefinition.theInventoryPageIsOpen(ViewDetailsStepsDefinition.java:23)\r\n\tat ✽.The Inventory page with cars list is open(file:///D:/Legion%20QA/Java/RightWayCucumberTest/src/test/resources/ViewDetailsPageTest.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify details of a car on the View Details page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks View Details button of the \"2009 Toyota RAV4 Base\" tab in the inventory list",
  "keyword": "When "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.userClicksViewDetailsButton(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The main logo is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.mainLogoDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The \"2009 Toyota RAV4 Base\" header is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.headerDisplayed(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The price is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.thePriceDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Pictures gallery is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.picturesGalleryDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The primary information section with it\u0027s fields is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.primaryInformationDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The vehicle overview with it\u0027s fields is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.vehicleOverviewDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The vehicle description is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.vehicleDescriptionDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The Features and options section is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.featuresDisplayed()"
});
formatter.result({
  "status": "skipped"
});
});