var counter = function () {
        var scorer = 0,
            count = document.getElementById('todo-count').firstChild,
            length = tasks.length;

        for (var i = 0; i < length; i++) {
            if (tasks[i].status === 'Active') {
                scorer++;
            }
        }
        count.innerHTML = scorer;

        if (scorer === 1) {
            document.getElementById('todo-count').innerHTML = '<strong>' + scorer + '</strong> item left';
        } else if (scorer > 1) {
            document.getElementById('todo-count').innerHTML = '<strong>' + scorer + '</strong> items left';
        }

        if (scorer > 0) {
            document.getElementById('main').style.display = '';
            document.getElementById('footer').style.display = '';
        } else if (tasks.length === 0) {
            document.getElementById('main').style.display = 'none';
            document.getElementById('footer').style.display = 'none';
        }
    };