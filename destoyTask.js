var destroyTask = function (i) {
    var parent = document.getElementById('todo-list');
// необходимо удалить узел целиком
    parent.children[i].innerHTML = '';
/////////
    tasks.splice(i, 1);
    addTasks()
};


