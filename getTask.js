var getTask = function (i, name) {
    return '<div class="view">\
        <input class="toggle" type="checkbox" onclick="makeCompleted(this, ' + i + ')">\
        <label ondblclick = "correction(this, ' + i + ')">' + name + '</label>\
        <button class="destroy" onclick="destroyTask(' + i + ')"></button>\
    </div>';
};