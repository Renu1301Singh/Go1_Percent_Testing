# End to End Front-end Automation with automating existing test cases for the Go1Percent platform using NightwatchJS.


## Objective
Automate existing test cases documented on the "https://testlink.knoldus.com/".


## Overview

>This repository contains automated test scripts for Go1 Percent platofrm using nighwatch.js,
>a popular end-to-end testing framework, and follows the Page Object Model (POM) design
>pattern for better maintainability and readability of test code automation scripts.



## Requirements

- Node.js (v12.x or later)
- Nightwatch.js
- WebDriver (ChromeDriver, GeckoDriver, etc.)

## Project Structure

```sh
Go1_Percent_Testing/
│
├── page-objects/          # Page Object Model (POM) directory
│   ├── logInpage.js       # Page object for login page
│   └──DashboardPage.js    # Page Object for Dashboard Page
│
│
├── test/                  # Test scripts directory
│   ├── Tests.js           # Test scripts LogIn Page Test cases
│   └── DashboadTest.js    # Test Script Dashboard Test cases of "My Dashboard"
│   └── ...
│
├── testoutput
│
│
├── nightwatch.conf.js     # Nightwatch configuration file
└── package-lock.json          
└── package.json           # Node.js dependencies and scripts




