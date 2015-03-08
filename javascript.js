var addTasks = function addTasks() {
    var list = document.getElementById('todo-list'),
        oldSelect = document.getElementsByClassName('selected'),
        length = tasks.length,
        i = 0,
        newSelect = document.getElementById('all');

    oldSelect[0].classList.remove('selected');
    newSelect.children[0].className = 'selected';

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
    counter();
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
    var newInput = document.createElement('input'),
        parent = event.target.parentNode.parentNode;

    console.log();

    if (event.target.className === '') {
        event.target.classList.add('editing');
    } else if (event.target.className != '') {
        event.target.classList.remove('editing');
    }
    parent.appendChild(newInput);
    newInput.className = 'edit';
    if (event.keyCode === 13) {

    }


   console.log(event.target.parentNode.parentNode);
};