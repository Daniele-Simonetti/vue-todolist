const app = new Vue(
  {
    el: '#app',
    data: {
      todos: [
        {
          text: 'prepare la pasta',
          done: false
        },
        {
          text: 'scola la pasta',
          done: true
        },
      ]
    },
    methods: {
      removeTodo: function (todo) {
        this.todos.splice(todo, 1); 
      }
    }
  }
)