# Themely

A simple package for adding dark and light theme mode to web, electron and NW.js with almost any framework

- [Install](#install)
- [Setup](#setup)
  - [Build Your Own](#setup)
  - [Download for Themely App](https://deepp0925.github.io/Themely-App/)
- [Usage](#usage)

# Install

`npm install --save themely`

# Setup

## Build your own CSS file

1. Create and import css file
2. Insert the following lines of code in that file

   ```
   body[data-theme="dark"] .Themed-Text {
   	color: #fff;
   }

   body[data-theme="light"] .Themed-Text {
   	color: #000;
   }
   ```

   Class selector name, Themed-Text in this case, must be the same for both dark and light theme but the rules can be different, color in this case.

   You can replace Themed-Text with your own class selector name

## Download from Themely App

The easiest way to do this by using the [Themely App](https://deepp0925.github.io/Themely-App/) and downloading the css file

# Usage

1. ```
   // class Themed-Text comes from class selector name used in css file
   ...
   <h1 class="Themed-Text">Header</h1>
   ...
   ```

2. `import {Theme} from 'themely'`

3. ```
   // Somewhere in your app
   ...
   Theme.setTheme('dark' | 'light'); // sets the theme to dark or light mode
   ...

   // get current theme
   Theme.getTheme(); // returns 'dark' or 'light'

   // toggle theme
   Theme.toggleTheme();
   ```
