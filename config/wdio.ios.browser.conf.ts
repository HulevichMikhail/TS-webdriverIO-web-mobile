import {config} from './wdio.shared.local.appium.conf';

config.specs = [
    './tests/specs/**/browser*.spec.ts',
];

config.capabilities = [
    {
        browserName: 'safari',
        platformName: 'iOS',
        maxInstances: 1,
        'appium:deviceName': 'iPhone 12',
        'appium:platformVersion': '14.5',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'XCUITest',
        'appium:newCommandTimeout': 240,
    },
];

exports.config = config;