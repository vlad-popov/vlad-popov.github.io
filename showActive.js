var showActive = function () {
    var list = document.getElementById('todo-list'),
        count = document.getElementById('todo-count').firstChild;

    list.innerHTML = '';

    window.event.target.className = 'selected';

    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i] === undefined) {

        }
        else if (tasks[i].status === 'Active') {
            var li = document.createElement('li');
            li.innerHTML = getTask(i, tasks[i].name);
            list.appendChild(li);
        }

    }
};