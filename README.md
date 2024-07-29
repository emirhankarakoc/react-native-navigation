# React Native Navigation Guide
## Overview
This guide covers how to navigate between screens using React Native Navigation. We will go through configuring navigation stacks, handling state transitions, and managing different navigators.

## Navigation Between Screens
### 1. Adding New Routes
Navigate to the navigator folder and add a new line to AppNavigator.js.
In React, you use window.location.href = "/endpoint" to redirect to a specific endpoint. In React Native Navigation, we use name and element parameters instead of path and component.
Replace name with your desired screen name (not an endpoint).
### 2. Handling Navigation State
To handle navigation state, use the {{navigation}} prop in your components (similar to how it’s done in `HomeScreen.js` and `SecondScreen.js`).
### 3. Navigating on Click
For navigation actions in event handlers, use navigation.navigate('ScreenName') to navigate to the desired screen.
## Navigating Between Different Stacks
### 1. Setting Up Multiple Navigators
Create separate navigators such as `AppNavigator.js` and `AuthNavigator.js`<br>
In `RootNavigator.js`, define names for these navigators and manipulate the initialRouteName to switch between them based on authentication status (e.g., show the app navigator if a token exists, otherwise show the auth navigator).
### 2. Managing Navigation Reset
When resetting navigation (e.g., after login), use navigation.reset without altering the index.<br>
In the routes array, place the navigator as the first parameter and the screen name as the second parameter, then perform the reset.
## Acknowledgments

This repository has been updated and enhanced thanks to Mr.YAKUP , a Computer Engineering student at Pamukkale University, who has contributed significantly to its development as of June 2024. Without his contributions, this repository would be in a much less polished state.


Feel free to customize further if there are additional details or sections you’d like to include!



