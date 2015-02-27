var getTask = function (i, name) {
    return '<div class="view">\
        <input class="toggle" type="checkbox" onclick="makeCompleted(' + i + ', this)">\
        <label>' + name + '</label>\
        <button class="destroy" onclick="destroyTask(this,' + i + ')"></button>\
    </div>';
};