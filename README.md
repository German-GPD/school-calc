<div align="center">

# 🧮 SCHOOL CALC

### Твой школьный калькулятор оценок

**Разработка German · GERMAN'$ CODE TEAM**

[🌐 Открыть веб-версию](https://german-gpd.github.io/school-calc/) · [💬 Связаться с разработчиком](https://t.me/german_gpd) · [📣 Telegram RedFox](https://t.me/redfox_g56)

![Version](https://img.shields.io/badge/version-2.0-blue)
![Vue](https://img.shields.io/badge/Vue.js-3-42b883?logo=vuedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Languages](https://img.shields.io/badge/languages-RU%20%7C%20EN-8A2BE2)

*Считай оценки. Планируй цель. Учись с умом.*

</div>

---

## 🇷🇺 О проекте

**SCHOOL CALC** — калькулятор школьных оценок, созданный German в рамках **GERMAN'$ CODE TEAM**. Он помогает быстро разобраться со средним баллом, оценить текущие результаты и понять, какие оценки могут понадобиться для достижения желаемого среднего.

Проект развивается в нескольких форматах: веб-версия для браузера и приложение для Android. Публично выкладываются отобранные сборки — не каждая промежуточная версия разработки обязательно публикуется.

### ✨ Возможности

- **Расчёт среднего балла** по введённым оценкам.
- **Планирование цели:** расчёт того, какие будущие оценки могут помочь достичь нужного среднего.
- **Разные шкалы оценивания:** поддержка шкал на 5, 10 и 12 баллов в соответствующих версиях.
- **Подсказки по результату:** рекомендации и пояснения в зависимости от текущего среднего и выбранной цели.
- **Округление результата** для более понятного отображения.
- **Русский и английский языки** — доступность зависит от конкретной сборки.
- **Светлая и тёмная темы**, а также цветовые настройки в версиях, где они поддерживаются.
- **Маскот Гера** — узнаваемый помощник SCHOOL CALC.
- **Интерфейс для мобильных устройств** и Android.

> Набор функций может различаться между APK, веб-версией и отдельными релизами. Ориентируйся на описание конкретной опубликованной сборки.

### 🧠 Как пользоваться

1. Открой веб-версию или запусти приложение.
2. Добавь свои оценки в калькулятор.
3. Посмотри рассчитанный средний балл.
4. Если доступен расчёт цели, укажи желаемый результат и изучи подсказку.
5. Используй расчёт как ориентир для планирования учёбы.

**Важно:** расчёт — математическая оценка по введённым данным. Реальный итог может зависеть от правил учителя, веса контрольных работ и школьной системы оценивания.

### 📥 Где найти SCHOOL CALC

- **Веб-версия:** [german-gpd.github.io/school-calc](https://german-gpd.github.io/school-calc/)
- **Исходный код и опубликованные файлы:** [GitHub-репозиторий](https://github.com/German-GPD/school-calc)
- **APK для Android:** смотри доступные файлы и релизы в репозитории.
- **HTML-сборки:** смотри опубликованные HTML-файлы в репозитории.

В репозитории размещаются только выбранные публичные версии. Отсутствие конкретной промежуточной сборки означает, что она не опубликована здесь как отдельный релиз.

### 🔐 Данные и приватность

SCHOOL CALC предназначен для расчётов оценок. В текущей логике введённые оценки используются для расчёта и не должны сохраняться в отдельной истории оценок. Не вводи в приложение пароли, личные документы или другие чувствительные данные.

Это описание относится к логике самого проекта; если в будущем появятся новые функции или внешние интеграции, информацию о данных следует обновить.

### 🧑‍💻 Технологии

Веб-часть проекта использует:

- **Vue 3** — основа интерфейса.
- **Vite** — локальный сервер разработки и сборка.
- **HTML, CSS и JavaScript** — разметка, оформление и логика.
- **GitHub Pages** — публикация веб-версии.

Структура веб-приложения:

| Файл | Назначение |
| --- | --- |
| `index.html` | HTML-точка входа приложения |
| `src/App.vue` | Vue-компонент интерфейса |
| `src/main.js` | запуск Vue-приложения |
| `style.css` | стили |
| `script.js` | логика калькулятора, перенесённая из исходной версии |
| `vite.config.js` | настройки сборки Vite |
| `event.txt` | текст информационного блока, если он используется опубликованной сборкой |

---

## 🛠️ Запуск для разработчиков

### Требования

- [Node.js](https://nodejs.org/) с npm.
- Git — если репозиторий клонируется через командную строку.

### Установка

```bash
git clone https://github.com/German-GPD/school-calc.git
cd school-calc
npm install
```

### Локальный запуск

```bash
npm run dev
```

Vite покажет локальный адрес в терминале. Открой его в браузере.

### Проверка production-сборки

```bash
npm run build
npm run preview
```

После успешной сборки готовые файлы появятся в каталоге `dist/`.

### Публикация

Проект настроен для сборки через GitHub Actions. Для публикации через GitHub Pages проверь в настройках репозитория:

**Settings → Pages → Build and deployment → Source → GitHub Actions**

Рабочий процесс развёртывания находится в `.github/workflows/deploy.yml`. Перед публикацией проверь статус последнего запуска в разделе **Actions**.

---

## 🌍 English

**SCHOOL CALC** is a school-grade calculator created by German as part of **GERMAN'$ CODE TEAM**. It helps users calculate an average grade and, where supported, estimate what future grades may be needed to reach a target average.

### Features

- Average-grade calculations.
- Target-average planning in supported builds.
- 5-, 10-, and 12-point grading scales in compatible versions.
- Contextual tips and rounded results.
- Russian and English interfaces in supported versions.
- Light/dark themes and accent customization where available.
- The Gera mascot.
- Web and Android versions.

Features may differ between APK, HTML, and individual releases. The calculation is an estimate and may not reflect teacher-specific rules or weighted assignments.

### Links

- **Web app:** [Open SCHOOL CALC](https://german-gpd.github.io/school-calc/)
- **Repository:** [German-GPD/school-calc](https://github.com/German-GPD/school-calc)
- **Developer:** [German on Telegram](https://t.me/german_gpd)
- **RedFox Telegram channel:** [redfox_g56](https://t.me/redfox_g56)
- **GERMAN'$ CODE TEAM Telegram group:** [g_code_team](https://t.me/g_code_team)

### Development

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

Create and preview a production build:

```bash
npm run build
npm run preview
```

The web application uses Vue 3 and Vite. GitHub Actions is configured for GitHub Pages deployment.

---

## 🔗 Сообщество / Community

- 📣 **RedFox:** https://t.me/redfox_g56
- 👥 **GERMAN'$ CODE TEAM:** https://t.me/g_code_team
- 👨‍💻 **German — разработчик:** https://t.me/german_gpd

Идеи, предложения и сообщения об ошибках можно отправлять разработчику через Telegram.

---

## 📄 Авторство и лицензия / Credits & License

**Автор проекта:** German  
**Команда:** GERMAN'$ CODE TEAM  
**Проект:** SCHOOL CALC  
**Copyright:** © 2026 German

Проект распространяется по лицензии **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**:  
https://creativecommons.org/licenses/by-nc/4.0/

Лицензия требует указывать авторство и не разрешает коммерческое использование без отдельного разрешения правообладателя. Перед повторным распространением или адаптацией ознакомься с полным текстом лицензии. Не выдавай работу автора за свою и не удаляй существующие уведомления об авторстве.

The project is distributed under **CC BY-NC 4.0**. Attribution is required, and commercial use is not permitted under this license without separate permission. Read the full license before redistributing or adapting the project. Do not claim the original work as your own or remove existing attribution notices.

---

<div align="center">

**SCHOOL CALC — меньше догадок, больше понимания.**

*Built with code. Developed with ambition.*

</div>
