import { config as sharedConfig } from "./wdio.shared.conf.js";

sharedConfig.logLevel = 'info';
sharedConfig.services = (sharedConfig.services ? sharedConfig.services : []).concat([
    [
        "appium",
        {
            // This will use the globally installed version of Appium
            command: "appium",
            args: {
                address: "localhost",
                relaxedSecurity: true,
              },
            logPath: "./",
        },
    ],
]);

sharedConfig.port = 4723;

export const config: WebdriverIO.Config = {
    ...sharedConfig
}