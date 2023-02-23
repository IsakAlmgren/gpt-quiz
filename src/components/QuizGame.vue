<!-- The GPT Quiz app is a web-based quiz game that tests your knowledge on a variety of topics. The app allows you to select a category and start the game, with questions from that category. If you select "All" as the category, questions from all categories will be included.

The app features a clean and simple interface, with a large title and buttons to select the category and start the game. During the game, questions are displayed one at a time, with a list of possible answers to choose from. After each question, the app displays whether your answer was correct or not, and updates your score accordingly.

The app uses data from a JSON file, which includes questions and their corresponding answers and categories. The app also includes a restart button that allows you to start a new game at any time.

Overall, the GPT Quiz app is a fun and interactive way to test your knowledge on a variety of topics, and is easy to use and navigate. -->


<template>
    <div>
        <h1>{{ title }}</h1>
        <category-select @category-selected="handleCategorySelected" :categories="categories" />
        <div v-if="!gameStarted">
            <button @click="startGame">Start Game</button>
        </div>
        <div v-if="gameStarted && currentQuestionIndex < filteredQuestions.length">
            <quiz-question v-if="currentQuestion" :question="currentQuestion"
                :category="selectedCategory" @answer-selected="handleAnswerSelected" />
        </div>
        <div v-if="gameStarted && currentQuestionIndex === filteredQuestions.length">
            <h2>Game Over!</h2>
            <quiz-score :score="score" />
            <button @click="restartGame">Restart</button>
        </div>
        <quiz-score v-if="!gameStarted" :score="score" />
    </div>
</template>

<script>
import QuizQuestion from './QuizQuestion.vue'
import QuizScore from './QuizScore.vue'
import uniq from 'lodash/uniq';

export default {
    components: {
        QuizQuestion,
        QuizScore
    },
    data() {
        const questionsData = require('../data/questions.json');
        const categories = uniq(questionsData.map(q => q.category)).concat(['All']);
        return {
            title: 'GPT Quiz',
            questions: questionsData,
            gameStarted: false,
            currentQuestionIndex: 0,
            score: 0,
            categories,
            selectedCategory: 'All'
        };
    },

    methods: {
        startGame() {
            if (this.selectedCategory === 'All') {
                this.score = 0;
            }
            if (this.selectedCategory === null) {
                alert('Please select a category before starting the game!');
            } else {
                this.gameStarted = true;
                this.score = 0; // Reset the score to 0 when starting a new game
            }
        },
        handleAnswerSelected(answer) {
            console.log('Answer selected:', answer);
            if (answer === this.currentQuestion.correctAnswer) {
                this.score++;
            }
            if (this.currentQuestionIndex < this.filteredQuestions.length - 1) {
                this.currentQuestionIndex++;
            } else {
                this.gameStarted = false;
            }
        },
        handleCategorySelected(category) {
            this.selectedCategory = category;
        },
        restartGame() {
            this.gameStarted = false
            this.score = 0
            this.currentQuestionIndex = 0
        }
    },
    computed: {
        filteredQuestions() {
            if (this.selectedCategory === 'All') {
                return this.questions;
            } else {
                return this.questions.filter(q => q.category === this.selectedCategory);
            }
        },
        currentQuestion() {
            if (this.currentQuestionIndex < this.filteredQuestions.length) {
                return this.filteredQuestions[this.currentQuestionIndex];
            } else {
                return null;
            }
        },
    }
}
</script>


<style>
  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 1rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    margin: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 0.25rem;
  }

  button:hover {
    background-color: #3e8e41;
  }

  div {
    /* display: flex; */
    /* justify-content: center; */
  }
</style>
