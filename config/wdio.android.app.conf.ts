import { join } from 'path';
import {config as sharedConfig} from "./wdio.shared.local.appium.conf.js";

sharedConfig.specs = [
    '../test/mobile/specs/app.DRAFT.spec.ts',
];

sharedConfig.baseUrl = 'http://localhost';

sharedConfig.capabilities = [
    {
        platformName: 'Android',
        maxInstances: 1,
        'appium:deviceName': 'Pixel 3',
        'appium:platformVersion': '11.0',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        'appium:app': join(process.cwd(), 'app\\Android-MyDemoAppRN.1.3.0.build-244.apk'),
        // @ts-ignore
        'appium:appWaitActivity': 'com.saucelabs.mydemoapp.rn.MainActivity',
        'appium:newCommandTimeout': 240,
    },
];

export const config: WebdriverIO.Config = {
    ...sharedConfig
}