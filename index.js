"use strict";

import { NativeModules } from 'react-native';

const RNAppsee = NativeModules.RNAppsee;

const ReactNativeAppsee = {
    addEvent: function addEvent(eventName){
        RNAppsee.addEvent(eventName);
    },
    startScreen: function startScreen(screenName) {
        RNAppsee.startScreen(screenName);
    }
}

module.exports = ReactNativeAppsee;
