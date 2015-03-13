var counter = function () {
        var scorer = 0,
            count = $('#todo-count');

        for (var i = 0; i < tasks.length; i++) {
            if (checkTask(i, 'status', 'Active')) {
                scorer++;
            }
        }
        count.firstChild.innerHTML = scorer;

        if (scorer === 1) {
            count.innerHTML = '<strong>' + scorer + '</strong> item left';
        } else if (scorer > 1) {
            count.innerHTML = '<strong>' + scorer + '</strong> items left';
        }
        if (scorer > 0) {
            $('#main').style.display = '';
            $('#footer').style.display = '';
        } else if (tasks.length === 0) {
            $('#main').style.display = 'none';
            $('#footer').style.display = 'none';
        }
    };