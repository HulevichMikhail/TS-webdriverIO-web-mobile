WebdriverIO boilerplate Web/Mobile
===================

This boilerplate allows to run WebdriverIO tests: WEB and mobile (Android. iOS) using Mocha and the page objects pattern.

## Features and purposes

- Page Object pattern used
- Allows to run mobile and web tests from one place
- Verify that the UI is working correctly
- Verify that user can navigate through UI pages
- Verify that UI elements are displayed

# Mandatory setup

1. NodeJS (v20.2.0)
2. Java JDK (v19.0.2) + set JAVA_HOME path as system variables

# Setup for android testing

1. Android studio + set ANDROID_HOME path as system variables
2. Download Appium inspector - https://github.com/appium/appium-inspector
3. Run `npm install`
4. Check the installation `appium –v`, if there are security problems, check your policy in powershell using command `Get-ExecutionPolicy` and the command `Set-ExecutionPolicy unrestricted` to set unrestricted mode
6. Run `appium doctor –-android`, if something from the 'necessary dependencies' is missing, then install it. If apkanalyzer.bat is missing, install it from Tools-SDK manager-open tab SDK tools-Android SDK command-line-tools
7. Create any virtual device in android studio
8. In your IDE check that uiautomator2 driver is installed, using command `appium driver list`

# How to run tests

- Web - To execute tests in local browser run `npm run test:web`
- Mobile - Start appium server `appium –p 4723`, launch virtual device, run `npm run test:android`
- Report - To view test report run `npm run test:report`

# AllureStep function examples

In boilerplate used the `allureStep` function to add steps to the report: 
1. The page `/test/web/pages/form.page.ts` demonstrates how to use *allureStep* function and page object pattern
2. The test `/test/web/specs/form.spec.ts` demonstrates how to use *allureStep* function for any assertions in test file.  
!Note - For Page Object, where page objects are represented by classes, it is generally recommended to use assertions in test files, not in page classes.

## Stack

1. Javascript, typescript
2. webdriver.io - interactions with browser
3. Allure - reporting solution

## Project structure
```
/config - configuration
   This boilerplate uses a specific config for Web, iOS, Android.
   The configs are based on a shared config wdio.shared.conf.ts.
/helper - helper functions
/reports - folder for reports
/test - 
  /pages - page objects and page components
  /specs - tests
```
