# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/styles/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```
## Базовый код
### 1. Класс ```EventEmitter``` 
Реализует паттерн «Наблюдатель» и позволяет подписываться на события и уведомлять подписчиков о наступлении события. Класс имеет методы ```on``` , ```off``` , ```emit``` — для подписки на событие, отписки от события и уведомления подписчиков о наступлении события соответственно. Дополнительно реализованы методы ```onAll``` и ```offAll``` — для подписки на все события и сброса всех подписчиков.

## Компоненты модели данных (бизнес-логика)
### 1. Класс ```WebItem```
Основной класс элемента каталога, который является составной частью собственно каталога товаров, корзины и заказа. 
Класс содержит в себе id, название, описание, стоимость элемента.

### 2. Класс ```Basket```
Реализует корзину товаров для заказа. В его состав входят добавленные элементы из каталога - массив ```WebItem```, общая цена корзины, а также методы добавления элемента в корзину и удаления элемента из корзины.

### 3. Класс ```Order```
Реализует данные заказа. В его состав входят заказанные элементы из каталога - массив ```WebItem```, общая цена заказа, а также способ оплаты, адрес доставки, E-Mail и телефон покупателя.

## Компоненты представления
### 1. Класс ```CatalogUI```
Выводит на основной экран все элементы каталога в табличном виде (массив ```WebItem```).

### 2. Класс ```ModalUI```
Основной элемент реализации модальных окон - данные элемеента каталога, содержимого корзина и заказа, в котоором реализовано модальное открытие окна, его закрытие, а также реализован метод валидации введенных данных с управлением доступностью кнопки перехода на следующий шаг оформления заказа.

### 3. Класс ```WebItemUI```
Модальное окно данных элемента каталога с возможностью добавления его в корзину (потомок ```ModalUI```)

### 4. Класс ```BasketUI```
Модальное окно корзины с возможностью удаления элементов и перехода к заказу (потомок ```ModalUI```)

### 5. Класс ```OrderUI```
Модальное окно заказа (потомок ```ModalUI```)
