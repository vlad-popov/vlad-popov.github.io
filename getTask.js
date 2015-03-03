var getTask = function (i, name) {
    return '<div class="view">\
        <input class="toggle" type="checkbox" onclick="makeCompleted(this, ' + i + ')">\
        <label ondblclick="correction()">' + name + '</label>\
        <button class="destroy" onclick="destroyTask(this,' + i + ')"></button>\
    </div>';
};