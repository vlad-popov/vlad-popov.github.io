var destroyTask = function (elem, i) {
    var length = tasks.length;
    elem.parentNode.parentNode.innerHTML = '';
    tasks[i].status = 'destoyed';
    counter(length);
    tasks.splice(i, 1);
};