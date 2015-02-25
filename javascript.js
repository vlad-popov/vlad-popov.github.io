var tasks = [
    {
        name: 'Покормить кота',
        status: 'active'
    },
    {
        name: 'Помыть кота',
        status: 'completed'
    },
    {
        name: 'Постричь кота',
        status: 'active'
    },
    {
        name: 'Продать кота',
        status: 'completed'
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

function showActive() {
    var list = document.getElementById('todo-list');
    list.innerHTML = '';

    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].status === 'active') {
            newListElem = document.createElement('li');

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
    if (tasks[i].status === 'completed') {
        newListElem.className = 'completed'
    }
    return newListElem
};

