Feature: Inventory list details test

  Background:
    Given The Inventory page is open

  Scenario Outline: Verify details of a car in the inventory list
    When User sees the "<car>" tab in the inventory list
    Then The "<car>" tab has a picture
    And The "<car>" tab has a price
    And The "<car>" tab has a Stock number field
    And The "<car>" tab has a Transmission field
    And The "<car>" tab has a Fuel field
    And The "<car>" tab has a Drivetrain field
    And The "<car>" tab has an Exterior field
    And The "<car>" tab has an Interior field
    And The "<car>" tab has an Engine field
    And The "<car>" tab has an Odometer field
    And The "<car>" tab has a View Details button
    Examples:
      | car                          |
      | 2011 Infiniti G37x Coupe S   |
      | 2010 Dodge Grand Caravan SXT |
      | 2003 Dodge Ram 1500 SLT      |
      | 2011 Nissan Rogue SV         |
      | 2010 Hyundai Santa Fe Sport  |
      | 2009 Toyota RAV4 Base        |