import { createApp, nextTick } from 'vue';
import App from './App.vue';
import '../style.css';

createApp(App).mount('#app');

// Initialize the legacy UI only after Vue has mounted its markup.
// Avoid top-level await so the production build works with a wider range of browsers.
nextTick(() => {
  import('../script.js').catch((error) => {
    console.error('[SCHOOL CALC] Failed to initialize grade controls:', error);
    const splash = document.getElementById('splash');
    if (splash) splash.remove();

    const app = document.querySelector('.app');
    if (app) {
      const notice = document.createElement('p');
      notice.setAttribute('role', 'alert');
      notice.style.cssText = 'margin:16px 0;padding:12px;border:1px solid #d44;background:#fff0f0;color:#711;font:13px/1.5 system-ui';
      notice.textContent = 'Не удалось запустить калькулятор. Обнови страницу или открой консоль браузера для подробностей.';
      app.prepend(notice);
    }
  });
});
