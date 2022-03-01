---
sidebar_position: 1
id: introduction
title: Introduction
slug: /
---

# How to get started with Undetectable

Undetectable is an anti-detect browser for secure business and anonymous web surfing on the Internet. Powered by Chromium, it provides users with a set of tools to protect their privacy and automate their content experience. Undetectable is growing rapidly, expanding functionality and possibilities on a daily basis.

If you want to try it in action, this manual will be your helper.

Important: Use your license name and password to log in to the program.

## Undetectable Advantages

The program surpasses other anti-detect browsers with functionality, offering unique tools for work.

The functionality includes a bot designed to “warm up” your profile and work on several scenarios that you can configure at your discretion, put them on pause and resume, as well as adjust the work with the tabs and their amount. This makes it much easier to do activity and surfing on websites, and prepares them for account registration.

In addition, the browser allows you to create an unlimited number of profiles with flexible individual configurations, including by generating them in a mass one-click. The profiles can be conveniently sorted using the tagging system.

There is also an account manager with which you can configure the storage of registration data, and import/export them in .tsv format.

There is a proxy manager that works in HTTPS or Socks5 modes, and also the ability to change your geolocation.



## Registering and purchasing a license

In order to start using the anti-detect browser, the first thing you need to do is register an account to get a license. Go to https://app.undetectable.io , and fill in the registration fields: enter your login, mail and set a password. Then you get an e-mail with a code to verify the account.

![Docusaurus logo](/img/docusaurus.png)

Now you have to choose one of the license types, depending on your preference.

Check the price list here.

Several tariffs are available:

- **Starter** – 75$/mo: 2 users and 20 free configs.
- **Team** – $169/mo: 5 users and 30 free configs.
- **Business** – $299/mo: 10 users and 50 free configs.
- **Custom.** Plans include 10 users + $25 each additional user: 10 users – $299 + each user 25% = $234. This plan can be activated from 11 users and more.

You can also buy the plan for 6 months or 12 months and get a discount. In the first case, it is 15% off the total, in the second – 30%.

It is worth noting that the license is not bound to some precise device. You can use it on different PCs. However the amount of simultaneously launched copies can be limited in this case.

![Docusaurus logo](/img/docusaurus.png)

When you have chosen the option you want, click on the purchase button and go to the shopping cart to check out.

After you choose a rate, the payment window will open. Payment by Visa and Mastercard is currently available.

For other payment methods, write to us in Telegram Support:  t.me/UndetectableBot 

![Docusaurus logo](/img/docusaurus.png)

## Create a license password

When the license is purchased, you must set a password to confirm it. This information will be needed to log in to the browser.

![Docusaurus logo](/img/docusaurus.png)

Please note: the license username and password are not the same as the account username and password.In this case, the login is the name of your license.

Select your license and click the “View” button. After that, enter your password.

![Docusaurus logo](/img/docusaurus.png)

## Installing Undetectable Browser

Go to to <a href="https://undetectable.io/download/installer/installer_x64_win.exe"> download the browser </a> if you have a Windows-based device, <a href="https://undetectable.io/download/installer/installer_x64_mac.dmg"> or </a> if you have macOS.

Or click “Download” in the page menu.

![Docusaurus logo](/img/docusaurus.png)

We will show the installation using Windows 10 as an example.
Run the file “installer_x64_win.exe, click Next

![Docusaurus logo](/img/docusaurus.png)

Add a shortcut to the desktop (optional), install the additional functionality vs_redist_x64:

![Docusaurus logo](/img/docusaurus.png)

Read and accept the license agreement:

![Docusaurus logo](/img/docusaurus.png)

Enter a name to create the folder with the program (the default is Undetectable, so leave it that way)

![Docusaurus logo](/img/docusaurus.png)

Depending on the distribution version, the installer will need to download update files from the server, click Install.

![Docusaurus logo](/img/docusaurus.png)

If you do not have the Microsoft Visual C++ component installed, Click Next and wait for installation. In our case, the component is already installed, so we skip this step.

Browser installation is complete! Click Next

![Docusaurus logo](/img/docusaurus.png)

## First launch, authorization

Launch the Undetecteble shortcut, the login menu will open. You must enter the login assigned in step 3 and the password you set. The authorization window looks like this:

![Docusaurus logo](/img/docusaurus.png)

## Starting Work

### Creation of the first profile for work, tab “profile settings”

To create the first profile to work with, you must click on “Plus” in the browser menu:

![Docusaurus logo](/img/docusaurus.png)

After that the browser workspace will be divided into 4 parts:

1. Menu
2. License term information, list of profiles
3. Setting up a new profile
4. Profile information for the profile you are creating

![Docusaurus logo](/img/docusaurus.png)

Fill in the profile settings:

- Profile name
- Configuration (the minimum license has 20 available)
- Operating system
- Browser
- Custom User Agent as needed
- Screen Size
- Main language and additional language if needed

![Docusaurus logo](/img/docusaurus.png)

You can also set a tag for a profile. Tags are needed to further group them together. When working with a hundred profiles and above, this feature becomes simply indispensable.

After filling in these “required” fields, you can click on Save, the configuration will be saved, but we will familiarize ourselves with the rest of the settings.

### Proxy

Select the next tab – Proxy. Of course, in order to create a single profile, proxies can be created manually, we will do so for familiarity. But if you create profiles in bulk, we recommend using the proxy manager, we wrote about it in point 10.

![Docusaurus logo](/img/docusaurus.png)

In the first field, choose the type of proxy you want, http or socks5.

![Docusaurus logo](/img/docusaurus.png)

Then there are fields for entering IP, port, username and password. Supports formatted input, so you can simply copy all proxy information and one-click fill in the fields.

Select Fill in the required fields.

### Network prints

Go to the next tab – network prints.

![Docusaurus logo](/img/docusaurus.png)

If you are using a proxy, then you just need to turn all settings to Auto mode, then all network fingerprints will be swapped based on the proxy. If you prefer to fill in the settings manually, then: enable WebRTC, ticking the appropriate checkbox, and define a public IP. A local IP, on the other hand, is not recommended in most cases to improve your privacy.

The MaxMind button is needed to manually fill in the external IP bypassing the proxy.

### System Prints

Here you configure and swap out your browser’s system fingerprints.

![Docusaurus logo](/img/docusaurus.png)

- Canvas – Add digital noise to the picture by changing the prints on the rendering data in the browser.
- WebGL image hash – disables / adds noise to the image built through WebGL tools.
- AudioContext – Substitutes audio data in the browser.
- WebGL metadata – Substitutes the video card data that the browser uses, applying a “mask”.
- Screen size – Adjusts the size of the browser window to the configuration.
- Fonts – Substitutes browser fonts.

In most cases, manual setting of these parameters is not required.

### Cookie files

You can use the Import tab to import JSON and Netscape cookies as files or text.

Here is also an external link to the Netscape to JSON converter.

After you download cookies, you will be able to view, edit, and export them.

### Accounts

To avoid losing account data (logins and passwords), we have made a separate tab Accounts in every profile you create.

![Docusaurus logo](/img/docusaurus.png)

In this tab we fill in:

- Website address
- Login
- Password

Where the data is stored

All of this data is saved not only in the Undetectable system, but also in the browser. Using a particular profile you open the website in your browser, and you are offered a list of saved logins for that profile.

In most cases, manual setting of these parameters is not required.

You can also mass import and export a list of websites with accounts in .tsv format (data is separated by a tabulation symbol).

### Launch the profile as in a normal browser

After you have set all the settings in the previous paragraphs, click Save – the profile is created! It will appear in the list on the left:

![Docusaurus logo](/img/docusaurus.png)

Now you can move on to using the browser itself.

Then click the blue-white start button in the list on the left on the selected profile:

![Docusaurus logo](/img/docusaurus.png)

The browser window opens, with the start page – <a href="https://leaksradar.com/"> LeaskRadar.com </a> (or the one you specify manually) in the profile settings.

Of the features of the running browser can be distinguished by 2 icons: settings (profile) and the menu.

If you have problems with rendering browser graphics, it is recommended to enable the “Force Use Swiftshader” option in the settings. This function is responsible for rendering graphics in the browser forcibly through the processor, not through the video adapter.

![Docusaurus logo](/img/docusaurus.png)

### Mass profile creation

If you want to create several profiles with different configurations, you can use the ” Mass Creation” feature.

Fill in: Start ID, OS, Browser, select the necessary configurations, tags for further grouping, screen, proxy, language and quantity.

Then click Generate – you can check if everything is filled in correctly.

![Docusaurus logo](/img/docusaurus.png)

It is possible to show / hide detailed information of each profile:

![Docusaurus logo](/img/docusaurus.png)

Next, press the create button – the profiles have been created.

### Profile Manager

The Profile Manager functionality is provided for more efficient profile management. You can group, delete, archive, import and export them. Profiles can be sorted and grouped by tags, names.

To open the profile manager, click the icon in the left panel.

![Docusaurus logo](/img/docusaurus.png)

The following window will open:

![Docusaurus logo](/img/docusaurus.png)

Clicking the Edit button gives us access to edit profile names, select their tags, and write notes. After making changes, click save.

![Docusaurus logo](/img/docusaurus.png)

### Launching the bot and its options

Start the bot by clicking the button Bot on the left of the platform working space.

![Docusaurus logo](/img/docusaurus.png)

The following window will open:

![Docusaurus logo](/img/docusaurus.png)

The functionality of the bot allows you to set up an automatic browsing of web-sites for a selected period of time. How to set it up correctly?

1. Profiles – one or more profiles with which you will work;
2. Pages is one moment – an amount of pages the bot opens at the same time;
3. Script.

At the moment, there are three scripts available for the bot to work:

- Browse Pages In Order. Each profile goes through to the specified web-sites in the order of the list;
- Browse Pages Randomly. Each profile goes through to web-sites in a random order;
- Group Pages by Profiles. Links are shuffled and distributed among all active profiles.

The script launch can be paused and resumed when needed. With the Timer option, you can flexibly adjust the time spent on the web-site and the intervals between actions. Or select Random interval, in order the bot randomly to be on a web-site within the specified time set by the User.

Also we develop such a tool as an automatic link click through on pages and computer mouse movement emulation. All these things will allow you to “warm up” your profile before getting registered on web-sites.

Links can be imported using the Import links button. To do this, select a text file with a list of links, each on a new line and click the import button.

![Docusaurus logo](/img/docusaurus.png)

### Proxy Manager

To avoid the routine work of creating proxies manually, the browser has a function to import proxy settings – Proxy Manager. Here you can create/delete and edit proxies in mass or single copies.

![Docusaurus logo](/img/docusaurus.png)

To create proxies one by one, select a new proxy. The configuration window opens:

![Docusaurus logo](/img/docusaurus.png)

For adding multiple proxy settings, we recommend exporting the template (Example.csv) first, filling it in, and then importing it into the browser using the appropriate “Import” button.

The template (Example.csv) looks like this

![Docusaurus logo](/img/docusaurus.png)

### Tag Manager

The Tag Manager functionality has been developed for convenient tag management. It is located in the menu on the left:

![Docusaurus logo](/img/docusaurus.png)

Enter the value “Tag Name” in the input line, click the plus button (to the right) – We have created a tag called Tag name:

![Docusaurus logo](/img/docusaurus.png)

You can also select all or more tags and rename/delete.

### Top Sites Generator

We have added a small service for creating popular sites, where you can select the desired country and the number of sites. In a couple of seconds, you will find a list of the most popular sites, which can be found in our bot.

![Docusaurus logo](/img/docusaurus.png)

### Configuration Store

![Docusaurus logo](/img/docusaurus.png)

At creation of the most convenient Configuration Store we have added search functions by User-Agent and WebGL and the ability to select configurations by number of processor cores, size of the RAM and screen resolution.

A limited number of free configurations will be available at various plans, but you can buy additional configurations for $1. Configurations are sold exclusively to one person.

![Docusaurus logo](/img/docusaurus.png)

Also we have developed an accumulative bonus program:

- If you bought more than 50 configurations – your discount is 5% for a purchase of new configurations.
- More than 100 configurations – 10% discount.
- More than 200 configurations – 15% discount.
  and ect. The maximum discount of 30% remains with you if you buy more than 500 configurations.

### The Conclusion

This tutorial should reveal the possibilities of such a powerful tool as Undetectable. Use it as a tutorial on how to use the browser.

We hope this information has been useful to you.
