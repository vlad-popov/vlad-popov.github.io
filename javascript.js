var addTasks = function () {
    var list = $('#todo-list'),
        oldSelect = $('.selected'),
        length = tasks.length,
        i = 0,
        newSelect = $('#all'),
        checkbox = $('.toggle');


    oldSelect[0].classList.remove('selected');
    newSelect.children[0].className = 'selected';

    list.innerHTML = '';

    for (; i < length; i++) {
        var li = document.createElement('li');

        li.innerHTML = getTask(i, tasks[i].name);
        list.appendChild(li);


        if (checkTask(i, 'status', 'Completed')) {
            li.className = 'completed';
            checkbox[i].checked = true;
            $('#clear-completed').style.display = '';
        }
    }
    counter();
};


var addTask = function () {
    var input = $('#new-todo'),
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


var changeTask = function (index, change, value) {
    tasks[index][change] = value;
};

var checkTask = function (index, check, value) {
    if (tasks[index][check] === value) {
        return true;
    }

};

