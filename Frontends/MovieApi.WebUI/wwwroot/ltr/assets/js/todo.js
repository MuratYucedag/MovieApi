




// to do list 
var todos = [{
    text: "take out the trash",
    done: false,
    id: 0
}];
var currentTodo = {
    text: "",
    done: false,
    id: 0
}
document.getElementById("todo-input").oninput = function (e) {
    currentTodo.text = e.target.value;
};
/*
    //jQuery Version
    $('#todo-input').on('input',function(e){
        currentTodo.text = e.target.value;
       });
    */
function DrawTodo(todo) {
    var newTodoHTML = `
    <div class="pb-3 todo-item" todo-id="${todo.id}">
        <div class="input-group">
            
                <div class="input-group-text">
                    <input type="checkbox" onchange="TodoChecked(${todo.id})" aria-label="Checkbox for following text input" ${todo.done&& "checked"}>
                </div>
            
            <input type="text" readonly class="form-control ${todo.done&&" todo-done "} " aria-label="Text input with checkbox" value="${todo.text}">
            
                <button todo-id="${todo.id}" class="btn btn-outline-secondary bg-danger text-white" type="button" onclick="DeleteTodo(this);" id="button-addon2 ">X</button>
            
        </div>
    </div>
      `;
    var dummy = document.createElement("DIV");
    dummy.innerHTML = newTodoHTML;
    document.getElementById("todo-container").appendChild(dummy.children[0]);
    /*
        //jQuery version
         var newTodo = $.parseHTML(newTodoHTML);
         $("#todo-container").append(newTodo);
        */
}

function RenderAllTodos() {
    var container = document.getElementById("todo-container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    /*
        //jQuery version
          $("todo-container").empty();
        */
    for (var i = 0; i < todos.length; i++) {
        DrawTodo(todos[i]);
    }
}
RenderAllTodos();

function DeleteTodo(button) {
    var deleteID = parseInt(button.getAttribute("todo-id"));
    /*
        //jQuery version
          var deleteID = parseInt($(button).attr("todo-id"));
        */
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === deleteID) {
            todos.splice(i, 1);
            RenderAllTodos();
            break;
        }
    }
}

function TodoChecked(id) {
    todos[id].done = !todos[id].done;
    RenderAllTodos();
}

function CreateTodo() {
    newtodo = {
        text: currentTodo.text,
        done: false,
        id: todos.length
    }
    todos.push(newtodo);
    RenderAllTodos();
}













