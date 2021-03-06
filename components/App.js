/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Linking,
  Button
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import {ManualInput} from './manInput'
import {Entry} from './entry'
import {Confirmation} from './Confirmation'
import {QrCamera} from './camera'
import {Settings} from './Settings'
import {Checkin} from './Checkin'
import {nfc} from './nfc'
import {eventnfc} from './event_nfc'
import {Events} from './Event'

const cumin = StackNavigator({
  Home: { screen: Entry },
  QrCamera: {screen: QrCamera},
  Confirmation: {screen: Confirmation},
  Manual: {screen: ManualInput},
  Settings: {screen: Settings, mode:'modal'},
  Checkin: {screen: Checkin},
  NFC: {screen: nfc},
  Eventnfc: {screen: eventnfc},
  Event: {screen: Events}

});



AppRegistry.registerComponent('cumin', () => cumin);
