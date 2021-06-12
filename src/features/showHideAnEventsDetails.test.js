import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import { loadFeature, defineFeature } from 'jest-cucumber';


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppWrapper;
    given('user hasn’t opened/clicked for further details about each event shown', () => {
      AppWrapper = mount(<App />);
    });

    when('the user opens the app to see list of events with basic information', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event-container')).toHaveLength(mockData.length);
    });

    then('the user can see all events without extraneous information in the viewport', () => {
      expect(AppWrapper.find('.event-details')).toHaveLength(0);
    });
  });


  test('User can expand an event to see its details', ({ given, when, then }) => {
    let AppWrapper;
    AppWrapper = mount(<App />);
    given('user sees list of events', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event-container')).toHaveLength(mockData.length);
    });

    when('the user clicks on expand button', () => {
      AppWrapper.find('.event-container .show-hide-btn').at(0).simulate('click');
    });

    then('the user can see more details about a certain event', () => {
      expect(AppWrapper.find('.event-container .event-details')).toHaveLength(1);
    });
  });


  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    let AppWrapper;
    AppWrapper = mount(<App />);
    given('user opened further details about event', () => {
      AppWrapper.update();
      AppWrapper.find('.event-container .show-hide-btn').at(0).simulate('click');
      expect(AppWrapper.find('.event-container .event-details')).toHaveLength(1);
    });

    when('user must click the collapse button', () => {
      AppWrapper.find('.event-container .show-hide-btn').at(0).simulate('click');
    });

    then('the user can see a list of events without the expanded details open', () => {
      expect(AppWrapper.find('.event-details')).toHaveLength(0);
    });
  });
})