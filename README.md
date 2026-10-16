<div align="center">

# 🧮 SCHOOL CALC

### Школьный калькулятор оценок · Grade tracker

**Made by German · GERMAN'$ CODE TEAM**

[🌐 Web app](https://german-gpd.github.io/school-calc/) · [💻 Source code](https://github.com/German-GPD/school-calc) · [✉️ Developer](https://t.me/german_gpd)

![Version](https://img.shields.io/badge/version-2.1.0-8db9ff)
![Vue](https://img.shields.io/badge/Vue-3-42b883?logo=vuedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tests](https://img.shields.io/badge/tests-Node.js-339933?logo=nodedotjs&logoColor=white)
![Languages](https://img.shields.io/badge/languages-RU%20%7C%20EN-8A2BE2)

*Считай. Анализируй. Двигайся к цели.*

</div>

---

## 🇷🇺 О проекте

**SCHOOL CALC** — калькулятор школьных оценок, созданный German в рамках **GERMAN'$ CODE TEAM**. Проект помогает считать средний балл и отслеживать оценки без аккаунта и облачного профиля.

Веб-версия построена на **Vue 3 + Vite**, а расчётная логика вынесена в отдельный модуль и покрыта автоматическими тестами.

### Возможности

- **Средний балл в реальном времени** — результат обновляется при добавлении и удалении оценок.
- **Три шкалы оценивания** — 5, 10 и 12 баллов.
- **История текущих оценок** — каждая отметка отображается отдельным элементом и удаляется отдельно.
- **Локальное сохранение** — оценки, шкала, язык, тема и акцент сохраняются в браузере на этом устройстве.
- **Две темы** — светлая и тёмная.
- **Цветовые акценты** — зелёный, синий, красный, жёлтый и фиолетовый.
- **Русский и английский интерфейс.**
- **Гера** — маскот и помощник с реакциями на текущий результат.
- **Информационный блок** — объявление загружается из `event.txt`.
- **Адаптивный интерфейс** — поддержка мобильных и настольных экранов.
- **Расчётное ядро без DOM** — среднее, округление, проверка оценок и планирование достижения цели доступны как отдельные функции.
- **Автоматические тесты** — проверка математической логики и валидации сохранённых данных.

> Расчёты используют обычное арифметическое среднее. Если в школе контрольные, экзамены или отдельные оценки имеют разный вес, результат может отличаться от официального.

### Как пользоваться

1. Открой [веб-версию](https://german-gpd.github.io/school-calc/).
2. Нажимай на нужные оценки, чтобы добавить их в список.
3. Средний балл и индикатор обновятся автоматически.
4. Удаляй отдельные отметки кнопкой `×` или очищай весь список через `CLEAN`.
5. Открой настройки, чтобы поменять шкалу, тему, акцент или язык.

### Данные и приватность

SCHOOL CALC не требует аккаунта и не отправляет оценки на собственный сервер. Приложение хранит состояние в **localStorage браузера** на текущем устройстве.

- Оценки и настройки переживают перезагрузку страницы.
- Очистка данных сайта в браузере удалит сохранённое состояние.
- Приватный режим браузера может удалять данные после закрытия окна.
- Не вводи в приложение пароли и другие секретные сведения.

### Информационное сообщение

Файл `event.txt` в корне репозитория задаёт текст информационного блока. Измени его содержимое и опубликуй обновление, чтобы заменить объявление на сайте.

---

## 🧑‍💻 Для разработчиков

### Технологии

- [Vue 3](https://vuejs.org/) — интерфейс.
- [Vite](https://vite.dev/) — dev-сервер и production-сборка.
- JavaScript ES modules — логика и модули.
- Node.js Test Runner — автоматические тесты.
- GitHub Actions + GitHub Pages — сборка и публикация.

### Структура проекта

| Путь | Назначение |
| --- | --- |
| `index.html` | HTML-точка входа |
| `src/App.vue` | разметка интерфейса |
| `src/main.js` | запуск Vue и подключение стилей |
| `src/grade-engine.js` | среднее, округление, валидация и расчёт плана цели |
| `src/storage.js` | безопасная загрузка и сохранение состояния |
| `script.js` | обработчики интерфейса и связь с расчётным ядром |
| `style.css` | стили и темы |
| `event.txt` | текст информационного блока |
| `tests/grade-engine.test.js` | тесты расчётов и проверки данных |
| `vite.config.js` | конфигурация Vite и копирование `event.txt` |
| `.github/workflows/deploy.yml` | автоматическая сборка и публикация |

### Требования

- Node.js 22 или совместимая версия, поддерживающая установленный Vite.
- npm.

### Установка и запуск

```bash
git clone https://github.com/German-GPD/school-calc.git
cd school-calc
npm install
npm run dev
```

Vite выведет локальный адрес для открытия приложения.

### Тесты и production-сборка

```bash
npm test
npm run build
npm run preview
```

- `npm test` запускает тесты через встроенный Node.js Test Runner.
- `npm run build` создаёт production-сборку в `dist/`.
- `npm run preview` запускает локальный просмотр готовой сборки.

### Публикация на GitHub Pages

Сборка и публикация настроены через GitHub Actions. В настройках репозитория открой:

**Settings → Pages → Build and deployment → Source → GitHub Actions**

После отправки изменений в `main` проверь результат в разделе **Actions**. Сам факт наличия workflow ещё не означает, что конкретный запуск завершился успешно.

---

## 🌍 English

**SCHOOL CALC** is a school-grade calculator built by German as part of **GERMAN'$ CODE TEAM**. It calculates the arithmetic average and keeps a local list of grades without requiring an account.

### Features

- Live average calculation when grades are added or removed.
- 5-, 10-, and 12-point grading scales.
- Individual grade removal and full-list clearing.
- Local persistence for grades and preferences using browser `localStorage`.
- Light and dark themes with five accent colours.
- Russian and English interface.
- Gera mascot and dynamic feedback.
- Announcement text loaded from `event.txt`.
- Responsive layout for desktop and mobile.
- A reusable calculation module with input validation and target-planning helpers.
- Automated tests for calculations and stored-state validation.

### Privacy

The app does not require an account and does not send grades to a SCHOOL CALC server. Data is stored in the browser's local storage on the current device. Clearing site data removes the saved state. Private browsing may discard it when the session ends.

### Development

Requirements: Node.js and npm.

```bash
git clone https://github.com/German-GPD/school-calc.git
cd school-calc
npm install
npm run dev
```

Run checks and build the production version:

```bash
npm test
npm run build
npm run preview
```

The calculation engine is in `src/grade-engine.js`; browser persistence is handled by `src/storage.js`; UI wiring remains in `script.js`. GitHub Actions builds and deploys the site to GitHub Pages.

---

## 🔗 Community

- **Developer:** [@german_gpd](https://t.me/german_gpd)
- **RedFox:** [@redfox_g56](https://t.me/redfox_g56)
- **GERMAN'$ CODE TEAM:** [Telegram group](https://t.me/g_code_team)
- **Live web app:** [german-gpd.github.io/school-calc](https://german-gpd.github.io/school-calc/)

---

<div align="center">

**SCHOOL CALC 2.1.0**  
Created with care by **German · GERMAN'$ CODE TEAM**

</div>
