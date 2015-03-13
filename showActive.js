var showActive = function () {
    var length = tasks.length;

    old[0].classList.remove('selected');
    todoList.innerHTML = '';

    event.target.className = 'selected';

    for (var i = 0; i < length; i++) {

        if (checkTask(i, 'status', 'Active')) {
            var li = document.createElement('li');
            li.innerHTML = getTask(i, tasks[i].name);
            todoList.appendChild(li);
        }

    }
};