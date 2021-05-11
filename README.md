#Техническое задание

## part 1

Реализовать полностью кастомный “Range Input” аналог <input type=”range”>
На выходе это должен быть Vue-component (не npm пакет, а просто компонент). Работать должен как на
десктопе так и на мобильной версии. На вход компонента должно поступать начальное значение процента.
Компонент должен иметь возможность использовать директиву v-model (естественно что в событии должен
передаваться текущий процент). Цветовая палитра не принципиальна.

## part 2
При помощи Vue.js реализовать список пользователей с поиском по имени.
С возможностью удаления/добавления пользователя. И переходом на подробную страницу о пользователе
(Просто что бы понять как вы работаете с навигацией). Можете использовать любой другой удобный для вас сервис.
Удаление и добавление не должно работать через REST! Ссылку использовать только как начальный
источник информации.
Стэк может быть любой, можно использовать готовые UI библиотеки.
Внешний вид на ваше усмотрение.
---
##Информация по проекту
* Фреймворк - Vue 3
* Препроцесор - Sass
* Сборка через webpack, встроенный во vue-cli
* Разметка по БЭМ
* Готовые шаблоны на tailwind использовалися для списка пользователей - задание `part 2`
* Сетка адаптивная
* Рэндж (`part 1`) написан полностью с нуля. Адаптивный. На вход передается первоначальное значение строкой. 

---

## Сборка
* `vue-cli-service build` - сборка проекта
* `vue-cli-service serve` - запуск сервера проекта
* `npm install` - загрузка библиотек

