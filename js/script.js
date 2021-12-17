const app = new Vue(
  {
    el: '#app',
    data: {
      todoNew: '',
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
      removeTodo: function (todo, index) {
        this.todos.splice(todo, index); 
        console.log(todo, index);
      },
      addTodo: function () {
        if (this.todoNew.length != 0) {
          let obj = {
            text: this.todoNew,
            done: ''
          }
          this.todos.push(obj); 
        }  
      },
    }
  }
)

// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.