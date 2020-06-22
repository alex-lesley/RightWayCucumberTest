$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/ViewDetailsPageTest.feature");
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
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "The main logo is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.mainLogoDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The \"2011 Infiniti G37x Coupe S\" header is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.headerDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The price is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.thePriceDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pictures gallery is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.picturesGalleryDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The primary information section with it\u0027s fields is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.primaryInformationDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The vehicle overview with it\u0027s fields is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.vehicleOverviewDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The vehicle description is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.vehicleDescriptionDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Features and options section is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.featuresDisplayed()"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "The main logo is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.mainLogoDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The \"2010 Dodge Grand Caravan SXT\" header is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.headerDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The price is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.thePriceDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pictures gallery is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.picturesGalleryDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The primary information section with it\u0027s fields is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.primaryInformationDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The vehicle overview with it\u0027s fields is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.vehicleOverviewDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The vehicle description is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.vehicleDescriptionDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Features and options section is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.featuresDisplayed()"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "The main logo is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.mainLogoDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The \"2003 Dodge Ram 1500 SLT\" header is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.headerDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The price is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.thePriceDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pictures gallery is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.picturesGalleryDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The primary information section with it\u0027s fields is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.primaryInformationDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The vehicle overview with it\u0027s fields is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.vehicleOverviewDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The vehicle description is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.vehicleDescriptionDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Features and options section is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.featuresDisplayed()"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "The main logo is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.mainLogoDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The \"2011 Nissan Rogue SV\" header is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.headerDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The price is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.thePriceDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pictures gallery is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.picturesGalleryDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The primary information section with it\u0027s fields is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.primaryInformationDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The vehicle overview with it\u0027s fields is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.vehicleOverviewDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The vehicle description is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.vehicleDescriptionDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Features and options section is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.featuresDisplayed()"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "The main logo is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.mainLogoDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The \"2010 Hyundai Santa Fe Sport\" header is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.headerDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The price is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.thePriceDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pictures gallery is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.picturesGalleryDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The primary information section with it\u0027s fields is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.primaryInformationDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The vehicle overview with it\u0027s fields is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.vehicleOverviewDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The vehicle description is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.vehicleDescriptionDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Features and options section is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.featuresDisplayed()"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "The main logo is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.mainLogoDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The \"2009 Toyota RAV4 Base\" header is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.headerDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The price is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.thePriceDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pictures gallery is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.picturesGalleryDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The primary information section with it\u0027s fields is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.primaryInformationDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The vehicle overview with it\u0027s fields is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.vehicleOverviewDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The vehicle description is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.vehicleDescriptionDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Features and options section is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ViewDetailsStepsDefinition.featuresDisplayed()"
});
formatter.result({
  "status": "passed"
});
});