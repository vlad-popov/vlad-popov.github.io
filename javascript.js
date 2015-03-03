var addTasks = function addTasks() {
    var list = document.getElementById('todo-list'),
        old = document.getElementsByClassName('selected'),
        length = tasks.length,
        i = 0;

    event.target.className = 'selected';

    list.innerHTML = '';

    for (i; i < length; i++) {
        var li = document.createElement('li');

            li.innerHTML = getTask(i, tasks[i].name);
            list.appendChild(li);

        if (tasks[i].status === 'Completed') {
            li.className = 'completed';
            document.getElementById('clear-completed').style.display = '';
        }
    }

    counter(length);
};


var addTask = function () {
    var input = document.getElementById('new-todo'),
        newTodo = {};

    if (event.keyCode === 13 && input.value === '') {
        return false;
    } else if (event.keyCode === 13) {
        newTodo.name = input.value;
        newTodo.status = 'Active';
        tasks.push(newTodo);
        addTasks();
        input.value = '';
    }
};
//////////////////////// доделать
var correction = function () {

    if (event.target.className === '') {
        event.target.classList.add('editing');
    } else if (event.target.className != '') {
        event.target.classList.remove('editing');
    }
//    document.onclick = parent.getElementsByTagName('label').classList.remove('editing');
};