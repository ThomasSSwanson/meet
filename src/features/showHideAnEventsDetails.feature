Feature: Expand and collapse details for an event

  Scenario: An event element is collapsed by default
    Given user hasn’t opened/clicked for further details about each event shown
    When the user opens the app to see list of events with basic information
    Then the user can see all events without extraneous information in the viewport

  Scenario: User can expand an event to see its details
    Given user sees list of events
    When the user clicks on expand button
    Then the user can see more details about a certain event

  Scenario: User can collapse an event to hide its details
    Given user opened further details about event
    When user must click the collapse button
    Then the user can see a list of events without the expanded details open