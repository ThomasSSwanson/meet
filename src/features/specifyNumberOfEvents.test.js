import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from "../NumberOfEvents";
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When a user hasn’t specified a number, default number of events is 15', ({ given, when, then }) => {
    let AppWrapper;
    let NumberOfEventsWrapper;
    given('user hasn’t specified number of events to show', () => {
      AppWrapper = mount(<App />);
    });

    when('the user opens up the app', () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents number={15} />);
    });

    then('the user should see at least 15 upcoming events', () => {
      expect(NumberOfEventsWrapper.state('eventListSize')).toBe(15);
      expect((AppWrapper.find('.event-container')).length).toBeLessThanOrEqual(15);
    });

  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    let NumberOfEventsWrapper;
    given('list of upcoming events loaded on page by default', () => {
      AppWrapper = mount(<App />);
    });

    when('user uses filter to change number of events shown', () => {
      AppWrapper.find('.number').simulate('change', { target: { value: 2 } });
    });

    then('the user will see the number of events that they chose to filter list by', () => {
      NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state('eventListSize')).toBe(2)
    });

  });

});