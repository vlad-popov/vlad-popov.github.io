var makeCompleted = function (elem, i) {
    var parent = elem.parentNode.parentNode.classList;

    if (parent.contains('completed')) {
        parent.remove('completed');
//        elem[i].checked = true;
        tasks[i].status = 'Active';
    } else {
        parent.add('completed');
        tasks[i].status = 'Completed';
//        elem[i].checked = false;
    }

    if (tasks[i].status === 'Completed') {
        document.getElementById('clear-completed').style.display = '';
    }
    counter();
};