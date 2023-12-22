import { config as sharedConfig } from './wdio.shared.conf.js'
import path from 'node:path'
import url from 'node:url'

const __dirname = url.fileURLToPath(new URL('..', import.meta.url))

sharedConfig.specs = ['../test/web/specs/**/*.ts'];
sharedConfig.baseUrl = "http://the-internet.herokuapp.com";
sharedConfig.logLevel = 'trace';
sharedConfig.outputDir = path.resolve(__dirname, 'logs');

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        capabilities: [{
            browserName: 'chrome',
            'wdio:devtoolsOptions': {
                headless: true
            }
        }],
    }
}
