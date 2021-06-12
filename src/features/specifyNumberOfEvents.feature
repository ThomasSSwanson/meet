Feature: Filter the number of events listed

  Scenario: When a user hasn’t specified a number, default number of events is 15
    Given user hasn’t specified number of events to show
    When the user opens up the app
    Then the user should see at least 15 upcoming events

  Scenario: User can change the number of events they want to see
    Given list of upcoming events loaded on page by default
    When user uses filter to change number of events shown
    Then the user will see the number of events that they chose to filter list by