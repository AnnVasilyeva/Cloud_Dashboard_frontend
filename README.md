# Cloud_Dashboard_frontend

[![Build status](https://ci.appveyor.com/api/projects/status/knhj5s2va67mvw7x?svg=true)](https://ci.appveyor.com/project/AnnVasilyeva/cloud-dashboard-frontend)

[GitHub Pages]()

## Клиентская часть

Клиентская часть должна работать следующим образом:

1. При загрузке страницы загружается список инстансов и отрисовывается в виджете управления инстансами (слева)
2. Выполняется подключение по нужному протоколу с началом отслеживания событий. Мы предлагаем вам для разделения событий использовать следующие "ключи":

* received - сервером получена команда
* created - создан новый инстанс
* started - инстанс запущен
* stopped - инстанс остановлен
* removed - инстанс удалён

Виджет управления инстансами (слева) работает следующим образом:

1. Status - отображает текущий статус
2. Actions - кнопки управления состояниями (зависят от текущего статуса) позволяют отправить команду на запуск, остановку или удаление инстанса
3. Create new instance - позволяет отправить команду на создание нового инстанса.

Обратите внимание, в виджете управления состояние должно быть синхронизировано с текущим состоянием на сервере. 
Т.е. если вы получаете информацию с сервера о том, что инстанс стартовал, то это должно быть отображено как в Worklog'е, так и в виджете управления инстансами.