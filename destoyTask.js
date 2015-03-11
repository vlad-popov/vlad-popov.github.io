var destroyTask = function (i) {
    var parent = $('#todo-list');
    parent.children[i].innerHTML = '';
    tasks.splice(i, 1);
    addTasks()
};


