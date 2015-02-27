var addTasks = function addTasks() {
    var list = document.getElementById('todo-list'),
        count = document.getElementById('todo-count').firstChild;

    list.innerHTML = '';

    for (var i = 0; i < tasks.length; i++) {
        var li = document.createElement('li');

        if (tasks[i] === undefined) {
            while (tasks[i] === undefined || i > tasks.length) {
                i++
            }
        }

        li.innerHTML = getTask(i, tasks[i].name);

        list.appendChild(li);

        if (tasks[i].status === 'Completed') {
//            var input = li.getElementsByTagName('input');
            li.className = 'completed';
//            input.setAttribute("checked", "checked");
            document.getElementById('clear-completed').style.display = '';
        }
    }

    count.innerHTML = tasks.length;

    if (count.innerHTML > 0) {
        document.getElementById('main').style.display = '';
        document.getElementById('footer').style.display = '';
    }
};

var makeCompleted = function (i, elem) {
    var parent = elem.parentNode.parentNode.classList;

    if (parent.contains('completed')) {
        parent.remove('completed');
        elem.removeAttribute('checked');
        tasks[i].status = 'Active';
    } else {
        parent.add('completed');
        elem.setAttribute('checked', 'checked');
        tasks[i].status = 'Completed';
    }

    if (tasks[i].status === 'Completed') {
        document.getElementById('clear-completed').style.display = '';
    }
};
