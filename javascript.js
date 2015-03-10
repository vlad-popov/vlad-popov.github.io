var addTasks = function () {
    var list = document.getElementById('todo-list'),
        oldSelect = document.getElementsByClassName('selected'),
        length = tasks.length,
        i = 0,
        newSelect = document.getElementById('all'),
        checkbox = document.getElementsByClassName('toggle');

    console.log(checkbox);

    oldSelect[0].classList.remove('selected');
    newSelect.children[0].className = 'selected';

    list.innerHTML = '';

    for (; i < length; i++) {
        var li = document.createElement('li');

        li.innerHTML = getTask(i, tasks[i].name);
        list.appendChild(li);

        if (tasks[i].status === 'Completed') {
            li.className = 'completed';
            checkbox[i].checked = true;
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


var correction = function (task, index) {
    var newInput = document.createElement('input'),
        parent = event.target.parentNode.parentNode;

        newInput.className = 'edit';
        parent.appendChild(newInput);
        newInput.value = task.innerHTML;
        parent.classList.add('editing');
        newInput.focus();

    newInput.addEventListener('blur', function () {
        parent.classList.remove('editing');
        tasks[index].name = newInput.value;
        parent.removeChild(newInput);
        addTasks();
    }, false);
};