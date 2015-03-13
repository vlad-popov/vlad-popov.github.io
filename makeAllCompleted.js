var makeAllCompleted = function (input) {
    var li = $('#todo-list').children,
        length = tasks.length;

    $('#clear-completed').style.display = '';

    for (var i = 0; i < length; i++) {
        if (checkTask(i, 'status', 'Active') && tasks[i].className !== undefined) {
            changeTask(i, 'status', 'Completed');
            li[i].className = 'completed';
            checkbox[i].checked = true;
        } else if (checkTask(i, 'status', 'Active') && tasks[i].classList !== undefined) {
            changeTask(i, 'status', 'Active');
            li[i].classList.remove('completed');
            checkbox[i].checked = false;
        }
    }
    $('#todo-count').innerHTML = '<strong>0</strong> items left';
    counter();
}; 