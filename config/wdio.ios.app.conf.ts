import { join } from "path";
import {config} from "./wdio.shared.local.appium.conf";

config.specs = ["./tests/specs/**/app*.spec.ts"];

config.capabilities = [
    {
        platformName: "iOS",
        maxInstances: 1,
        "appium:deviceName": "iPhone 13",
        "appium:platformVersion": "15.4",
        "appium:orientation": "PORTRAIT",
        "appium:automationName": "XCUITest",
        "appium:app": join(
            process.cwd(),
            "./apps/iOS-Simulator-NativeDemoApp-0.4.0.app.zip"
        ),
        "appium:newCommandTimeout": 240,
    },
];

exports.config = config;