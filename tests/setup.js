import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';

global.net = require('net');

jest.mock('react-native-watch-connectivity', () => {
  return {
    getIsWatchAppInstalled: jest.fn(),
    subscribeToMessages: jest.fn(),
    updateApplicationContext: jest.fn(),
  };
});

jest.mock('react-native-quick-actions', () => {
  return {
    clearShortcutItems: jest.fn(),
    setQuickActions: jest.fn(),
    isSupported: jest.fn(),
  };
});

jest.mock('react-native-default-preference', () => {
  return {
    setName: jest.fn(),
    set: jest.fn(),
  };
});

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
