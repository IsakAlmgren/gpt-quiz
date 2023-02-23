import { createApp } from 'vue'
import App from './App.vue'

import QuizGame from './components/QuizGame.vue'
import CategorySelect from './components/CategorySelect.vue'
import QuizScore from './components/QuizScore.vue'

const app = createApp(App)

app.component('quiz-game', QuizGame)
app.component('category-select', CategorySelect)
app.component('quiz-score', QuizScore)

app.mount('#app')