Feature: Inventory page filters test

  Background:
    Given The Inventory page is open

  Scenario Outline: Select the Year filter
    When User clicks "<year>" in the Year filter list
    Then Cars of the year "<year>" only are displayed in the inventory list
    Examples:
      | year |
      | 2014 |
      | 2013 |
      | 2012 |
      | 2011 |
      | 2010 |
      | 2009 |
      | 2008 |
#      | 2007 |
#      | 2006 |
#      | 2005 |
#      | 2004 |
      | 2003 |

  Scenario Outline: Select the Body type filter
    When User clicks "<type>" in the Body type filter list
    Then Cars with the body type "<type>" only are displayed in the inventory list
    Examples:
      | type          |
      | Sedan         |
      | SUV-Crossover |
      | Coupe-2-Door  |
      | Wagon         |
      | Minivan-Van   |
#      | Truck         |
      | Pickup-Truck  |

  Scenario Outline: Select the Maker filter
    When User clicks "<maker>" in the Make filter list
    Then Cars of the "<maker>" only are displayed in the inventory list
    Examples:
      | maker      |
      | Chrysler   |
      | Ford       |
      | Mazda      |
      | Volvo      |
      | Kia        |
      | Nissan     |
      | Infiniti   |
      | Subaru     |
      | Volkswagen |
      | Hyundai    |
      | Dodge      |
      | Toyota     |

  Scenario Outline: Select an Engine filter
    When User clicks "<engine>" in the Engine filter list
    Then Cars with the "<engine>" only are displayed in the inventory list
    Examples:
      | engine            |
      | 4 Cylinder Engine |
      | 6 Cylinder Engine |
      | 8 Cylinder Engine |

  Scenario Outline: Select three filters at the same time
    When User clicks "<year>" in the Year filter list
    And User clicks "<body>" in the Body type filter list
    And User clicks "<maker>" in the Make filter list
    Then Cars of the "<year>", with body type "<body>" and of "<maker>" only are displayed in the inventory list
    Examples:
      | year | body          | maker |
      | 2012 | SUV-Crossover | Mazda |
      | 2011 | Sedan         | Kia   |

  Scenario: Verify that every year, visible in Year filter list, could be chosen and display results
    Then User clicks every year, visible in Year filter list, and gets result

  Scenario: Verify that every body type, visible in Body types filter list, could be chosen and display results
    Then User clicks every type, visible in Body type filter list, and gets result

  Scenario: Verify that every maker, visible in Make filter list, could be chosen and display results
    Then User clicks every maker, visible in Make filter list, and gets result

  Scenario: Verify that every engine, visible in Engine filter list, could be chosen and display results
    Then User clicks every engine, visible in Engine filter list, and gets result