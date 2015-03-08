var showCompleted = function () {
    var list = document.getElementById('todo-list'),
        count = document.getElementById('todo-count').firstChild,
        old = document.getElementsByClassName('selected'),
        length = tasks.length;

    old[0].classList.remove('selected');
    list.innerHTML = '';

    event.target.className = 'selected';

    for (var i = 0; i < length; i++) {
        if (tasks[i].status === 'Completed') {
            var li = document.createElement('li');
            li.innerHTML = getTask(i, tasks[i].name);
            li.className = 'completed';
            list.appendChild(li);
        }
    }
};