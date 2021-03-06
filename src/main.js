import { createApp } from 'vue'
import App from './App.vue'
import './index.css';
import BaseCard from './components/UI/BaseCard.vue'
import BaseButton from './components/UI/BaseButton.vue'



const app = createApp(App);
app.mount('#app');
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
