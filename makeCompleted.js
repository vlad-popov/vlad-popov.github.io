var makeCompleted = function (elem, i) {
    var parent = elem.parentNode.parentNode.classList;

    if (parent.contains('completed')) {
        parent.remove('completed');
        changeTask(i, 'status', 'Active');
    } else {
        parent.add('completed');
        changeTask(i, 'status', 'Completed');
    }

    if (tasks[i].status === 'Completed') {
        $('#clear-completed').style.display = '';
    }
    counter();
};