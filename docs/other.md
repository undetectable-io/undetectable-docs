---
sidebar_position: 0
id: other
title: Other
custom_edit_url: null
---

## How to set up a 911 S5 proxy with the Undetectable browser

The 911.re proxy service has 2 configuration options:

1. It's easy to add Undetectable.exe, LocalServer.exe and Surf.exe to the list of programs, then there will be one proxy for all profiles, which is not very convenient.
2. And the second setting, which we will consider in this article.

911 S5 Proxy setup:

1. Start the 911 S5 program
2. Go to the Settings tab
3. Under General Settings, uncheck the "Auto change TimeZone" option
4. In the Proxy Tool section, select the "Other Proxy Tools" option

![Docusaurus logo](/img/proxies-911/proxies-911-1.png)

Then in the Port Forward specify the required range of ports that will not be occupied by other programs.

Go to the ProxyList tab, choose a proxy for your parameters, the desired country, city, state and double-click on the proxy you would like to use, then click on Forward Port To Proxy and choose a free port.

![Docusaurus logo](/img/proxies-911/proxies-911-2.png)

To check the proxy binding you can open the window Port Forward List, if the list does not include the selected, then repeat the binding.

![Docusaurus logo](/img/proxies-911/proxies-911-3.png)

Setting up an Undetectable profile:

1. Now start Undetectable, select the created profile or create a new one
2. Go to the Proxy tab
3. Choose type socks5:// in IP field always write local address 127.0.0.1 and in Port field write port to which you added proxy. Leave your Login and Password blank.

![Docusaurus logo](/img/proxies-911/proxies-911-4.jpg)

Save the settings and start the profile.