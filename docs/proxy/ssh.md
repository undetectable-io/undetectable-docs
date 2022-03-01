---
sidebar_position: 1
---

# Setting up an ssh tunnel

## Setting up an ssh tunnel on Windows

1. Installing Putty
2. Launching
3. Enter the host and port from your SSH tunnel

![Docusaurus logo](/img/docusaurus.png)

4. Configure the local port to which we will connect from Undetectable (it can be anything, as long as it is free). Type Dynamic Ipv4. Click Add.

![Docusaurus logo](/img/docusaurus.png)

5. After that, you can go back to Sessions and save the settings so that you don’t have to enter data every time.

![Docusaurus logo](/img/docusaurus.png)

6. Click Open, the terminal opens, where you need to enter the login and password for your SSH tunnel

7. After that you can open Undetectable. There you choose any profile and on the Proxy tab configure: proxy type Socks5, Host 127.0.0.1 and the port that you selected in the fourth step. Click Check to verify.

![Docusaurus logo](/img/docusaurus.png)

This way you can start many SSH tunnels by running multiple copies of Putty, putting them on different ports and connecting from different Undetectable profiles to them.

## Setting up an ssh tunnel on Mac OS

### Launch the terminal and enter the command

ssh root@10.10.10.10 -D 1080

- instead of root, write the login for your tunnel
- instead of 10.10.10.10 enter the IP for your tunnel
- instead of 1080, enter the port that you will later specify in the program settings

![Docusaurus logo](/img/docusaurus.png)

- enter your password

### You need to configure a new proxy in the program

- select socks5
- Enter the local IP 127.0.0.1
- enter the port you specified when configuring the ssh tunnel

  ![Docusaurus logo](/img/docusaurus.png)

  When the ssh tunnel comes up, you can check if the proxy is working.

This way you can start many SSH tunnels, hanging them on different ports and connecting from different Undetectable profiles to them.
