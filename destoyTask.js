var destroyTask = function (i) {
    var list = $('#todo-list');
    list.children[i].innerHTML = '';
    tasks.splice(i, 1);
    addTasks()
};


