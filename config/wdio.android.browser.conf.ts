import {config} from './wdio.shared.local.appium.conf';

config.specs = [
    './tests/specs/**/browser*.spec.ts',
];

config.capabilities = [
    {
        platformName: 'Android',
        browserName: 'chrome',
        maxInstances: 1,
        'appium:deviceName': 'Pixel_3_10.0',
        'appium:platformVersion': '10.0',
        'appium:orientation': 'PORTRAIT',
        'appium:newCommandTimeout': 240,
    },
];

exports.config = config;