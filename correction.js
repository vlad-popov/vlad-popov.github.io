var correction = function (task, index) {
    var newInput = document.createElement('input'),
        parent = event.target.parentNode.parentNode;

    newInput.className = 'edit';
    parent.appendChild(newInput);
    newInput.value = task.innerHTML;
    parent.classList.add('editing');
    newInput.focus();

    newInput.addEventListener('blur', function () {
        parent.classList.remove('editing');
        changeTask(index, 'name', newInput.value);
        parent.removeChild(newInput);
        addTasks();
    }, false);
};