var makeCompleted = function (elem, i) {
    var parent = elem.parentNode.parentNode.classList,
    length = tasks.length;
    if (parent.contains('completed')) {
        parent.remove('completed');
//        elem[i].checked = true;
        tasks[i].status = 'Active';
    } else {
        parent.add('completed');
        tasks[i].status = 'Completed';
//        elem[i].checked = false;
    }
    console.log(parent.contains('completed'), tasks[i]);

    if (tasks[i].status === 'Completed') {
        document.getElementById('clear-completed').style.display = '';
    }
    counter(length);

};