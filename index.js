
function newTask(title, description) {
  /* taskTitles.push(title);
  taskDescriptions.push(description);
  taskComplete.push(false); */

  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has ${this.complete ? " " : " not "} been completed!`);
    },

    completeTask: function() {
      this.complete = true;
    }
  };

  return task;
}

/* function logTaskState(task) {
  console.log(`${task.title} has ${task.complete ? " " : " not "} been completed!`);
}

function completeTask(task) {
  task.complete = true;
} */

const task1 = newTask("Hello World", "Hello World description");
const task2 = newTask("Do Laundry", "😨");
console.log(task1);


task1.logState();
task1.completeTask();
task1.logState();
