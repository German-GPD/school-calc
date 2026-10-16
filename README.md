<!-- SCHOOL CALC documentation · German · GERMAN'$ CODE TEAM -->

<div align="center">

# 🧮 SCHOOL CALC

### A focused grade calculator for students
### Удобный калькулятор оценок для школьников

**Created by German · GERMAN'$ CODE TEAM**

[🌐 Open the app](https://german-gpd.github.io/school-calc/) · [💻 Source code](https://github.com/German-GPD/school-calc) · [👨‍💻 Developer](https://t.me/german_gpd)

![Version](https://img.shields.io/badge/version-2.1.0-8DFF42?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-structure-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-design-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-logic-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Languages](https://img.shields.io/badge/languages-RU%20%2F%20EN-8DB9FF?style=for-the-badge)
![License](https://img.shields.io/badge/license-CC%20BY--NC%204.0-C5A5FF?style=for-the-badge)

*Track your grades. Understand your progress. Keep moving.*
*Следи за оценками. Понимай свой результат. Двигайся дальше.*

</div>

---

# 🇷🇺 Русская версия

## ✦ О проекте

**SCHOOL CALC** — лёгкое веб-приложение для расчёта среднего балла и учёта школьных оценок. Проект создан **German** в рамках **GERMAN'$ CODE TEAM**. Он объединяет практичный инструмент, аккуратный интерфейс и фирменный визуальный стиль G_Style.

Приложение работает прямо в браузере: регистрация не нужна, установка веб-версии не требуется, а оценки обрабатываются на стороне пользователя.

## ✨ Возможности

- **Расчёт среднего балла в реальном времени** — результат обновляется при добавлении и удалении оценок.
- **Три шкалы оценивания:** 5-, 10- и 12-балльная.
- **Управление оценками:** добавление, удаление отдельной записи и очистка списка.
- **Русский и английский интерфейс** — язык при запуске определяется по языку браузера; его можно переключить в настройках.
- **Светлая и тёмная темы** — начальное оформление учитывает системную тему устройства.
- **Цветовые акценты** — несколько вариантов для персонализации внешнего вида.
- **Гера 🦉** — маскот реагирует на текущий результат.
- **Информационный блок** — объявление загружается из файла `event.txt`.
- **Адаптивная вёрстка** — интерфейс рассчитан на телефоны и компьютеры.
- **Без аккаунта и облачной синхронизации** — для работы не нужна регистрация.

> **Важно:** средний балл — это обычное арифметическое среднее. Если оценки имеют разный вес, результат может отличаться от официального среднего балла.

## 🧭 Как пользоваться

1. Открой приложение по ссылке: [SCHOOL CALC](https://german-gpd.github.io/school-calc/).
2. Выбери шкалу: 5, 10 или 12 баллов.
3. Нажимай на кнопки с оценками, чтобы добавлять их в список.
4. Средний балл и индикатор обновляются автоматически.
5. Чтобы удалить отдельную оценку, нажми кнопку удаления рядом с ней.
6. В настройках можно изменить язык, тему и цвет акцента.
7. Для очистки всего списка используй соответствующую кнопку и подтверди действие.

## 💾 Данные и приватность

- Оценки находятся в памяти текущей страницы и **не восстанавливаются после перезагрузки**.
- Приложение не требует аккаунта и не отправляет оценки на сервер.
- Выбранная шкала сохраняется в локальном хранилище браузера.
- Язык, тема и цвет акцента в текущей реализации заново определяются при запуске.
- Не размещай личную информацию в `event.txt`: файл предназначен для публичных объявлений.

## 📣 Как изменить объявление

1. Открой файл **`event.txt`** в корне репозитория.
2. Замени его содержимое нужным текстом.
3. Сохрани и отправь изменения в ветку `main`.
4. После публикации приложение загрузит новое объявление из файла.

Если текст не появился, проверь, что `event.txt` опубликован и доступен по относительному адресу `./event.txt`. Для чтения файла при локальной разработке рекомендуется запускать веб-сервер.

## 🛠 Технологии

| Технология | Назначение |
| --- | --- |
| HTML5 | Структура страницы |
| CSS3 | Оформление, темы, адаптивная сетка и анимации |
| JavaScript | Расчёты, события и логика интерфейса |
| GitHub | Хранение исходного кода и история изменений |
| GitHub Pages | Публикация веб-версии |

Проект использует обычные HTML, CSS и JavaScript без обязательной сборки и сторонних JavaScript-фреймворков. Это упрощает запуск, изучение и дальнейшую разработку.

## 📂 Структура репозитория

```text
school-calc/
├── index.html       # Структура приложения
├── style.css        # Стили, темы и адаптивный дизайн
├── script.js        # Расчёты и логика интерфейса
├── event.txt        # Текст информационного блока
├── School-Calc.apk  # Android APK, размещённый в репозитории
├── LICENSE          # Условия использования
└── README.md        # Документация на русском и английском
```

## 🚀 Запуск и разработка

Для локального запуска нужен любой веб-сервер. Если установлен Python, можно выполнить:

```bash
git clone https://github.com/German-GPD/school-calc.git
cd school-calc
python -m http.server 8000
```

Затем открой в браузере адрес `http://localhost:8000`.

Локальный сервер рекомендуется, потому что приложение загружает объявление через `fetch('./event.txt')`. При открытии HTML двойным щелчком браузер может ограничить доступ к локальным файлам.

Для изменения проекта достаточно редактора кода и браузера. Стили находятся в `style.css`, поведение приложения — в `script.js`, а разметка — в `index.html`.

## 👨‍💻 Об авторе

**German** — независимый разработчик и автор SCHOOL CALC, работающий под проектным именем **GERMAN'$ CODE TEAM**. В разработке мне интересны программирование, веб-технологии, интерфейсы и создание собственных цифровых проектов.

SCHOOL CALC задуман как простой и доступный инструмент на каждый день. В проекте важны не только расчёты, но и понятный интерфейс, узнаваемый стиль и возможность развивать код без сложной инфраструктуры.

### 🔗 Ссылки автора и сообщества

- **Разработчик:** [@german_gpd в Telegram](https://t.me/german_gpd)
- **GERMAN'$ CODE TEAM:** [Telegram-группа](https://t.me/g_code_team)
- **RedFox:** [Telegram-канал](https://t.me/redfox_g56)
- **Репозиторий:** [German-GPD/school-calc](https://github.com/German-GPD/school-calc)
- **Веб-приложение:** [Открыть SCHOOL CALC](https://german-gpd.github.io/school-calc/)

## 📜 Лицензия и авторство

Проект распространяется по лицензии **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**. Перед использованием, распространением или изменением прочитай [файл LICENSE](LICENSE) и [полный текст лицензии](https://creativecommons.org/licenses/by-nc/4.0/legalcode).

При распространении или изменении необходимо указывать автора, ссылку на лицензию и отмечать внесённые изменения. Коммерческое использование не разрешено условиями лицензии без отдельного разрешения правообладателя.

---

# 🇬🇧 English version

## ✦ About the project

**SCHOOL CALC** is a lightweight web app for calculating grade averages and keeping school grades organized. It is created by **German** as part of **GERMAN'$ CODE TEAM**. The project combines a practical everyday tool with a clean interface and the recognizable G_Style visual identity.

The app runs directly in a browser. No account or web-app installation is required, and grades are processed on the user's side.

## ✨ Features

- **Live average calculation** — the result updates when grades are added or removed.
- **Three grading scales:** 5-point, 10-point, and 12-point.
- **Grade management:** add grades, remove individual entries, or clear the list.
- **Russian and English interface** — the browser language is detected at startup, and users can switch languages in Settings.
- **Light and dark themes** — the initial appearance follows the device's system theme.
- **Accent color options** — personalize the look of the interface.
- **Gera the owl 🦉** — the mascot reacts to the current result.
- **Announcement panel** — its message is loaded from `event.txt`.
- **Responsive layout** — designed for mobile and desktop screens.
- **No account or cloud sync** — registration is not required.

> **Note:** the average is a simple arithmetic mean. If grades have different weights, the result may differ from the official average.

## 🧭 How to use

1. Open [SCHOOL CALC](https://german-gpd.github.io/school-calc/).
2. Select a grading scale: 5, 10, or 12 points.
3. Tap or click a grade to add it to the list.
4. The average and progress indicator update automatically.
5. Use the remove control beside a grade to delete that entry.
6. Open Settings to change the language, theme, or accent color.
7. Use the clear-list control to remove all grades after confirming the action.

## 💾 Data and privacy

- Grades are kept in the current page's memory and **are not restored after a reload**.
- The app does not require an account or upload grades to a server.
- The selected grading scale is saved in the browser's local storage.
- Language, theme, and accent color are initialized again on startup.
- Do not put personal information in `event.txt`; it is intended for public announcements.

## 📣 Updating the announcement

1. Open **`event.txt`** in the repository root.
2. Replace its contents with your announcement.
3. Commit and push the change to the `main` branch.
4. Once the site is updated, the app will load the new message from the file.

If the message does not appear, check that `event.txt` is published and available at `./event.txt`. A local web server is recommended during development.

## 🛠 Technology stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Page structure |
| CSS3 | Styling, themes, responsive layout, and animations |
| JavaScript | Calculations, events, and interface logic |
| GitHub | Source code and version history |
| GitHub Pages | Web app hosting |

The project uses plain HTML, CSS, and JavaScript without a required build step or third-party JavaScript framework. This keeps the code accessible and easy to maintain.

## 📂 Repository structure

```text
school-calc/
├── index.html       # Application structure
├── style.css        # Styling, themes, and responsive layout
├── script.js        # Calculator and interface logic
├── event.txt        # Announcement text
├── School-Calc.apk  # Android APK hosted in the repository
├── LICENSE          # Usage terms
└── README.md        # Russian and English documentation
```

## 🚀 Local development

You can run the app with any local web server. If Python is installed, run:

```bash
git clone https://github.com/German-GPD/school-calc.git
cd school-calc
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

A local server is recommended because the app loads the announcement using `fetch('./event.txt')`. Opening the HTML file directly may cause the browser to restrict local file access.

Use a code editor to update `index.html` for markup, `style.css` for visual design, and `script.js` for application behavior.

## 👨‍💻 About the developer

**German** is an independent developer and the creator of SCHOOL CALC, working under the project identity **GERMAN'$ CODE TEAM**. My interests include programming, web technologies, interface design, and building independent digital projects.

SCHOOL CALC is designed as a simple and accessible everyday tool. The project focuses on clear interactions, a recognizable visual identity, and code that can be developed without a complicated toolchain.

### 🔗 Developer and community links

- **Developer:** [@german_gpd on Telegram](https://t.me/german_gpd)
- **GERMAN'$ CODE TEAM:** [Telegram group](https://t.me/g_code_team)
- **RedFox:** [Telegram channel](https://t.me/redfox_g56)
- **Repository:** [German-GPD/school-calc](https://github.com/German-GPD/school-calc)
- **Web app:** [Open SCHOOL CALC](https://german-gpd.github.io/school-calc/)

## 📜 License and attribution

This project is distributed under the **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)** license. Before using, sharing, or adapting the project, read the [LICENSE file](LICENSE) and the [full license text](https://creativecommons.org/licenses/by-nc/4.0/legalcode).

When sharing or adapting the work, provide appropriate credit, link to the license, and indicate if changes were made. Commercial use is not permitted under this license without separate permission from the rights holder.

---

<div align="center">

**Made with focus by German · GERMAN'$ CODE TEAM**

*Built for students. Designed to stay simple.*

</div>
