var makeAllCompleted = function (input) {
    var li = document.getElementById('todo-list').children,
        checkbox = document.getElementsByClassName('toggle'),
        length = tasks.length;

    document.getElementById('clear-completed').style.display = '';

    for (var i = 0; i < length; i++) {
        if (input.checked === true) {
            tasks[i].status = 'Completed';
            li[i].className = 'completed';
            checkbox[i].checked = true;
        } else if (input.checked === false) {
            tasks[i].status = 'Active';
            li[i].classList.remove('completed');
            checkbox[i].checked = false;
        }
    }
    document.getElementById('todo-count').innerHTML = '<strong>0</strong> items left';
    counter();
};