var showCompleted = function () {
    var length = tasks.length;

    old[0].classList.remove('selected');
    todoList.innerHTML = '';

    event.target.className = 'selected';

    for (var i = 0; i < length; i++) {
        if (checkTask(i, 'status', 'Completed')) {
            var li = document.createElement('li');
            li.innerHTML = getTask(i, tasks[i].name);
            li.className = 'completed';
            todoList.appendChild(li);
            checkbox[checkbox.length - 1].checked = true;
        }
    }
};