const app = new Vue(
  {
    el: '#app',
    data: {
      todos: [
        {
          text: 'prepare la pasta',
          done: ''
        },
        {
          text: 'scola la pasta',
          done: ''
        },
      ]
    },
    methods: {
      doneAsseg: function (todo) {
        if (todo.done == false) {
          todo.done = true;
          // console.log(todo);
        } else if (todo.done == true) {
          todo.done = false;
        }
      },
      removeTodo: function (todo) {
        this.todos.splice(todo, 1); 
      }
    }
  }
)