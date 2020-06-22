Feature: Navigation from the Main page test

  Background:
    Given User navigates to the main page

  Scenario Outline: Navigate the main menu and verify page URLs and components visibility
    When User clicks "<menu>" menu
    Then Verify that "<menu>" page URL is correct
    And Verify that Right Way logo is displayed
    And Verify that "<menu>" page header is displayed
    Examples:
      | menu       |
      | Main       |
      | About us   |
      | Contact us |
      | Inventory  |