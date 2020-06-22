Feature: Right Way Autosale - Inventory page filters test


  Background:
    Given The Inventory page is open

  Scenario Outline: User selects a year from the list
    When User selects year "<year>" from the years list
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
      | 2009 |
      | 2008 |
      | 2007 |
      | 2006 |
      | 2005 |
      | 2004 |
      | 2003 |

  Scenario Outline: User selects a body type from the list
    When User selects a body type "<body_type>" from the body types list
    Then Cars with body type "<body_type>" only are displayed in the inventory list

    Examples:
      | body_type |
      | Sedan |
      | SUV-Crossover |
      | Wagon |
      | Coupe-2-Door |
      | Truck |
      | Pickup-Truck |

  Scenario Outline: User selects a maker from the list
    When User selects maker "<maker>" from the makers list
    Then Cars of the maker "<maker>" only are displayed in the inventory list

    Examples:
      | maker |
      | Chrysler |
      | Ford |
      | Mazda |
      | Volvo |
      | Kia |
      | Nissan |
      | Subaru |
      | Hyundai |
      | Volkswagen |
      | Toyota |
      | Dodge |

  Scenario Outline: User selects an engine from the list
    When User selects engine "<engine>" from the engines list
    Then Cars with the engine "<engine>" only are displayed in the inventory list

    Examples:
      | engine |
      | 4 Cylinder Engine |
      | 6 Cylinder Engine |
      | 8 Cylinder Engine |

  Scenario: User selects a year, maker and body type
    When User selects year 2012 from the years list
    And User selects body type SUV-Crossover from the body types list
    And User selects Mazda from the makers list
    Then Cars of the year 2012, with body type SUV-Crossover and of Mazda only are displayed in the inventory list

  Scenario Outline: User chooses a sorting order
    When User clicks on the "<sorting_order>" sorting order
    Then The inventory list sorted by "<sorting_order>" is displayed

    Examples:
      | sorting_order |
      | Year |
      | Make |
      | Model |
      | Price |
      | Mileage |

  Scenario: User selects one filter and chooses a sorting order
    When User selects 4 Cylinder Engine from engines list
    And User chooses sorting order by year
    Then Cars with 4 Cylinder Engine only and sorted by year are displayed in the inventory list
