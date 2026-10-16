import { createApp, nextTick } from 'vue';
import App from './App.vue';
import '../style.css';

createApp(App).mount('#app');

// Wait for Vue to render before attaching the existing DOM-based grade logic.
await nextTick();
await import('../script.js');
