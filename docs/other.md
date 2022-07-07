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

![Docusaurus logo](/img/other/proxies-911/proxies-911-1.png)

Then in the Port Forward specify the required range of ports that will not be occupied by other programs.

Go to the ProxyList tab, choose a proxy for your parameters, the desired country, city, state and double-click on the proxy you would like to use, then click on Forward Port To Proxy and choose a free port.

![Docusaurus logo](/img/other/proxies-911/proxies-911-2.png)

To check the proxy binding you can open the window Port Forward List, if the list does not include the selected, then repeat the binding.

![Docusaurus logo](/img/other/proxies-911/proxies-911-3.png)

Setting up an Undetectable profile:

1. Now start Undetectable, select the created profile or create a new one
2. Go to the Proxy tab
3. Choose type socks5:// in IP field always write local address 127.0.0.1 and in Port field write port to which you added proxy. Leave your Login and Password blank.

![Docusaurus logo](/img/other/proxies-911/proxies-911-4.jpg)

Save the settings and start the profile.

## Setting up an ssh tunnel on Windows and macOS

**Setting up an ssh tunnel on Windows**

1. Installing Putty.
2. Launching.
3. Enter the host and port from your SSH tunnel.

![Docusaurus logo](/img/other/putty/putty-1.png)

4. Configure the local port to which we will connect from Undetectable (it can be anything, as long as it is free). Type Dynamic Ipv4. Click Add.

![Docusaurus logo](/img/other/putty/putty-2.png)

5. After that, you can go back to Sessions and save the settings so that you don’t have to enter data every time.

![Docusaurus logo](/img/other/putty/putty-3.png)

6. Click Open, the terminal opens, where you need to enter the login and password for your SSH tunnel.

7. After that you can open Undetectable. There you choose any profile and on the Proxy tab configure: proxy type Socks5, Host 127.0.0.1 and the port that you selected in the fourth step. Click Check to verify.

![Docusaurus logo](/img/other/putty/putty-4.png)

This way you can start many SSH tunnels by running multiple copies of Putty, putting them on different ports and connecting from different Undetectable profiles to them.

**Setting up an ssh tunnel on Mac OS**

Launch the terminal and enter the command ssh root@10.10.10.10 -D 1080

1. Instead of root, write the login for your tunnel.
2. Instead of 10.10.10.10 enter the IP for your tunnel.
3. Instead of 1080, enter the port that you will later specify in the program settings.
4. Enter your password.

![Docusaurus logo](/img/other/putty/putty-5.png)

![Docusaurus logo](/img/other/putty/putty-6.png)

You need to configure a new proxy in the program

1. Select socks5
2. Enter the local IP 127.0.0.1
3. Enter the port you specified when configuring the ssh tunnel

![Docusaurus logo](/img/other/putty/putty-7.png)

When the ssh tunnel comes up, you can check if the proxy is working.

This way you can start many SSH tunnels, hanging them on different ports and connecting from different Undetectable profiles to them.