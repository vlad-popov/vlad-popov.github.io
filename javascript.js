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

window.onload = function addTask() {
    var list = document.getElementById('todo-list'),
        count = document.getElementById('todo-count').firstChild;

    for (var i = 0; i < tasks.length; i++) {
        var newListElem = document.createElement('li');

        newListElem.innerHTML += '<div class="view">\
        <input class="toggle" type="checkbox">\
        <label>' + tasks[i].name + '</label>\
        <button class="destroy"></button>\
    </div>';
        list.appendChild(newListElem);
        count.innerHTML = i + 1;
    }

    if (count.innerHTML > 0) {
        document.getElementById('main').style.display = '';
        document.getElementById('footer').style.display = '';
    }
//    console.log(document.getElementById('main'));
};


function showActive() {
    var list = document.getElementById('todo-list');
    list.innerHTML = '';

    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].status === 'active') {
            var newListElem = document.createElement('li');

            newListElem.innerHTML += '<div class="view">\
                <input class="toggle" type="checkbox">\
                <label>' + tasks[i].name + '</label>\
                <button class="destroy"></button>\
            </div>';
            list.appendChild(newListElem);
        }
    }
}
