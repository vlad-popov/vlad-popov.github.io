var clearCompleted = function () {
    var i = 0,
        allCompleteInput = $('#toggle-all');

    for (i; i < tasks.length; i++) {
        if (tasks[i] === undefined) {
            break
        } else if (checkTask(i, 'status', 'Completed')) {
            tasks.splice(i, 1);
            i--;
        }
    }
    allCompleteInput.checked = false;
    addTasks();
};