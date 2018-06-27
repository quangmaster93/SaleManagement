import React, { Component } from 'react';
import NavigationService from "./app/services/NavigationService";
import createSwitchNavigator from './app/routes/AuthenticationSwitch'

const TopLevelNavigator = createSwitchNavigator;

export default class MainApp extends React.Component {
    render() {
        return (
            <TopLevelNavigator
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
        );
    }
}