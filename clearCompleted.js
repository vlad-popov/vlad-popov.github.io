var clearCompleted = function () {
    var todoList = document.getElementById('todo-list').getElementsByTagName('li');

    for(var i = 0; i < tasks.length; i++) {
        console.log(tasks);
        if (tasks[i] === undefined || tasks[i].status === 'Completed') {
            todoList[i].innerHTML = '';
            tasks[i] = undefined;
        }
    }

};