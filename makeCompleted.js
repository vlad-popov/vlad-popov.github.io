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