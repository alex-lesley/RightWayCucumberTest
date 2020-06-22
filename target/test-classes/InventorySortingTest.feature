Feature: Inventory page sorting test

  Background:
    Given The Inventory page is open

  Scenario: Sort cars by year
    When User clicks Year in the Sort menu
    Then The inventory list sorted by year is displayed

  Scenario: Sort cars by maker
    When User clicks Make in the Sort menu
    Then The inventory list sorted by maker is displayed

  Scenario: Sort cars by model
    When User clicks Model in the Sort menu
    Then The inventory list sorted by model is displayed

  Scenario: Sort cars by price
    When User clicks Price in the Sort menu
    Then The inventory list sorted by price is displayed

  Scenario: Sort cars by mileage
    When User clicks Mileage in the Sort menu
    Then The inventory list sorted by mileage is displayed

  Scenario Outline: Select one filter and sorting order
    When User clicks "<engine>" in the Engine filter list
    And User clicks Year in the Sort menu
    Then Then Cars with "<engine>" only sorted by year are displayed in the inventory list
    Examples:
      | engine            |
      | 4 Cylinder Engine |
      | 6 Cylinder Engine |