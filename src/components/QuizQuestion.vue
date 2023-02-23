<template>
  <div class="quiz-question">
    <h2>{{ category }}</h2>
    <div class="question">{{ question.question }}</div>
    <ul>
      <li v-for="answer in question.answers" :key="answer" @click="handleAnswerSelected(answer)">
        {{ answer }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleAnswerSelected(answer) {
      this.$emit("answer-selected", answer);
    },
  },
};
</script>

<style scoped>
.quiz-question {
  text-align: center;
  margin: 2rem auto;
  width: 80%;
}

h2 {
  font-size: 2rem;
}

.question {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin: 1rem 0;
  cursor: pointer;
  border: 2px solid #ddd;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;
}

li:hover {
  background-color: #ddd;
}
</style>
