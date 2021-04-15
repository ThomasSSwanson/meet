# meet

Meet is an app that takes a city and displays upcoming events in that city as well as information graphs about how popular event wise a city is.



Scenario 1: An event element is collapsed by default

	as a user,
	I should be able to view collapsed events
	So that I can navigate easier and see more events

	Given the user hasn't opened any event
	When user looks at list of events
	Then they should see a list of collapsed events

Scenario 2: User can expand an event to see its details

	as a user,
	I should be able to expand a collapsed event
	So that I can view specific details about that event

	Given a list of collapsed events
	When the user clicks on "Details" on a collapsed event
	Then the event expands giving the user more information about the event

Scenario 3: User can collapse an event to hide its details
	
	as a user,
	I should be able to collapse an event I'm done looking at
	So that I can view other collapsed events easily and keep searching

	Given an expanded event
	When the user hits "close event" or clicks out of the event
	Then the event should collapse 

FEATURE 3: SPECIFY NUMBER OF EVENTS

Scenario 1: When user hasn’t specified a number, 32 is the default number

	as a user,
	I should be able to view a default number of events,  default being 32
	So that I can easily choose an event to look at without clutter

	Given a list of events
	When the user is looking at the list of events and didn't specify how many displays on a page
	Then display 32 events on the page

Scenario 2: User can change the number of events they want to see

	as a user,
	I should be able to change the number of events I want to see at a time
	So that I don't get overwhelmed with clutter

	Given a list of events
	When user changes number of events to be listed
	Then change number of events listed to specified number

FEATURE 4: USE THE APP WHEN OFFLINE

Scenario 1: Show cached data when there’s no internet connection

	as a user,
	I should be able to browse some things offline
	So that I don't get bored when the internet goes out

	Given no internet
	When the user loses internet connection
	Then take the cached data and display what we can from that information

Scenario 2: Show error when user changes the settings (city, time range)

	as a user,
	I should be able to recieve an error if I am offline and try to change the settings
	So that I realize I am offline and to not change the settings

	Given the user was trying to change settings while offline
	When the user changes the settings
	Then display an error to the user saying they are offline and to not change the settings

FEATURE 5: DATA VISUALIZATION

Scenario 1: Show a chart with the number of upcoming events in each city

	as a user,
	I should be able to view a chart with the number of upcoming events in each city
	So that I can see how popular a city is and plan

	Given the user was looking at upcoming events
	When the user selects a city
	Then display a chart showing the number of upcoming events in that city
