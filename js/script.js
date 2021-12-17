const app = new Vue(
  {
    el: '#app',
    data: {
      todoNew: '',
      todos: [
        {
          text: 'test uno ',
          done: ''
        },
        {
          text: 'test due',
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
      removeTodo: function (index) {
        this.todos.splice(index, 1); 
        console.log(index);
      },
      addTodo: function () {
        if (this.todoNew.length != 0) {
          let obj = {
            text: this.todoNew,
            done: ''
          }
          this.todos.unshift(obj);
          this.todoNew = ''; 
        }  
      },
    }
  }
)

