<div align="center">

# 🧮 SCHOOL CALC

### A focused grade calculator built for students  
### Удобный калькулятор оценок для школьников

**Created by German · GERMAN'$ CODE TEAM**

[🌐 Live App](https://german-gpd.github.io/school-calc/) · [💻 Source Code](https://github.com/German-GPD/school-calc) · [✉️ Developer](https://t.me/german_gpd)

![Version](https://img.shields.io/badge/version-2.1.0-d8ff42?style=for-the-badge)
![Vue](https://img.shields.io/badge/Vue-3-42b883?style=for-the-badge&logo=vuedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646cff?style=for-the-badge&logo=vite&logoColor=white)
![Languages](https://img.shields.io/badge/languages-RU%20%2F%20EN-8db9ff?style=for-the-badge)
![License](https://img.shields.io/badge/license-CC%20BY--NC%204.0-c5a5ff?style=for-the-badge)

*Track your grades. Understand your progress. Keep moving.*  
*Следи за оценками. Понимай свой результат. Двигайся дальше.*

</div>

---

## 🇷🇺 О проекте

**SCHOOL CALC** — лёгкое веб-приложение для расчёта среднего балла и учёта школьных оценок. Проект создан **German** в рамках **GERMAN'$ CODE TEAM**. Интерфейс сочетает минималистичный тёмный дизайн, яркий акцентный цвет и маскота Геру 🦉.

Приложение запускается в браузере: регистрация не нужна, а оценки не отправляются на сервер.

### ✨ Возможности

- **Средний балл в реальном времени** — результат пересчитывается после добавления или удаления оценки.
- **Три шкалы оценивания** — 5-, 10- и 12-балльная.
- **Управление оценками** — добавление оценок, удаление отдельных записей и очистка списка.
- **Русский и английский** — язык можно выбрать в настройках; при первом запуске учитывается язык браузера.
- **Светлая и тёмная темы** — можно выбрать оформление вручную; по умолчанию учитывается системная тема устройства.
- **Пять акцентных цветов** — зелёный, синий, красный, жёлтый и фиолетовый.
- **Гера 🦉** — маскот с реакциями на текущий результат.
- **Блок объявлений** — содержимое берётся из `event.txt`.
- **Адаптивная вёрстка** — интерфейс рассчитан на компьютеры и мобильные устройства.
- **Публикация через GitHub Actions** — изменения в `main` запускают сборку и развёртывание сайта.

> **Важно:** средний балл — это обычное арифметическое среднее. Если в школе используются оценки с разным весом, результат может отличаться от официального.

### 💾 Данные и приватность

- Оценки существуют **только в текущем сеансе** и не восстанавливаются после перезагрузки страницы.
- Приложение не требует аккаунта и не отправляет оценки на сервер.
- Выбранная шкала сохраняется в локальном хранилище браузера.
- Язык, тема и акцентный цвет в текущей реализации заново определяются при запуске.

### 🚀 Запуск локально

**Требуется:** установленный [Node.js](https://nodejs.org/).

```bash
git clone https://github.com/German-GPD/school-calc.git
cd school-calc
npm install
npm run dev
```

Чтобы проверить production-сборку:

```bash
npm run build
npm run preview
```

### 🧰 Технологии

| Технология | Использование |
| --- | --- |
| HTML5 | Структура страницы |
| CSS3 | Оформление, темы и адаптивность |
| JavaScript (ES modules) | Логика приложения |
| Vue 3 | Корневой компонент и запуск интерфейса |
| Vite 6 | Локальный сервер и production-сборка |
| GitHub Pages | Хостинг приложения |
| GitHub Actions | Автоматическая сборка и публикация |

### 📂 Структура проекта

```text
school-calc/
├── .github/workflows/
│   └── deploy.yml          # Автоматическая публикация
├── public/
│   └── event.txt           # Объявление для опубликованной версии
├── src/
│   ├── App.vue             # Vue-компонент приложения
│   ├── main.js             # Точка входа Vue
│   ├── grade-engine.js     # Расчёт среднего балла
│   └── storage.js          # Сохранение шкалы оценивания
├── index.html              # HTML-точка входа
├── script.js               # Логика интерфейса
├── style.css               # Стили и темы
├── event.txt               # Локальный файл объявления
├── package.json            # Зависимости и команды
├── vite.config.js           # Настройки Vite
├── LICENSE                  # Условия использования
└── README.md                # Документация проекта
```

### 📣 Объявление в приложении

Чтобы изменить текст информационного блока в опубликованной версии, отредактируй файл **`public/event.txt`** и отправь изменения в репозиторий. Для локальной разработки также предусмотрен корневой `event.txt`.

### 📜 Лицензия и авторство

Проект распространяется по лицензии **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**. Подробности — в файле [LICENSE](LICENSE) и в [полном тексте лицензии](https://creativecommons.org/licenses/by-nc/4.0/legalcode).

При использовании или изменении проекта необходимо указывать автора, ссылку на исходный репозиторий и лицензию, а также отмечать внесённые изменения. Коммерческое использование без отдельного разрешения не допускается. Нельзя представлять проект или его части как собственную оригинальную работу.

### 🔗 Ссылки и сообщество

- 🌐 [Открыть SCHOOL CALC](https://german-gpd.github.io/school-calc/)
- 💻 [Репозиторий на GitHub](https://github.com/German-GPD/school-calc)
- 👨‍💻 [Telegram разработчика — @german_gpd](https://t.me/german_gpd)
- 🧩 [GERMAN'$ CODE TEAM — Telegram](https://t.me/g_code_team)
- 🦊 [RedFox — Telegram-канал](https://t.me/redfox_g56)

---

## 🇬🇧 About the Project

**SCHOOL CALC** is a lightweight web app for calculating grade averages and keeping track of school grades. It is created by **German** as part of **GERMAN'$ CODE TEAM**. The interface combines a minimal, premium-inspired look, vivid accent colors, and the app mascot, Gera the owl 🦉.

It runs directly in your browser. No account is required, and grades are not sent to a server.

### ✨ Features

- **Live average calculation** — the result updates whenever you add or remove a grade.
- **Three grading scales** — 5-point, 10-point, and 12-point.
- **Grade management** — add grades, remove individual entries, or clear the list.
- **Two interface languages** — Russian and English, selectable in Settings; the browser language is used on first launch.
- **Light and dark themes** — choose manually, with the device theme used as the initial preference.
- **Five accent colors** — green, blue, red, yellow, and purple.
- **Gera the owl 🦉** — the mascot reacts to the current average.
- **Announcement panel** — its content is loaded from `event.txt`.
- **Responsive layout** — designed for desktop and mobile screens.
- **Automated deployment** — GitHub Actions builds and deploys changes pushed to `main`.

> **Note:** the average is a simple arithmetic mean. If your school uses weighted grades, this value may differ from the official result.

### 💾 Data & Privacy

- Grades are kept **only for the current session** and are not restored after a page reload.
- No account is needed, and grades are not uploaded to a server.
- The selected grading scale is saved in your browser's local storage.
- In the current implementation, language, theme, and accent color are determined again on each launch.

### 🚀 Run Locally

**Requirement:** [Node.js](https://nodejs.org/) installed on your computer.

```bash
git clone https://github.com/German-GPD/school-calc.git
cd school-calc
npm install
npm run dev
```

To test the production build:

```bash
npm run build
npm run preview
```

### 🧰 Tech Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Page structure |
| CSS3 | Styling, themes, and responsive layout |
| JavaScript (ES modules) | Application logic |
| Vue 3 | Root component and interface mounting |
| Vite 6 | Development server and production build |
| GitHub Pages | App hosting |
| GitHub Actions | Automated build and deployment |

### 📂 Project Structure

```text
school-calc/
├── .github/workflows/
│   └── deploy.yml          # Automated deployment
├── public/
│   └── event.txt           # Announcement for the published app
├── src/
│   ├── App.vue             # Vue application component
│   ├── main.js             # Vue entry point
│   ├── grade-engine.js     # Average calculation
│   └── storage.js          # Grading-scale persistence
├── index.html              # HTML entry point
├── script.js               # Interface logic
├── style.css               # Styles and themes
├── event.txt               # Local announcement file
├── package.json            # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── LICENSE                  # Usage terms
└── README.md                # Project documentation
```

### 📣 Updating the Announcement

To change the information panel in the published app, edit **`public/event.txt`** and push the change to the repository. The root-level `event.txt` is also provided for local development.

### 📜 License & Attribution

This project is licensed under **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**. See [LICENSE](LICENSE) and the [full license text](https://creativecommons.org/licenses/by-nc/4.0/legalcode).

When sharing or adapting the project, credit the author, link to the original repository and license, and indicate any changes. Commercial use is not permitted without separate permission. Do not present the project or its parts as your own original work.

### 🔗 Links & Community

- 🌐 [Open SCHOOL CALC](https://german-gpd.github.io/school-calc/)
- 💻 [GitHub Repository](https://github.com/German-GPD/school-calc)
- 👨‍💻 [Developer Telegram — @german_gpd](https://t.me/german_gpd)
- 🧩 [GERMAN'$ CODE TEAM — Telegram](https://t.me/g_code_team)
- 🦊 [RedFox — Telegram channel](https://t.me/redfox_g56)

---

<div align="center">

**SCHOOL CALC · 2.1.0**

*Designed with care. Built by German.*  
*Сделано с заботой. Разработано German.*

**GERMAN'$ CODE TEAM**

</div>
