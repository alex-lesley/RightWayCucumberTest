package com.example;

import cucumber.api.DataTable;
import cucumber.api.java.en.*;

public class StepDefinitions {
    public Actionwords actionwords = new Actionwords();

    @Given("^The Inventory page is open$")
    public void theInventoryPageIsOpen() {
        actionwords.theInventoryPageIsOpen();
    }

    @Then("^Cars of the year \"(.*)\" only are displayed in the inventory list$")
    public void carsOfTheYearP1OnlyAreDisplayedInTheInventoryList(String p1) {
        actionwords.carsOfTheYearP1OnlyAreDisplayedInTheInventoryList(p1);
    }

    @When("^User selects maker \"(.*)\" from the makers list$")
    public void userSelectsMakerP1FromTheMakersList(String p1) {
        actionwords.userSelectsMakerP1FromTheMakersList(p1);
    }

    @Then("^Cars of the maker \"(.*)\" only are displayed in the inventory list$")
    public void carsOfTheMakerP1OnlyAreDisplayedInTheInventoryList(String p1) {
        actionwords.carsOfTheMakerP1OnlyAreDisplayedInTheInventoryList(p1);
    }

    @When("^User selects a body type \"(.*)\" from the body types list$")
    public void userSelectsABodyTypeP1FromTheBodyTypesList(String p1) {
        actionwords.userSelectsABodyTypeP1FromTheBodyTypesList(p1);
    }

    @Then("^Cars with body type \"(.*)\" only are displayed in the inventory list$")
    public void carsWithBodyTypeP1OnlyAreDisplayedInTheInventoryList(String p1) {
        actionwords.carsWithBodyTypeP1OnlyAreDisplayedInTheInventoryList(p1);
    }

    @When("^User selects year \"(.*)\" from the years list$")
    public void userSelectsYearP1FromTheYearsList(String p1) {
        actionwords.userSelectsYearP1FromTheYearsList(p1);
    }

    @Then("^Cars with the engine \"(.*)\" only are displayed in the inventory list$")
    public void carsWithTheEngineP1OnlyAreDisplayedInTheInventoryList(String p1) {
        actionwords.carsWithTheEngineP1OnlyAreDisplayedInTheInventoryList(p1);
    }

    @When("^User selects engine \"(.*)\" from the engines list$")
    public void userSelectsEngineP1FromTheEnginesList(String p1) {
        actionwords.userSelectsEngineP1FromTheEnginesList(p1);
    }

    @When("^User selects year 2012 from the years list$")
    public void userSelectsYear2012FromTheYearsList() {
        actionwords.userSelectsYear2012FromTheYearsList();
    }

    @When("^User selects body type SUV-Crossover from the body types list$")
    public void userSelectsBodyTypeSUVCrossoverFromTheBodyTypesList() {
        actionwords.userSelectsBodyTypeSUVCrossoverFromTheBodyTypesList();
    }

    @When("^User selects Mazda from the makers list$")
    public void userSelectsMazdaFromTheMakersList() {
        actionwords.userSelectsMazdaFromTheMakersList();
    }

    @Then("^Cars of the year 2012, with body type SUV-Crossover and of Mazda only are displayed in the inventory list$")
    public void carsOfTheYear2012WithBodyTypeSUVCrossoverAndOfMazdaOnlyAreDisplayedInTheInventoryList() {
        actionwords.carsOfTheYear2012WithBodyTypeSUVCrossoverAndOfMazdaOnlyAreDisplayedInTheInventoryList();
    }

    @When("^User clicks on the \"(.*)\" sorting order$")
    public void userClicksOnTheP1SortingOrder(String p1) {
        actionwords.userClicksOnTheP1SortingOrder(p1);
    }


    @When("^User selects 4 Cylinder Engine from engines list$")
    public void userSelects4CylinderEngineFromEnginesList() {
        actionwords.userSelects4CylinderEngineFromEnginesList();
    }

    @When("^User chooses sorting order by year$")
    public void userChoosesSortingOrderByYear() {
        actionwords.userChoosesSortingOrderByYear();
    }

    @Then("^Cars with 4 Cylinder Engine only and sorted by year are displayed in the inventory list$")
    public void carsWith4CylinderEngineOnlyAndSortedByYearAreDisplayedInTheInventoryList() {
        actionwords.carsWith4CylinderEngineOnlyAndSortedByYearAreDisplayedInTheInventoryList();
    }

    @Then("^The inventory list sorted by \"(.*)\" is displayed$")
    public void theInventoryListSortedByP1IsDisplayed(String p1) {
        actionwords.theInventoryListSortedByP1IsDisplayed(p1);
    }
}