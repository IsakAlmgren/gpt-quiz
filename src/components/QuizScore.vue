<template>
    <div>
        <h2>Score: {{ score }}</h2>
    </div>
</template>
  

<script>
export default {
  name: 'QuizScore',
  props: {
    score: {
      type: Number,
      required: true
    }
  }
}
</script>