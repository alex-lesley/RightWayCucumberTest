Feature: View details page test

  Background:
    Given The Inventory page with cars list is open

  Scenario Outline: Verify details of a car on the View Details page
    When User clicks View Details button of the "<car>" tab in the inventory list
    Then The main logo is displayed
    And The "<car>" header is displayed
    And The price is displayed
    And Pictures gallery is displayed
    And The primary information section with it's fields is displayed
    And The vehicle overview with it's fields is displayed
    And The vehicle description is displayed
    And The Features and options section is displayed

    Examples:
      | car                          |
      | 2011 Infiniti G37x Coupe S   |
      | 2010 Dodge Grand Caravan SXT |
      | 2003 Dodge Ram 1500 SLT      |
      | 2011 Nissan Rogue SV         |
      | 2010 Hyundai Santa Fe Sport  |
      | 2009 Toyota RAV4 Base        |