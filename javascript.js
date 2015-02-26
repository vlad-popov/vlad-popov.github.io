var tasks = [
    {
        name: 'Покормить кота',
        status: 'Active'
    },
    {
        name: 'Помыть кота',
        status: 'Active'
    },
    {
        name: 'Постричь кота',
        status: 'Active'
    },
    {
        name: 'Продать кота',
        status: 'Active'
    }
];


var addTasks = function addTasks() {
    var list = document.getElementById('todo-list'),
        j = 0,
        count = document.getElementById('todo-count').firstChild;

    list.innerHTML = '';

    for (var i = 0; i < tasks.length; i++) {
        newListElem = document.createElement('li');

        addClassCompleted(i);
        getTask(i);

        list.appendChild(newListElem);
        count.innerHTML = i + 1;

        if (tasks[i].status === 'Completed') {
            j += j++;
            document.getElementById('clear-completed').style.display = '';
        }
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
            addClassCompleted(i);
            getTask(i);
            list.appendChild(newListElem);
        }
    }

}






var getTask = function (i) {
    console.log(i);

    newListElem.innerHTML += '<div class="view">\
        <input class="toggle" type="checkbox" onclick="makeCompleted(this,'+ i +')">\
        <label>' + tasks[i].name + '</label>\
        <button class="destroy" onclick="destroyTask(this,'+ i +')"></button>\
    </div>';
};

var addClassCompleted = function (i) {
    if (tasks[i].status === 'Completed') {
        newListElem.className = 'completed';
    }
    return newListElem;
};

//console.log(document.getElementsByClassName('toggle'));

var makeCompleted = function (elem, i) {
    var parent = elem.parentNode.parentNode.classList;

    if (parent.contains('completed')) {
        parent.remove('completed');
        elem.removeAttribute('checked');
        tasks[i].status = 'Active';
    } else {
        parent.add('completed');
        tasks[i].status = 'Completed';
        elem.setAttribute('checked', 'checked');
    }

    if (tasks[i].status === 'Completed') {
        document.getElementById('clear-completed').style.display = '';
    }
};

var destroyTask = function (elem, i) {
    elem.parentNode.parentNode.innerHTML = '';
    delete tasks[i];
};