<script setup>
import { computed, ref } from "vue";

const grades = ref([]);
const nextGrade = ref(8);

const average = computed(() => {
  if (grades.value.length === 0) return "—";

  const sum = grades.value.reduce((total, grade) => total + grade, 0);
  return (sum / grades.value.length).toFixed(2);
});

function addGrade() {
  const grade = Number(nextGrade.value);

  if (!Number.isInteger(grade) || grade < 1 || grade > 10) return;
  grades.value.push(grade);
}

function removeGrade(index) {
  grades.value.splice(index, 1);
}
</script>

<template>
  <section class="school-calc-reference">
    <p class="eyebrow">SCHOOL CALC · VUE REFERENCE</p>
    <h1>Оценки</h1>

    <div class="average">
      <span>Средний балл</span>
      <strong>{{ average }}</strong>
    </div>

    <form @submit.prevent="addGrade">
      <label for="grade">Новая оценка</label>
      <select id="grade" v-model.number="nextGrade">
        <option v-for="grade in 10" :key="grade" :value="grade">
          {{ grade }}
        </option>
      </select>
      <button type="submit">Добавить</button>
    </form>

    <ul v-if="grades.length" class="grade-list">
      <li v-for="(grade, index) in grades" :key="index">
        <span>Оценка {{ index + 1 }}: {{ grade }}</span>
        <button type="button" @click="removeGrade(index)">Удалить</button>
      </li>
    </ul>
    <p v-else class="empty">Пока нет оценок — добавь первую.</p>

    <small>
      Это отдельный Vue-пример для демонстрации структуры компонента.
      Основная опубликованная версия по-прежнему запускается из index.html.
    </small>
  </section>
</template>

<style scoped>
.school-calc-reference {
  max-width: 32rem;
  margin: 2rem auto;
  padding: 1.25rem;
  border: 1px solid #dedfd6;
  background: #fffefa;
  color: #22241f;
  font-family: system-ui, sans-serif;
}

.eyebrow {
  font: 0.7rem "Courier New", monospace;
  letter-spacing: 0.08em;
}

.average {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 1.5rem;
}

.average strong {
  font-size: 2rem;
}

form,
.grade-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.grade-list {
  padding: 0;
  list-style: none;
}

.grade-list li {
  padding-block: 0.5rem;
  border-bottom: 1px solid #dedfd6;
}

button,
select {
  padding: 0.5rem 0.75rem;
  border: 1px solid #22241f;
  background: #8db9ff;
  color: #20221e;
}

.empty,
small {
  display: block;
  margin-top: 1rem;
  line-height: 1.5;
}
</style>
