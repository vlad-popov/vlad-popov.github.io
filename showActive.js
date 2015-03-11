var showActive = function () {
    var list = $('#todo-list'),
        old = $('.selected'),
        length = tasks.length;

    old[0].classList.remove('selected');
    list.innerHTML = '';

    event.target.className = 'selected';

    for (var i = 0; i < length; i++) {

        if (tasks[i].status === 'Active') {
            var li = document.createElement('li');
            li.innerHTML = getTask(i, tasks[i].name);
            list.appendChild(li);
        }

    }
};