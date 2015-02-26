var tasks = [
    {
        name: 'Покормить кота',
        status: 'Active'
    },
    {
        name: 'Помыть кота',
        status: 'Completed'
    },
    {
        name: 'Постричь кота',
        status: 'Active'
    },
    {
        name: 'Продать кота',
        status: 'Completed'
    }
];


var addTasks = function addTasks() {
    var list = document.getElementById('todo-list'),
        count = document.getElementById('todo-count').firstChild;

    list.innerHTML = '';

    for (var i = 0; i < tasks.length; i++) {
        newListElem = document.createElement('li');

        makeCompleted(i);
        getTask(i);

        list.appendChild(newListElem);
        count.innerHTML = i + 1;
    }

    if (count.innerHTML > 0) {
        document.getElementById('main').style.display = '';
        document.getElementById('footer').style.display = '';
    }
};

function selected() {
    var list = document.getElementById('todo-list'),
        currentTarget = window.event.target;

    list.innerHTML = '';

    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].status === currentTarget.innerHTML) {
            currentTarget.className = 'selected';
            newListElem = document.createElement('li');
            makeCompleted(i);
            getTask(i);

            list.appendChild(newListElem);
        }
    }
}

var getTask = function (i) {
    newListElem.innerHTML += '<div class="view">\
        <input class="toggle" type="checkbox">\
        <label>' + tasks[i].name + '</label>\
        <button class="destroy"></button>\
    </div>';

};

var makeCompleted = function (i) {
    if (tasks[i].status === 'Completed') {
        newListElem.className = 'сompleted'
    }
    return newListElem
};

