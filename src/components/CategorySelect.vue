<template>
    <div class="category-select-wrapper">
      <label for="category-select">Select a category:</label>
      <select id="category-select" v-model="selectedCategory" @change="handleCategorySelected">
        <option disabled value="">Please select a category</option>
        <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      categories: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        selectedCategory: "",
      };
    },
    methods: {
      handleCategorySelected() {
        this.$emit("category-selected", this.selectedCategory || "All");
      },
    },
  };
  </script>
  
  <style>
  .category-select-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  label {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  select {
    width: 100%;
    max-width: 400px;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
    background-color: #fff;
  }
  
  option[disabled] {
    color: #ccc;
  }
  </style>
  