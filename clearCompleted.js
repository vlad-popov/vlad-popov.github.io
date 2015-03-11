var clearCompleted = function () {
    var length = tasks.length,
        i = 0,
        allCompleteInput = $('#toggle-all');

    for (i; i < length; i++) {
        if (tasks[i] === undefined) {
            break
        } else if (tasks[i].status === 'Completed') {
            tasks.splice(i, 1);
            i--;
        }
    }
    allCompleteInput.checked = false;
    addTasks();
};