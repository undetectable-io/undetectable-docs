---
sidebar_position: 0
id: other
title: Другое
custom_edit_url: null
---

## Как настроить прокси 911 S5

У прокси сервиса 911.re существует 2 варианта настройки:
1. Это просто добавить в список программ Undetectable.exe, LocalServer.exe и Surf.exe в список программ, тогда будет один прокси на все профили, что не очень удобно.
2. И вторая настройка, которую мы рассмотрим в этой статье.

Настройка прокси 911 S5:
1. Запустите программу 911 S5.
2. Перейдите на вкладку Settings.
3. В разделе General Settings снимите флажок "Auto change TimeZone".
4. В разделе Proxy Tool выберите вариант "Other Proxy Tools".

![Docusaurus logo](/img/other/proxies-911/proxies-911-1.png)

Далее в Port Forward укажите необходимый промежуток портов который не будет занят другими программами.

Перейдите во вкладку ProxyList, подберите прокси под ваши параметры, нужную страну, город, штат и дважды нажмите на прокси, который вы бы хотели использовать, после нажимаем на Forward Port To Proxy и тут выбираете свободный порт.

![Docusaurus logo](/img/other/proxies-911/proxies-911-2.png)

Для проверки привязки прокси можете открыть окно Port Forward List, если в списке нет выбранного, то повторяем привязку.

![Docusaurus logo](/img/other/proxies-911/proxies-911-3.png)

Настройка профиля Undetectable:
1. Теперь запускаем Undetectable, выбираем созданный профиль либо создаем новый
2. Переходим на вкладку Proxy
3. Выбираем тип socks5:// в поле IP всегда прописываем локальный адрес 127.0.0.1 а в поле Port указываем порт на который вы привязали прокси. Login и Password оставляем пустыми.

![Docusaurus logo](/img/other/proxies-911/proxies-911-4.jpg)

Сохраняем настройки и запускаем профиль.

## Настройка ssh-туннелей в Windows и macOS

**Настройка ssh-туннеля в Windows**

1. Установка Putty
2. Запуск
3. Введите хост и порт из вашего SSH-туннеля.

![Docusaurus logo](/img/other/putty/putty-1.png)

4. Настраиваем локальный порт, к которому будем подключаться из Undetectable (он может быть любым, главное, чтобы он был свободен). Введите динамический IPv4. Щелкните Добавить.

![Docusaurus logo](/img/other/putty/putty-2.png)

5. После этого можно вернуться в Sessions и сохранить настройки, чтобы не вводить данные каждый раз.

![Docusaurus logo](/img/other/putty/putty-3.png)

6. Нажимаем Открыть, открывается терминал, где нужно ввести логин и пароль от вашего SSH туннеля.

7. После этого вы можете открыть Undetectable. Там вы выбираете любой профиль и на вкладке Proxy настраиваете: тип прокси Socks5, Host 127.0.0.1 и порт, который вы выбрали на четвертом шаге. Нажмите Проверить, чтобы подтвердить.

![Docusaurus logo](/img/other/putty/putty-4.png)

Таким образом, вы можете запустить множество туннелей SSH, запустив несколько копий Putty, разместив их на разных портах и ​​подключившись к ним из разных профилей Undetectable.

**Настройка ssh-туннеля в Mac OS**

Запускаем терминал и вводим команду ssh root@10.10.10.10 -D 1080

1. Вместо root пропишите логин для вашего туннеля.
2. Вместо 10.10.10.10 введите IP вашего туннеля.
3. Вместо 1080 введите тот порт, который вы потом укажете в настройках программы.
4. Введите свой пароль.

![Docusaurus logo](/img/other/putty/putty-5.png)

![Docusaurus logo](/img/other/putty/putty-6.png)

После этого вы можете открыть Undetectable. Там вы выбираете любой профиль и на вкладке Proxy настраиваете: тип прокси Socks5, Host 127.0.0.1 и порт, который вы указали в пункте 3.

![Docusaurus logo](/img/other/putty/putty-7.png)

Таким образом можно запустить множество SSH-туннелей, повесив их на разные порты и подключившись к ним с разных Undetectable-профилей.

## Как выдать разрешения для Anydesk на MacOS для возможности подключения тех. поддержки?

Для этого необходимо выполнить следующие действия:
1. после установки и запуска Anydesk нажать на кнопку в красном сообщении;

![Docusaurus logo](/img/other/anydesk/anydesk-1.png)

2. в появившемся окне выбираем кнопку “Open System Preferences”;

![Docusaurus logo](/img/other/anydesk/anydesk-2.png)

3. в разделе Accessibility нажимаем на кнопку для внесения изменений;

![Docusaurus logo](/img/other/anydesk/anydesk-3.png)

4. вводим пароль и подтверждаем;

![Docusaurus logo](/img/other/anydesk/anydesk-4.png)

5. заполняем чек-бокс в строке AnyDesk;

![Docusaurus logo](/img/other/anydesk/anydesk-5.png)

6. аналогичные действия выполняем в разделе Screen Recording.

![Docusaurus logo](/img/other/anydesk/anydesk-6.jpg)

## Как выдать разрешение на macOS для работы браузера

Для этого необходимо выполнить следующие действия перед установкой:
1. зайти в настройки Security & Privacy раздел General;
2. разблокировать возможность редактирования;
3. ввести пароль пользователя и нажать кнопку Unlock;
4. выбрать параметр App Store and Identified developers.

![Docusaurus logo](/img/other/macOS-permissions/macOS-permissions-1.png)

Действия после установки:
1. запускаем программу;
2. появляется окно с предупреждением и нажимаем Ok;
3. открываем настройки Security & Privacy раздел General;
4. напротив текста “Undetectable” was blocked from opening because it is not from an identified developer нажимаем кнопку Open Anyway.

![Docusaurus logo](/img/other/macOS-permissions/macOS-permissions-2.png)

![Docusaurus logo](/img/other/macOS-permissions/macOS-permissions-3.png)

После этих действий программа запустится.