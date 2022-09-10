<template>
  <v-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Title</th>
          <th class="text-left">Completed</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id">
          <td>{{ todo.id }}</td>
          <td>{{ todo.title }}</td>
          <td>
            <v-checkbox v-model="todo.completed" hide-details></v-checkbox>
          </td>
        </tr>
      </tbody>
    </template>
  </v-table>
</template>
<script>
export default {
  name: "TodoList",
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((response) => (this.todos = response))
      .catch((error) => console.error(error));
  },
};
</script>
