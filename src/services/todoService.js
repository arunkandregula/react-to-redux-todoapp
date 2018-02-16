// We need to run: json-server -p 8080 src/data/db.json

const baseURL = 'http://localhost:8080/todos';
const allBaseURL = baseURL;
const activeTodosBaseURL = 'http://localhost:8080/todos?isComplete=false';
const completeTodosBaseURL = 'http://localhost:8080/todos?isComplete=true';

export default {
  loadTodos(filter) {
    let url = allBaseURL;
    switch(filter){
      case 'all': url = allBaseURL;
                     break;
      case 'active': url = activeTodosBaseURL;
                     break;
      case 'complete': url = completeTodosBaseURL;
                     break;
    }
    return fetch(url).then((todos)=>{
      return todos.json();
    });
  },
  createTodo(todo){
    return fetch(baseURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    }).then(res => res.json());
  },
  saveTodo(todo){
    return fetch(`${baseURL}/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
      .then(res => res.json());
  },
  deleteTodo(todo){
    return fetch(`${baseURL}/${todo.id}`,{
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    }).then( res => res.json() );
  }
}