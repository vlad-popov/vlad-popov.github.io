var destroyTask = function (elem, i) {
    elem.parentNode.parentNode.innerHTML = '';
    delete tasks[i];
};