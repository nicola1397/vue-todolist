const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      tasks: [],
      newTask: { text: "", done: false },
    };
  },

  methods: {
    createTask() {
      const newTaskCopy = { ...this.newTask };

      if (!newTaskCopy.text) {
        alert("Inserisci un nome della task!");
        return;
      }
      this.tasks.push(newTaskCopy);
      this.newTask.text = "";
    },

    taskCompleted(task) {
      task.done = true;
    },

    taskReset(task) {
      task.done = false;
    },

    taskDelete(i) {
      this.tasks.splice(i, 1);
    },
  },
});

app.mount("#app");
